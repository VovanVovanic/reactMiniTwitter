import React, { Component } from "react";
import moment from "moment";
import "./clock.css";
export default class Clock extends Component {
  state = {
    time: moment().format("MMMM Do , h:mm:ss "),
    };
    componentDidMount = () => {
        setInterval(() => {
            this.setState(({ time }) => {
                return {
                  time: moment().format("MMMM Do , h:mm:ss "),
                };
            })
        }, 1000)
    }
  render() {
    return <h2 className="clock">{this.state.time}</h2>;
  }
}
