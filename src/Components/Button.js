import React, { Component } from "react";

class Counter extends Component {
    state= {
        count: 0,
        setc: 1
    }

    incCounter = (x) => {
        const count = this.state.count;
        this.setState({
            count: count + x*1
        })
    }

    decCounter = (x) => {
        const count = this.state.count;
        this.setState({
            count: (count - x)
        })
    }

    reset = () => {
        const count = this.state.count;
        this.setState({
            count: 0,
            setc: 1
        })
    }

    handleChange = (event) => {
        this.setState({setc: event.target.value})
    }

    setCount = (x) => {
        const setc = this.state.setc
        this.setState({
            setc: x
        })
        
        console.log(setc)
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.incCounter(this.state.setc)}>Increment</button>
                <button onClick={() => this.decCounter(this.state.setc)}>Decrement</button>
                <button onClick={() => this.reset()}>Reset</button> <br />
                <input value={this.state.setc} onChange={this.handleChange} />
                <button onClick={() => this.setCount(this.state.setc)}>OK</button>
            </div>
        )
    }
}

export default Counter;