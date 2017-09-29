import React, { Component } from 'react';
import logo from './8ball.png';
import './App.css';
import {eightBallContract} from './EthereumSetup';
//import Web3 from 'web3';
import web3 from './EthereumSetup';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: ""
        }
        this.execute = this.execute.bind(this);
    }

    /*componentDidMount() {
        var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Do not count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

        var answer = answers[Math.floor(Math.random()*answers.length)];
        //eightBallContract.sendTo().call();
        eightBallContract.transferFrom(0x5d1EB7D49b406d210726CD627266247F86b71157, 0xB94c53B0E67FABac3d97173482663Ef597D4174a, 1000000000000000).send();
        //eightBallContract.sendTo().send()
        this.setState({answer});
    }*/

    execute(e) {
        var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Do not count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

        var answer = answers[Math.floor(Math.random()*answers.length)];
        console.log(eightBallContract);
        //eightBallContract.transferFrom("0x069fd4784D1DEd8A63923e83fF73c44414240043");
        eightBallContract.transferFrom("0x069fd4784D1DEd8A63923e83fF73c44414240043", {from: "0x5d1EB7D49b406d210726CD627266247F86b71157", value: 1000000000000000});
        this.setState({answer});
    }

    render() {
        return (
            <div className="App">
                <h1>Magic Eight Ball for Charity</h1>
                <p>Enter your question:</p>
                <p className="App-intro">
                    <input type="text" />
                    <br /><br /><button onClick={this.execute} type="submit">Donate 30 cents and Answer my Question!</button>
                </p>
                <p>
                    {this.state.answer}
                </p>
            </div>
        );
    }
  }

export default App;
