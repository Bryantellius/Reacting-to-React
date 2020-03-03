import React, { Component } from 'react';

// let App = (props) => {
//     return <h1>{ props.value }</h1>
// }

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Welcome to React!',
            hasLoaded: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        // console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    handleClick() {
        this.setState({
            hasLoaded: true
        })
    }

    componentDidMount() {
        this.setState({
            hasLoaded: true
        })
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <div className='column'>
                    <div className='col input-group'>
                        <input
                            className='form-control'
                            placeholder={this.state.text}
                            onChange={this.handleInput}
                        >
                        </input>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary my-1' onClick={this.handleClick}>Advance</button>
                    </div>
                    <div className='col'>
                        <hr></hr>
                        <h1>{this.props.value} {this.state.text}</h1>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Loading...</h1>
                    <button className='btn btn-warning' onClick={this.handleClick}>Load Page</button>
                </div>
            )
        }

    }
}

export default App;