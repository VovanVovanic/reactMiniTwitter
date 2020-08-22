import React, { Component } from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  state = {
    text: ''
  }
  onAddItem = (e) => {
    this.setState({
    text: e.target.value
  })
  }
  onFormSubmit = (e) => {
    e.preventDefault()
    let text = this.state.text
    if (!text) {
      return alert ('Message should not be empty!')
    }
    this.props.onAdded(text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="bottom-panel d-flex">
        <input
          onChange = {this.onAddItem}
          className="form-control new-post-label"
          type="text"
          placeholder="What are you thinking about?"
          value = {this.state.text}
        />
        <button 
          type="submit"
          className="btn-outline-secondary btn">
          Add
        </button>
      </form>
    );
  }
}
