import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import FullPage from './components/FullPage';
import NavBar from './components/NavBar';


function App() {

  
  return (
    <div className="App">
      <NavBar/>
    <Switch>
        <Route exact path='/' component={FullPage}/>
    </Switch>
    </div>
  );
}

export default App;
