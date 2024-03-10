import axiosInstance from "./axiosInstance";

export const fetchRawData = async (date) => {
  console.log("🚀 ~ fetchRawData ~ date:", date);
  try {
    let requestURL = "/api/rawData/day";
    const response = await axiosInstance.get(requestURL, {
      params: {
        //Todo: edit date
        date: "2024-01-01",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching RawData:", error);
  }
};

export const fetchErrorData = async (date) => {
  console.log("🚀 ~ fetchErrorData ~ date:", date);
  try {
    let requestURL = "/api/errData/day";
    const response = await axiosInstance.get(requestURL, {
      params: {
        //Todo: edit date
        date: "2024-02-06",
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching RawData:", error);
  }
};

export const fetchNodeInfo = async () => {
  try {
    let requestURL = "/api/nodeinfo";
    const response = await axiosInstance.get(requestURL);
    response.data.sort((a, b) => a.nodeAddress - b.nodeAddress);
    return response.data;
  } catch (error) {
    console.log("Error fetching nodeInfo:", error);
  }
};

export const deleteNodeInfoById = async (id) => {
  try {
    let requestURL = "/api/nodeinfo";
    await axiosInstance.delete(requestURL, {
      params: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Error deleting nodeInfo:", error);
  }
};

export const updateNodeInfo = async (updateObject) => {
  try {
    const requestURL = "/api/nodeinfo";
    await axiosInstance.put(requestURL, updateObject);
  } catch (error) {
    console.error("Error updating nodeInfo:", error);
  }
};
