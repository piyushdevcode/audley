import React, { Component } from "react";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="FeedbackPage">
        <div className="FeedbackForm">
          <h1>Feedback</h1>
          <form method="post">
            <div className="txt_field">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Phone No.</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Email ID</label>
            </div>
            <div className="txt_field">
              <textarea id="message" rows="8"></textarea>
              <label>Suggestion</label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Feedback";
  }
}
