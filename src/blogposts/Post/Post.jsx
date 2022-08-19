import React from "react";
import "./Post.css";

const Post = ({ post: { title, body,
imgUrl, author }, index }) => {
  return (  
    <div className="post-container rounded p-3 mb-2 bg-primary text-white">
      <div className="postHead">
        <h3 className="heading">{title}</h3>
        <br/>    
        <h5>Written by: {author}</h5>
        <br/>
        <p>{body}</p>
      </div>
      <div className="postimg">
        <img className="image" src={imgUrl} alt="post" />
      </div>
    </div>
  );
};
  
export default Post;