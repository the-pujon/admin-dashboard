import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import CreditCardSharpIcon from "@mui/icons-material/CreditCardSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import InsertChartSharpIcon from "@mui/icons-material/InsertChartSharp";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import SettingsSystemDaydreamSharpIcon from "@mui/icons-material/SettingsSystemDaydreamSharp";
import PsychologySharpIcon from "@mui/icons-material/PsychologySharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import { Link } from "react-router-dom";
import { multiContext } from "../../context/multiCotext/MultipleContext";
import logo from "../Sidebar/LogoMakr-8cyte9.png";
const Sidebar = () => {
  const { dispatch } = useContext(multiContext);

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} alt="" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxSharpIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontSharpIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCardSharpIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingSharpIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsSharpIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamSharpIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologySharpIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsSharpIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppSharpIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "Light" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "Dark" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
