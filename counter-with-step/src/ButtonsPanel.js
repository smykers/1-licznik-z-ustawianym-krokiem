import React, { Component } from 'react';
import "./ButtonsPanel.css";


class ButtonsPanel extends Component {

    resetOrReinitCounter = (reset) => {
      this.props.resetCounterValue(reset);
    }


  render() {
    return (<div className="ButtonsPanel">
                <button onClick={this.props.changeCounterValue}>Add {this.props.newStep}</button> 
                <button onClick={() => this.resetOrReinitCounter(false)}>Reset</button> 
                <button onClick={() => this.resetOrReinitCounter(true)}>ReInit</button>      
            </div>);
  }
}

export default ButtonsPanel;