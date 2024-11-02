import React, { Component } from "react";

export class Show extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.hello} : {this.props.pair}
        </h1>
      </div>
    );
  }
}

export default Show;
