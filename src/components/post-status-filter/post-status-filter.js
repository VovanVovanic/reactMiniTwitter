import React, { Component } from "react";
import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
  btns = [
    { name: "all", label: "All" },
    { name: "like", label: "Like" },
    { name: "dislike", label: "Dislike" },
    { name: "important", label: "Important" },
  ];
  render() {
    const buttons = this.btns.map(({ name, label }) => {
      const isActive = this.props.filter === name;
      let clss = isActive ? " btn-info btn " : "btn btn-outline-secondary";
      return (
        <button
          onClick={() => this.props.onFiltered(name)}
          key={name}
          type="button"
          className={clss}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
