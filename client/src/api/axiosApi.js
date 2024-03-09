import axiosInstance from "./axiosInstance";

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
    const response = await axiosInstance.delete(requestURL, {
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
