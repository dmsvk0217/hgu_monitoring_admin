exports.getRawDataQuery = (yyyyMM, dayDD) => {
  return `raw-data/${yyyyMM}/day${dayDD}`;
};

exports.getErrDataQuery = (yyyyMM, dayDD) => {
  return `err-data/${yyyyMM}/day${dayDD}`;
};

exports.getErrDataByIdQuery = (yyyyMM, dayDD, id) => {
  return `err-data/${yyyyMM}/day${dayDD}/${id}`;
};

exports.getNodeInfoQuery = () => {
  return `node-info`;
};

exports.createNodeInfoQuery = () => {
  return `node-info`;
};

exports.updateNodeInfoQuery = (id) => {
  return `node-info/${id}`;
};
