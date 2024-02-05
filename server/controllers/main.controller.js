const db = require("../firebase/firebase.js");
const querys = require("../querys.js");

exports.getRawDataInDay = async (req, res) => {
  const { date } = req.body;
  if (!date) return res.status(400).json({ error: "All fields are required" });
  if (!isValidDateFormat(date))
    return res.status(400).send({ error: "date is not valid date format" });

  const yyyyMM = date.slice(0, 7);
  const dayDD = date.slice(8);
  const query = querys.getRawDataQuery(yyyyMM, dayDD);
  let dataObject = {
    type: "getRawDataInDay",
    date: req.body.date,
    data: [],
  };

  try {
    const rawDataDayRef = db.collection(query);
    const snapshot = await rawDataDayRef.get();
    if (snapshot.empty) {
      console.log(`[getRawDataInDay] snapshot.empty ${query}`);
      return res.status(500).send({
        error: `[getRawDataInDay] snapshot.empty ${query}`,
      });
    }
    snapshot.forEach((doc) => dataObject["data"].push(doc.data()));
  } catch (error) {
    console.log("[getRawDataInDay]", error);
    return res.status(500).json({
      error: `[getRawDataInDay] ${error}`,
    });
  }

  console.log(`[${yyyyMM}-${dayDD}] getRawDataInDay done`);
  return res.status(200).json(dataObject);
};

exports.getErrDataInDay = async (req, res) => {
  const { date } = req.body;
  if (!date) return res.status(400).json({ error: "All fields are required" });
  if (!isValidDateFormat(date))
    return res.status(400).send({ error: "date is not valid date format" });

  const yyyyMM = date.slice(0, 7);
  const dayDD = date.slice(8);
  const query = querys.getErrDataQuery(yyyyMM, dayDD);
  let dataObject = {
    type: "getErrDataInDay",
    date: req.body.date,
    data: [],
  };

  try {
    const errDataDayRef = db.collection(query);
    const snapshot = await errDataDayRef.get();
    if (snapshot.empty) {
      console.log(`[getErrDataInDay] snapshot.empty ${query}`);
      return res.status(500).send({
        error: `[getErrDataInDay] snapshot.empty ${query}`,
      });
    }
    snapshot.forEach((doc) => {
      let docData = doc.data();
      docData["id"] = doc.id;
      dataObject["data"].push(docData);
    });
  } catch (error) {
    console.log("[getErrDataInDay]", error);
    return res.status(500).json({
      error: `[getErrDataInDay] ${error}`,
    });
  }

  console.log(`[${yyyyMM}-${dayDD}] getErrDataInDay done`);
  return res.status(200).json(dataObject);
};

exports.updateErrDataById = async (req, res) => {
  // 에러원인, 해결방안, 처리여부
  const { date, id, errCause, solution, done } = req.body;
  if (!date || !id)
    return res.status(400).json({ error: "data and id fields are required" });
  if (!errCause && !solution && !done)
    return res
      .status(400)
      .json({ error: "At least one target update field is required" });
  if (!isValidDateFormat(date))
    return res.status(400).send({ error: "date is not valid date format" });

  const yyyyMM = date.slice(0, 7);
  const dayDD = date.slice(8);
  const query = querys.getErrDataByIdQuery(yyyyMM, dayDD, id);
  let dataObject = {
    type: "updateErrDataOne",
    date: req.body.date,
  };
  let updateObject = {};
  if (errCause) updateObject["errCause"] = errCause;
  if (solution) updateObject["solution"] = solution;
  if (done) updateObject["done"] = done;

  try {
    const errDataDayRef = db.doc(query);
    await errDataDayRef.update(updateObject);

    const updatedDocumentSnapshot = await errDataDayRef.get();
    dataObject["data"] = updatedDocumentSnapshot.data();
  } catch (error) {
    console.log("[updateErrDataOne]", error);
    return res.status(500).json({
      error: `[updateErrDataOne] ${error}`,
    });
  }

  console.log(`[${yyyyMM}-${dayDD}] updateErrDataOne done`);
  return res.status(200).json(dataObject);
};

