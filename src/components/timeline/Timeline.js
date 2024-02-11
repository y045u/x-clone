import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Timeline() {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        username="y045u"
        verified={true}
        text="初めてのツイート"
        avatar="https://pbs.twimg.com/profile_images/1476938674612805637/Z9-fGmey_400x400.jpg"
        image="https://source.unsplash.com/random"
      />

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Timeline;
