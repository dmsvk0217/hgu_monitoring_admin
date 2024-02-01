import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import MapView from "./pages/MapView/MapView";
import RawDataView from "./pages/RawDataView/RawDataView";
import StatisticsDayView from "./pages/StatisticsView/Day/StatisticsDayView";
import StatisticsMonthView from "./pages/StatisticsView/Month/StatisticsMonthView";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <hr className="nav-hr"></hr>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/rawDataView" element={<RawDataView />} />
          {/* <Route path="/errDataView" element={<ErrDataView />} />
          <Route path="/nodeInfoView" element={<NodeInfoView />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
