import React, { useState } from "react";
// import profileImage from "./profile.jpeg"; // Update the path to match the actual location of the image
// import "../../Components/Sidebar.css";
import "./Sidebar.css"


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon" />
        <div className="logo_name">Code Effect</div>
        {/* <i className="bx bx-menu" id="btn" onClick={toggleSidebar} /> */}
      </div>
      <ul className="nav-list">
      <li>
        <i className="bx bx-search" />
        <input type="text" placeholder="Search..." />
        <span className="tooltip">Search</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-grid-alt" />
          <span className="link_name">Dashboard</span>
        </a>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-user" />
          <span className="link_name">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-chat" />
          <span className="link_name">Site And App</span>
        </a>
        <span className="tooltip">Site And App</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2" />
          <span className="link_name">Analytics</span>
        </a>
        <span className="tooltip">Analytics</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-folder" />
          <span className="link_name">File Manger</span>
        </a>
        <span className="tooltip">File Manger</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cart-alt" />
          <span className="link_name">Order</span>
        </a>
        <span className="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-cog" />
          <span className="link_name">Settings</span>
        </a>
        <span className="tooltip">Settings</span>
      </li>
      <li className="profile">
        <div className="profile_details">
          {/* <img src="profile.jpeg" alt="profile image" /> */}
          <div className="profile_content">
            <div className="name">Anna Jhon</div>
            <div className="designation">Admin</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out" />
      </li>
    </ul>
    </div>
  );
}
