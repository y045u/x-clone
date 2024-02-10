import React from "react";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <XIcon className="sidebar--twitterIcon" />

      {/* SidebarOption */}
      <SidebarOption text="home" Icon={HomeIcon} />
      <SidebarOption text="explore" Icon={SearchIcon} />
      <SidebarOption text="notifications" Icon={NotificationsIcon} />
      <SidebarOption text="messages" Icon={MailOutlineIcon} />
      <SidebarOption text="bookmarks" Icon={BookmarkIcon} />
      <SidebarOption text="profile" Icon={AccountCircleIcon} />
      <SidebarOption text="more" Icon={MoreHorizIcon} />

      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        ポストする
      </Button>
    </div>
  );
}

export default Sidebar;
