import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './8ball.png';
import './App.css';
import {eightBallContract} from './EthereumSetup';
import web3 from './EthereumSetup';
import Web3 from 'web3';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: ""
        }
        this.changeQuestion = this.changeQuestion.bind(this);
        //this.transferFrom = this.transferFrom.bind(this);
        this.execute = this.execute.bind(this);
    }

    componentDidMount() {

    }

    changeQuestion(e) {
        this.setState({question: String(e.target.value)});
    }

    /*transferFrom(e) {
        this.setState({b: e.target.value});
    }*/

    /*answerQuestion(e) {
        this.setState({answer: String(e.target.value)});
    }*/

    execute(e) {
        console.log(this.state.question)
        /*var that = this;
        eightBallContract.setQuestion(this.state.question, function(error, result){
            console.log("YAY1");
             if (!error) {
                eightBallContract.answerQuestion(function(error){
                     if (error) {
                        console.error(error);
                     }
                     console.log("YAY2");
                 });
             } else {
                 console.error(error);
             }
         });*/
        eightBallContract.setQuestion(String(this.state.question))
        eightBallContract.answerQuestion()
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2>Magic Eight Ball for Charity</h2>
                </div>
                <p className="App-intro">
                    Enter your question:
                </p>
                <p className="App-intro">
                    <input onChange={this.changeQuestion} type="text" value={this.state.question} />
                    <br /><br /><button onClick={this.execute} type="submit">Donate 30 cents and Answer my Question!</button>
                </p>
            </div>
        );
    }
  }

export default App;
