import React, { useState } from "react";
import "./MapView.css";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { Wrapper } from "@googlemaps/react-wrapper";
import BatteryInfo from "./BatteryInfo/BatteryInfo";

function MapView() {
  const [option, setOption] = useState("pm25"); // 초미세먼지 기본값으로 초기화

  return (
    <div className="main-container">
      <div className="map-and-info-container">
        <div className="map-container">
          <Wrapper apiKey={"AIzaSyCjp5Sxe-c5mUn1GtfLqEatR0mt7cXYdIM"}>
            <GoogleMap
              option={option}
              options={{ disableDefaultUI: true, zoomControl: false }}
            />
          </Wrapper>
        </div>
        <div className="option-and-info-flex-container">
          <div className="info-container">
            <div className="info-container-dividier"></div>
            <BatteryInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;
