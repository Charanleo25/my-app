import React, { Component } from "react";

export default class Add extends Component {
state = {
    a: 'Hello'
};
handleButtonClick = () => {
   console.log("Inside Button Click");
//    this.state.a = "You pressed Button";
};
render() {
   return (
      <div>
         <h1>{this.state.a}</h1>
         <button type="button" onClick={this.handleButtonClick} >Click Me</button>
      </div>
  );
 }
}

