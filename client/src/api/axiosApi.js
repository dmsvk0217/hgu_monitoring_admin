import axiosInstance from "./axiosInstance";

export const fetchNodeInfo = async () => {
  let requestURL = "/api/nodeinfo";

  const response = await axiosInstance.get(requestURL);

  response.data.sort((a, b) => a.nodeAddress - b.nodeAddress);

  return response.data;
};

//시간별 평균
export const deleteNodeInfoById = async (id) => {
  let requestURL = "/api/nodeinfo";
  const requestBody = {
    id: id,
  };
  console.log("🚀 ~ deleteNodeInfoById ~ requestBody:", requestBody);

  const response = await axiosInstance.delete(requestURL, {
    params: {
      id: id,
    },
  });

  return response.data;
};

export const updateNodeInfo = async (updateObject) => {
  try {
    const requestURL = "/api/nodeinfo";
    await axiosInstance.put(requestURL, updateObject);
    console.log("🚀updateNodeInfo done");
  } catch (error) {
    console.error("Error updating nodeInfo:", error);
  }
};
