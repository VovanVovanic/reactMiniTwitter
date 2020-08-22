import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Type to search record"
      />
    );
  }
}
