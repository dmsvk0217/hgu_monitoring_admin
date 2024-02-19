import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const handleTableButtonClick = (id) => {
  // 버튼 클릭 시 수행할 동작
  console.log(`Edit button clicked for ID ${id}`);
};

// 1)노드번호, 2)위치이름, 3)위도, 4)경도, 5)베터리잔량, 6)수정하기버튼
export const columns = [
  columnHelper.accessor("nodeAddress", { header: "노드번호", size: 20 }),
  columnHelper.accessor("location", { header: "노드위치", size: 20 }),
  columnHelper.accessor("latitude", { header: "위도", size: 70 }),
  columnHelper.accessor("longitude", { header: "경도", size: 70 }),
  columnHelper.accessor("battery", { header: "베터리잔량", size: 70 }),
  columnHelper.accessor("editButton", { header: "수정하기", size: 20 }),
  columnHelper.accessor("deleteButton", { header: "삭제하기", size: 20 }),
];

export const tableData = [
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
  {
    nodeAddress: "4",
    location: "현동홀",
    longitude: "129.3893488",
    latitude: "36.1032734",
    battery: "47%",
  },
];
