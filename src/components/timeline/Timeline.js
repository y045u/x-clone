import React, { useState, useEffect } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import db from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
      console.log(querySnapshot.docs.map((doc) => doc.data()));
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
