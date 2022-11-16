import React, { Component} from 'react';
import './App.css';
import  Mycars  from './components/Mycars';

class App extends Component {

  state = {
    // titre : "Catalogue voitures ",
    color : "green",
  }

  
  render() {
    return (
      <div className='App'>
        <Mycars/>
      </div>
    )
  }

}

export default App;
