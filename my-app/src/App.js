import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Icons from './icons.json'

//function to shuffle the icons
const shuffleArray = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter --;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    status: "",
    currentScore: 0,
    highScore: 0,
    clicked: [],
    Icons,
    gameOver: false
  };

  //display starting message on mount of component
  componentDidMount() {
    this.setState({status: "Click an Emoji to get started"})
  };

  //when icon gets clicked add id to an array and increase score
  clicked = (id) => {
    // console.log('clicked image with id: ${id}');
    if (!this.state.clicked.includes(id)){
      this.scoreIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.reset();
    }
  }

  //when player clicks it adds one to score and checks if user has won
scoreIncrease = () => {
  let score = this.state.currentScore +1;
  console.log('The score goes up!');
  if (score === this.state.Icons.length) {
    this.setState({
      status: "You Won!! Start clicking to play again!",
      currentScore: 0,
      clicked: [],
      Icons,
      gameOver: false
    });
  }else if (score > this.state.highScore) {
    this.setState({
      highScore: score,
      currentScore: score,
      status: "Correct! New High Score!"
    });
  }else {
    this.setState({
      currentScore: score,
      status: "Correct!"
    });
  }
  this.resetArray();
}

//reset when user clicks same image twice
reset = () => {
  this.setState({
    status: "You Lost!",
    highScore: this.state.highScore,
    currentScore: 0,
    clicked: [],
    Icons,
    gameOver: true 
  });
  console.log("Game Over: ", this.state.gameOver);
  this.resetArray();
}

//set array to be mapped for new shuffle
resetArray = () => {
  let newShuffle = shuffleArray(Icons);
  this.setState({Icons: newShuffle});
}

  render() {
    return (
      <div>
      <nav>
        <NavBar status={this.state.status} currentScore={this.state.currentScore} highScore={this.state.highScore}/>
      </nav>
      
      <Banner/>
      <div className=""> {this.state.Icons.map(icon => (
        <Cards className="" key={icon.id} id={icon.id} image={icon.image} clicked={this.clicked}/>
        ))
      }
      
      </div>
      
      </div>
    );
  }
}

export default App;
