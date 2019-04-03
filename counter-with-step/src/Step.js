import React, { Component } from 'react';
import "./Step.css"



class Step extends Component {

    stepUpdate = () => {
        this.props.stepChange(this._inputStep.value);
    }


  render() {
    return (<div className="Step">
                <label>
                    Krok:
                </label>
                <input value={this.props.initStepValue} type="number" ref={(data) => (this._inputStep = data)} onChange={this.stepUpdate} />    
            </div>);
  }
}

export default Step;