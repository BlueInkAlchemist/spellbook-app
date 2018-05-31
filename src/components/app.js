import React from 'react';
import spellData from '../../lib/spells.json';

var obj = "";

class Button extends React.Component {
    
  state = { counter: 0 };
  
  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1 
    }));
  };
  
  render() {
    obj = spellData[this.state.counter];
    // console.log("Name: " + obj.name);
    return (
      <button onClick={this.handleClick}>
        {obj.name}
      </button>
    );
  }
}

export default Button;
