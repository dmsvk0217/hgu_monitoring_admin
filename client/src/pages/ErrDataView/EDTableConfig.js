import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const handleTableButtonClick = (id) => {
  // 버튼 클릭 시 수행할 동작
  console.log(`Edit button clicked for ID ${id}`);
};

export const columns = [
  columnHelper.accessor("sequence", { header: "순번", size: 1 }),
  columnHelper.accessor("date", { header: "측정일시", size: 50 }),
  columnHelper.accessor("timestamp", { header: "측정시각", size: 10 }),
  columnHelper.accessor("nodeAddress", { header: "노드번호", size: 30 }),
  columnHelper.accessor("location", { header: "노드위치", size: 30 }),
  columnHelper.accessor("errerType", { header: "에러타입", size: 100 }),
  columnHelper.accessor("errerCause", { header: "에러원인", size: 100 }),
  columnHelper.accessor("solution", { header: "해결방안", size: 100 }),
  columnHelper.accessor("done", { header: "처리여부", size: 30 }),
  columnHelper.accessor("editButton", {
    header: "수정하기",
    size: 30,
    Cell: ({ row }) => (
      <button onClick={() => handleTableButtonClick(row.original.id)}>Edit</button>
    ),
  }),
];

export const tableData = [
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "yes",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "yes",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "no",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "no",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "no",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
  {
    sequence: "1",
    errerType: "값이 들어오지 않음",
    errerCause: "베터리 잔량 부족",
    solution: "베터리 교체",
    done: "yes",
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "9",
    location: "현동홀",
    id: "05CZRhogTicXVCn1wFCf",
  },
];
