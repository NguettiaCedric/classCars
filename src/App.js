import React, { Component} from 'react';
import './App.css';
import  Mycars  from './components/Mycars';
import Welcome from './components/Welcome';

class App extends Component {

  state = {
    // titre : "Catalogue voitures ",
    color : "green",
  }

  
  render() {
    return (
      <div className='App'>

        <Welcome/>
        <Mycars/>
      </div>
    )
  }

}

export default App;
