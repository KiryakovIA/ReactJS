import React, {Component} from 'react';

class WelcomeModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            modal: false
        });
    }
    
    render() {
        let result;
        if (this.state.modal) {
            result = <div className="centered">
                <h2>Welcome</h2>
                <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
                <button onClick={this.onClick}>Close</button>
            </div>;
        }
        return <div>{result}</div>;
    }

    componentDidMount(){
        this.setState({
            modal: true
        })
    }
}

export default WelcomeModal;