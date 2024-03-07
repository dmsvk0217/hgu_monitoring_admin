import axiosInstance from "./axiosInstance";

//시간별 평균
export const fetchNodeInfo = async () => {
  let requestURL = "/api/nodeinfo";

  const response = await axiosInstance.get(requestURL);

  response.data.sort((a, b) => a.nodeAddress - b.nodeAddress);

  return response.data;
};
