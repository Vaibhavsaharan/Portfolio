import React from 'react'
import './assets/css/main.css'

import Greeting from './Maincomponents/Greeting';
import Skills from './Maincomponents/Skills';
import Projects from './Maincomponents/Projects';
import Movie from './Maincomponents/Movie';


class App extends React.Component {

  render() {
    
    return (
      <div className = "">
        <div className=""><Greeting /></div>
        <div className="fixed-bg"><Skills /></div>
        <div className="movie-section"><Movie /></div>
        <div className="project-section"><Projects /></div>
      </div>
    );
  }
  
}

export default App;
