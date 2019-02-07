import React, { Component } from "react";

class AddItem extends Component {
  state = {
    id: null,
    task: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      task: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Type item to add</label>
          <input
            type="text"
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
          />
        </form>
      </div>
    );
  }
}

export default AddItem;
