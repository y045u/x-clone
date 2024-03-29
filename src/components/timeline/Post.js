import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post--avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h3>
              {displayName}
              <span className="post--headerSpecial">
                <VerifiedUser className="post--badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post--headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
        <div className="post--footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
