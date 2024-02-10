import React from "react";
import "./Widgets.css";
import { SearchRounded } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets--widgetContainer">
        <h2>今どうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1742516840155455979"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Y_Tech__"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/Y_Tech__"}
          options={{ text: "#react", via: "Y_Tech__" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