exports.deleteNodeInfo = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: "id field is required" });

  const query = querys.deleteNodeInfoQuery(id);
  let dataObject = {
    type: "deleteNodeInfo",
  };

  try {
    const nodeInfoRef = db.doc(query);
    await nodeInfoRef.delete();
    dataObject["result"] = "deleteNodeInfo done";
  } catch (error) {
    console.log("[deleteNodeInfo]", error);
    return res.status(500).json({
      error: `[deleteNodeInfo] ${error}`,
    });
  }

  console.log(`deleteNodeInfo done`);
  return res.status(200).json(dataObject);
};

exports.updateNodeInfo = async (req, res) => {
  // 노드번호	노드위치	위도	경도	베터리잔량
  const { nodeAddress, location, latitude, longitude, id } = req.body;
  if (!id) return res.status(400).json({ error: "id field is required" });
  if (!nodeAddress && !location && !latitude && !longitude)
    return res.status(400).json({ error: "At least one field is required" });

  const query = querys.updateNodeInfoQuery(id);
  let dataObject = {
    type: "updateNodeInfo",
  };
  let updateObject = {};
  if (nodeAddress) updateObject["nodeAddress"] = nodeAddress;
  if (location) updateObject["location"] = location;
  if (latitude) updateObject["latitude"] = latitude;
  if (longitude) updateObject["longitude"] = longitude;

  try {
    const nodeInfoRef = db.doc(query);
    await nodeInfoRef.update(updateObject);

    const updatedDocumentSnapshot = await nodeInfoRef.get();
    dataObject["data"] = updatedDocumentSnapshot.data();
  } catch (error) {
    console.log("[updateNodeInfo]", error);
    return res.status(500).json({
      error: `[updateNodeInfo] ${error}`,
    });
  }

  console.log(`updateNodeInfo done`);
  return res.status(200).json(dataObject);
};

exports.createNodeInfo = async (req, res) => {
  // 노드번호	노드위치	위도	경도	베터리잔량
  const { nodeAddress, location, latitude, longitude } = req.body;
  if (!nodeAddress || !location || !latitude || !longitude)
    return res.status(400).json({ error: "All fields are required" });

  const query = querys.createNodeInfoQuery();
  let dataObject = {
    type: "createNodeInfo",
    result: "createNodeInfo done",
    data: {},
  };
  let addObject = {
    nodeAddress: nodeAddress,
    location: location,
    latitude: latitude,
    longitude: longitude,
    battery: "?%",
  };

  try {
    const nodeInfoRef = db.collection(query);
    await nodeInfoRef.add(addObject);
    dataObject["data"] = addObject;
  } catch (error) {
    console.log("[createNodeInfo]", error);
    return res.status(500).json({
      error: `[createNodeInfo] ${error}`,
    });
  }

  console.log(`createNodeInfo done`);
  return res.status(200).json(dataObject);
};

exports.getNodeInfo = async (req, res) => {
  const query = querys.getNodeInfoQuery();
  let dataObject = {
    type: "getNodeInfo",
    data: [],
  };

  try {
    const nodeInfoRef = db.collection(query);
    const snapshot = await nodeInfoRef.get();
    if (snapshot.empty) {
      console.log(`[getNodeInfo] snapshot.empty ${query}`);
      return res.status(500).send({
        error: `[getNodeInfo] snapshot.empty ${query}`,
      });
    }

    snapshot.forEach((doc) => {
      let docData = doc.data();
      docData["id"] = doc.id;
      dataObject["data"].push(docData);
    });
  } catch (error) {
    console.log("[getNodeInfo]", error);
    return res.status(500).json({
      error: `[getNodeInfo] ${error}`,
    });
  }

  console.log(`getNodeInfo done`);
  return res.status(200).json(dataObject);
};

function isValidDateFormat(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

function isValidYYYYMMFormat(dateString) {
  const regex = /^\d{4}-\d{2}/;
  return regex.test(dateString);
}
