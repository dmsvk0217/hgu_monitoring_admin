import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const tableData = [
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "76",
    pm10: "151",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "56",
    pm10: "81",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "13",
    pm10: "15",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "46",
    pm10: "42",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "26",
    pm10: "98",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
  {
    date: "24-01-17",
    timestamp: "15:36:14",
    nodeAddress: "1",
    location: "현동홀",
    pm25: "77",
    pm10: "67",
    ch2o: "0.002",
    wind_speed: "5m/s",
    wind_direction: "남서",
    temperature: "8 °C",
    humidity: "30%",
  },
];

// 1)측정일시, 2)측정시각, 3)노드번호, 4)노드위치, 5)초미세먼지,
// 6) 미세먼지, 7) 포름알데히드, 8) 온도, 9) 습도, 10) 풍향, 11) 풍속
export const columns = [
  columnHelper.accessor("date", { header: "측정일시", size: 70 }),
  columnHelper.accessor("timestamp", { header: "측정시각", size: 50 }),
  columnHelper.accessor("nodeAddress", { header: "노드번호", size: 50 }),
  columnHelper.accessor("location", {
    header: "노드위치",
    size: 50,
  }),
  columnHelper.accessor("pm25", {
    header: (
      <div>
        초미세먼지
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          PM-2.5 (㎍/㎥)
        </div>
      </div>
    ),
    size: 80,
    cell: ({ renderValue }) => {
      const pm25Value = renderValue();
      let className = "";

      if (pm25Value >= 76) {
        className = "isWorse";
      } else if (pm25Value >= 36) {
        className = "isBad";
      } else if (pm25Value >= 16) {
        className = "isNormal";
      } else if (pm25Value >= 0) {
        className = "isGood";
      }

      return <div className={className}>{pm25Value}</div>;
    },
  }),
  columnHelper.accessor("pm10", {
    header: (
      <div>
        미세먼지
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          PM-10 (㎍/㎥)
        </div>
      </div>
    ),
    size: 80,
    cell: ({ renderValue }) => {
      const pm10Value = renderValue();
      let className = "";

      if (pm10Value >= 151) {
        className = "isWorse";
      } else if (pm10Value >= 81) {
        className = "isBad";
      } else if (pm10Value >= 31) {
        className = "isNormal";
      } else if (pm10Value >= 0) {
        className = "isGood";
      }

      return <div className={className}>{pm10Value}</div>;
    },
  }),
  columnHelper.accessor("ch2o", {
    header: (
      <div>
        포름알데히드
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          CH2O (ppm)
        </div>
      </div>
    ),
    size: 80,
  }),
  columnHelper.accessor("temperature", {
    header: (
      <div>
        온도
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          {" "}
          (°C)
        </div>
      </div>
    ),
    size: 80,
  }),
  columnHelper.accessor("humidity", {
    header: (
      <div>
        습도
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          {" "}
          (%)
        </div>
      </div>
    ),
    size: 80,
  }),
  columnHelper.accessor("wind_speed", {
    header: (
      <div>
        풍속
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          {" "}
          (m/s)
        </div>
      </div>
    ),
    size: 80,
  }),
  columnHelper.accessor("wind_direction", {
    header: (
      <div>
        풍향
        <div style={{ fontSize: "0.8em", fontWeight: "350", marginTop: "10" }}>
          {" "}
          (방향 기호)
        </div>
      </div>
    ),
    size: 80,
  }),
];
