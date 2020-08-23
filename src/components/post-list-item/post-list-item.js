import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {
    const { label,
      important,
      like,
      dislike,
      onDeleted,
      onToggleLike,
      onToggleDisLike,
      onToggleImportant
    } = this.props;
    let classNms = "d-flex app-list-item justify-content-between"
    if (like) {
      classNms += ' like'
    }
    if (dislike) {
      classNms += ' dislike'
    }
    if (important) {
      classNms += ' important'
    }
    return (
      <div className={classNms}>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleLike}
            type="button"
            className="btn-status btn-sm"
          >
            <i className="fa fa-thumbs-up"></i>
          </button>
          <button
            onClick={onToggleDisLike}
            type="button"
            className="btn-status btn-sm"
          >
            <i className="fa fa-thumbs-down"></i>
          </button>

          <i className="fa fa-heart"></i>
          <i className="fa fa-frown-o"></i>
        </div>

        <span className="app-list-item-label">{label}</span>

        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={onToggleImportant}
            type="button"
            className="btn-star btn-sm"
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            onClick={onDeleted}
            type="button"
            className="btn-trash btn-sm"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

