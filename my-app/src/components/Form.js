import React, { Component } from "react";


export class Form extends Component {
 

  render() {
     
    return (
      <div>
       
          <input
            onChange={this.props.fetch}
            type="text"
            placeholder="Enter titel name"
          />
         
      </div>         
    )
  }
}

export default Form;
