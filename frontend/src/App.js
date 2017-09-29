import React, { Component } from 'react';
import logo from './8ball.png';
import './App.css';
import {eightBallContract} from './EthereumSetup';
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

    execute(e) {
        var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Do not count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        var answers1 = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."];

        var answer = answers1[Math.floor(Math.random()*answers1.length)];
        //var answer = answers[Math.floor(Math.random()*answers.length)];

        //eightBallContract.transferFrom("0x069fd4784D1DEd8A63923e83fF73c44414240043");
        //eightBallContract.transferFrom("0x069fd4784D1DEd8A63923e83fF73c44414240043", {from: "0x5d1EB7D49b406d210726CD627266247F86b71157", value: 1000000000000000});
        this.setState({answer});
    }

    render() {
        return (
          <body>
            <div className="App">
                <img src={ logo } />
                <h1>Magic Eight Ball</h1>
                <p>Enter your question:<br />
                <input type="text" /><br /><br />
                <button onClick={this.execute} type="submit">Donate 30 cents and Answer my Question</button>
                <br /><br /><div className="answer">{this.state.answer}</div></p>
            </div>
          </body>
        );
    }
  }

export default App;
