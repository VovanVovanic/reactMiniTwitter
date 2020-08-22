import React, { Component } from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {

  render() {
    return (
      <form className="bottom-panel d-flex">
        <input
          className="form-control new-post-label"
          type="text"
          placeholder="What are you thinking about?"
        />
        <button type="submit" className="btn-outline-secondary btn">
          Add
        </button>
      </form>
    );
  }
}
