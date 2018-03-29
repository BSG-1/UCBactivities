import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };
  
  handleInputChange = event =>{
    const {name, value} = event.target; //name is going to equal event.target.name
    this.setState({
      [name]: value
    });
  }

  handleSubmitForm = event => {
    event.preventDefault();
    alert(`Your username is: ${this.state.username}`);
    this.setState({
      username: '',
      password: ''
    });
  }

  //need to get something inside of react, out
  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmitForm}>Submit</button>
      </form>
    );
  }
}

export default Form;
