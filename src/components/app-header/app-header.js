import React from 'react'
import Clock from '../clocks'
import './app-header.css'

const AppHeader = ({like, dislike, all, important}) => {
  return (
    <div className="app-header d-flex">
      <h1>Mini Twitter</h1>
      <Clock />
      <h2>
        Total: {all} records. {like} Liked, {dislike} disliked, {important} important
      </h2>
    </div>
  );
};
export default AppHeader;