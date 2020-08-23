import React, { Component } from "react";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn-info btn ">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Like
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Dislike
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Important
        </button>
      </div>
    );
  }
}
