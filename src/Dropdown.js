import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
      super(props);
      this.state = { isOpened: false };
  }  

  render() {
    return <div>Its dropdown</div>;
  }
}

export default Dropdown;