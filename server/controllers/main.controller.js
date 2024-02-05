const db = require("../firebase/firebase.js");
const querys = require("../querys.js");

/*
  request body
  {
    "date":"2024-01-22"
  }
*/
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

// 에러원인, 해결방안, 처리여부
exports.updateErrDataById = async (req, res) => {
  const { date, id, errCause, solution, done } = req.body;
  if (!date || !id)
    return res.status(400).json({ error: "data and id fields are required" });
  if (!errCause && !solution && !done)
    return res
      .status(400)
      .json({ error: "At least one target update fields is required" });
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
    const documentSnapshot = await errDataDayRef.get();
    if (!documentSnapshot.exists) {
      console.log(`[updateErrDataOne] document does not exist ${query}`);
      return res.status(500).send({
        error: `[updateErrDataOne] document does not exist ${query}`,
      });
    }

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

function isValidDateFormat(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

function isValidYYYYMMFormat(dateString) {
  const regex = /^\d{4}-\d{2}/;
  return regex.test(dateString);
}
