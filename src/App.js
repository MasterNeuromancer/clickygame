import React, { Component } from 'react';
import tiles from "./cards.json";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {

  state = {
    tiles,
    randomNumber: 0,
    score: 0,
    tally: 0
  };

  componentDidMount() {
    this.setState({
      randomNumber: this.getRandomNumber(this.state.tiles)
    });
  }

  getRandomNumber = arr => Math.floor(Math.random() * arr.length + 1);


  gameOver = () => {
    if (this.state.score > this.state.tally) {
      this.setState({tally: this.state.score}, function() {
        console.log(this.state.tally);
      });
    }
    this.state.tiles.forEach(tiles => {
      tiles.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  handleTileClick = id => {
    this.state.tiles.find((pic, i) => {
      if (pic.id === id) {
        if(tiles[i].count === 0){
          tiles[i].count = tiles[i].count + 1;
          this.setState({score : this.state.score + 1
          });
          this.state.tiles.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header score={this.state.score} tally={this.state.tally} />
          <div className="row">
            {this.state.tiles.map(tiles => (
              <Card
                key={tiles.id}
                id={tiles.id}
                name={tiles.name}
                image={tiles.image}
                handleTileClick={this.handleTileClick}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }

}

export default App;
