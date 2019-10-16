import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      playing : true,
      score: 0,
      items: [
      {"type":"maladie","name":"smegma"},
      {"type":"figure de style","name":"zeugma"},
      {"type":"figure de style","name":"acrostiche"},
      {"type":"figure de style","name":"anacoluthe"},
      {"type":"figure de style","name":"anadiplose"},
      {"type":"figure de style","name":"asyndete"},
      {"type":"figure de style","name":"aposiopèse"},
      {"type":"figure de style","name":"hypallage"},
      {"type":"figure de style","name":"parataxe"},
      {"type":"figure de style","name":"paronomase"},
      {"type":"figure de style","name":"polysyndète"},
      {"type":"figure de style","name":"zeugme"},
      {"type":"maladie","name": "kératose"},
      {"type":"maladie","name": "érythème"},
      {"type":"maladie","name": "purpuras"},
      {"type":"maladie","name": "alopécie"},
      {"type":"maladie","name": "angiome"},
      {"type":"maladie","name": "dyshidrose"},
      {"type":"maladie","name": "sténose"},
      {"type":"maladie","name": "erythrasma"},
      {"type":"maladie","name": "achalasie"},   
      ],
      lastItem: null
    }
    this.state.maxScore = this.state.items.length
    this.state.item = this.removeRandomItem()
  }
  selectItem = () => {
    var nextItem = this.removeRandomItem()
    if (nextItem === undefined) {
      this.setState({
        playing: false
      })
    } else {
      this.setState({
        item: nextItem
      })
    }
  }
  removeRandomItem = () => {
    return this.state.items.splice(Math.floor(Math.random()*this.state.items.length), 1)[0]
  }
  choose = (type) => {
    if (type === this.state.item.type) {
      this.setState({
        score: this.state.score+1,
      })
    }
    this.setState({
      lastItem: this.state.item
    })
    this.selectItem()
  }
  chooseMaladie = () => {this.choose("maladie")}
  chooseFigure = () => {this.choose("figure de style")}
  render() {
    var hint = this.state.lastItem === null ? "" : (
        <div className="App-hint">
          {this.state.lastItem.name} était le nom d'une <a href={'https://www.google.fr/search?q=' + this.state.lastItem.name} rel="noopener">{this.state.lastItem.type}</a> !
        </div>
    )
    var playingZone = this.state.playing ?
    (
      <div className="App-intro">
        <p className="App-item">{this.state.item.name}</p>
        <RaisedButton className="App-button" onClick={this.chooseMaladie} label="Maladie"></RaisedButton>
        <RaisedButton className="App-button" onClick={this.chooseFigure} label="Figure de style"></RaisedButton>
        {hint}
      </div>
    ) : <p className="App-couronne">Bravo, <img alt="couronne" src={require('./couronne.png')} /> !</p>
    
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Maladie ou Figure de style ?</h1>
          </header>
          <p className="App-score">Score: {this.state.score}/{this.state.maxScore}</p>
          {playingZone}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
