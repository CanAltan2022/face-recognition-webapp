import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticleEffect from './components/ParticleEffect/ParticleEffect';
import './App.css';



class App extends Component {
    render() {
    return (
    <div className="App">
        <ParticleEffect />
        <Navigation />
        <Logo />
      <Rank />
      <ImageLinkForm />

    </div>
        
    );

  }

}

export default App;
