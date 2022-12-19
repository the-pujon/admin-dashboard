import React, { useContext } from "react";
import "./Navbar.scss";
import SearchOutlineedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationNoneOutLinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { multiContext } from "../../context/multiCotext/MultipleContext";

const Navbar = () => {
  const { dispatch } = useContext(multiContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlineedIcon />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "toggle" })}
            />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationNoneOutLinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
