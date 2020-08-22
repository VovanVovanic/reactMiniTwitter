import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css'

const PostList = () => {
    return (
      <ul className="app-list list-group">
        <li><PostListItem/></li>
        <li><PostListItem /></li>
        <li><PostListItem /></li>
      </ul>
    );
};
export default PostList;
