import React, { Component } from 'react';

class Experiment extends Component {
    state = {
        marginNumber:10,
        myColor:"blue",
    }    
    changeText = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        });
    };
    changeNumber = (event) => {
        const value = event.target.value;
        this.setState({
            marginNumber:value
        });
    };
    render() {
        return (
            <div>
                <h3>{this.state.myColor}</h3>
                <input type="text" value={this.myColor} name = "myColor" onChange={this.changeText}></input>
                <h3>{this.state.marginNumber}</h3>
                <input type="number" value={this.marginNumber} name = "marginNumber" onChange={this.changeNumber}></input>
            </div>
        );
    }
}

export default Experiment;