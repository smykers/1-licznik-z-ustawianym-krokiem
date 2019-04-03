import React, { Component } from 'react';
import "./Counter.css";
import ButtonsPanel from "./ButtonsPanel.js";
import Step from "./Step.js";

class Counter extends Component {

    constructor(props){
        super(props);

        let initValue=0;
        if( !isNaN(this.props.initValue)){
            initValue = parseInt(this.props.initValue);
        }
        this.state = {
            counterValue: initValue,
            stepValue: 5,
        }
    }

    changeValue = () => {
        
        let step = parseInt(this.state.stepValue);

        this.setState( (prevState) => {
            return({
                counterValue : prevState.counterValue + step,
            })
        });

      
    }

    resetCounter = (resetCounter) => {
        let initValue=0;

        if(! resetCounter){
            if(! isNaN(this.props.initValue)){
                initValue = parseInt(this.props.initValue);
            }
        }
        this.setState({
            counterValue: initValue,
        });

    }

    stepValue = (step) => {
        if(step > 0){
            this.setState({
                stepValue: step,
            });
        }
        
    }



  render() {
    return (<div className="Counter">
                <header>
                    Licznik:
                        <span className='value'>
                            {this.state.counterValue}
                        </span>
                </header>  
                <ButtonsPanel changeCounterValue={this.changeValue} resetCounterValue = {this.resetCounter} newStep = {this.state.stepValue}/>
                <Step initStepValue = {this.state.stepValue} stepChange = {this.stepValue}/>        
            </div>);
  }
}

export default Counter;