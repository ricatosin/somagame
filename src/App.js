import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// class GameApp extends Component{
// constructor(props){
//   super(props);
//   this.v1 = Math.floor(Math.random() * 100);
//   this.v2 = Math.floor(Math.random() * 100);
//   this.v3 = Math.floor(Math.random() * 100);
//   this.vp = Math.floor(Math.random() * 3) + this.v1 + this.v2 + this.v3;
//   this.ra = v1 + this.v2 + this.v3;

//   this.state={
//     arrvalues:[v1,v2,v3,rp,ra]
//   }

//   makeQuestion = ()=>{
//     arrvalues[0] = this.v1
//     arrvalues[1] = this.v2
//     arrvalues[2] = this.v3
//     arrvalues[3] = this.rp
//     arrvalues[4] = this.ra
//     return arrvalues;
//   }


// }

// }


class App extends Component {
  state = {
    arrvalues:[0,0,0,0,0],
    numQuestions: 0,
    numCorrect:0

  }
  constructor(props){
  super(props);
  
  this.v1 = Math.floor(Math.random() * 100);
  this.v2 = Math.floor(Math.random() * 100);
  this.v3 = Math.floor(Math.random() * 100);
  this.rp = Math.floor(Math.random() * 3) + this.v1 + this.v2 + this.v3;
  this.ra = this.v1 + this.v2 + this.v3;
  
}
createAnswer = () => {
  this.v1 = Math.floor(Math.random() * 100);
  this.v3 = Math.floor(Math.random() * 100);
  this.v2 = Math.floor(Math.random() * 100);
  this.rp = Math.floor(Math.random() * 3) + this.v1 + this.v2 + this.v3;
  this.ra = this.v1 + this.v2 + this.v3;
  return [this.v1,this.v2,this.v3,this.rp, this.ra];
}

  handleButtons = (valor) => {
    console.log(valor)
    //this.recalculate;
    console.log( this.ra === (this.rp))
    if(valor === 1 && this.ra === (this.rp) ){
      this.setState({
        numCorrect: this.state.numCorrect + 1,
        numQuestions: this.state.numQuestions + 1,
      
      })
    }
    else{
      this.setState({
        numQuestions: this.state.numQuestions + 1
      })
    }
    if(valor === 0 && this.ra !== this.rp ){     
      this.setState({
        numCorrect: this.state.numCorrect + 1,
        numQuestions: this.state.numQuestions + 1,
    })}
    this.createAnswer(); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TESTE YOUR MATH</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.v1} + ${this.v2} + ${this.v3} = ${this.rp}`}</p>
          </div>
          <button onClick={() => (this.handleButtons(1))}> True </button>
          <button onClick={() => (this.handleButtons(0))}> False </button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

