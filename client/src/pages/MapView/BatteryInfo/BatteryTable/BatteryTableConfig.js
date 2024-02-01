import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const tableData = [
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
  {
    location: "현동홀",
    battery: "85%",
  },
];

// 1)측정일시, 2)측정시각, 3)노드번호, 4)노드위치, 5)초미세먼지,
// 6) 미세먼지, 7) 포름알데히드, 8) 온도, 9) 습도, 10) 풍향, 11) 풍속
export const columns = [
  columnHelper.accessor("location", {
    header: "노드위치",
    size: 1,
  }),
  columnHelper.accessor("battery", {
    header: "베터리 잔량",
    size: 1,
    cell: ({ renderValue }) => {
      const batteryValue = renderValue();
      let className = "";

      if (batteryValue >= 76) {
        className = "isWorse";
      } else if (batteryValue >= 36) {
        className = "isBad";
      } else if (batteryValue >= 16) {
        className = "isNormal";
      } else if (batteryValue >= 0) {
        className = "isGood";
      }

      return <div className={className}>{batteryValue}</div>;
    },
  }),
];
