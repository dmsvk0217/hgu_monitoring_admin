import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../Sidebar/Sidebar";

function NavigationBar() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src="/img/logo.png" alt="Logo" className="logo" />
          </NavLink>
        </div>
        <RxHamburgerMenu onClick={toggleSidebar} className="hamburger" />

        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              지도 보기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rawDataView"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              로우 데이터
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/errDataView"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              에러 데이터
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nodeInfoView"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              노드 정보
            </NavLink>
          </li>
        </ul>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default NavigationBar;
