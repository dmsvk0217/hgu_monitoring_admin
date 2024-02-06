const db = require("../firebase/firebase.js");
const querys = require("../querys.js");

const positionOfNode = {
  1: { lat: 36.1022758, lng: 129.3821343 },
  2: { lat: 36.1027753, lng: 129.3836298 },
  3: { lat: 36.1031174, lng: 129.3856419 },
  4: { lat: 36.1040836, lng: 129.3872806 },
  5: { lat: 36.1038127, lng: 129.3883638 },
  6: { lat: 36.1045874, lng: 129.389386 },
  7: { lat: 36.1043333, lng: 129.3904529 },
  8: { lat: 36.1023672, lng: 129.3865268 },
  9: { lat: 36.1025642, lng: 129.38725 },
  10: { lat: 36.1018398, lng: 129.3877522 },
  11: { lat: 36.1027863, lng: 129.3890246 },
  12: { lat: 36.1019319, lng: 129.39071 },
  13: { lat: 36.102231, lng: 129.3921638 },
  14: { lat: 36.1030285, lng: 129.3911767 },
  15: { lat: 36.1044213, lng: 129.3922963 },
};

const locationFromNodeNumberOptions = {
  0: "전체",
  1: "그레이스",
  2: "갈대상자",
  3: "Ark",
  4: "느헤미야",
  5: "비전광장",
  6: "GLC",
  7: "채플",
  8: "코너스톤",
  9: "오석관",
  10: "히딩크",
  11: "어푸푸",
  12: "소라",
  13: "벧엘관",
  14: "비전관",
  15: "활주로",
};

for (let i = 1; i <= 15; i++)
  addNodeInfo({
    nodeAddress: i,
    location: locationFromNodeNumberOptions[i],
    latitude: positionOfNode[i].lat,
    longitude: positionOfNode[i].lng,
  });

async function addNodeInfo(options) {
  const { nodeAddress, location, latitude, longitude } = options;

  console.log("🚀 ~ addNodeInfo ~ nodeAddress:", nodeAddress);
  console.log("🚀 ~ addNodeInfo ~ location:", location);
  console.log("🚀 ~ addNodeInfo ~ latitude:", latitude);
  console.log("🚀 ~ addNodeInfo ~ longitude:", longitude);

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
}
