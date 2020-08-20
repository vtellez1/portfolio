import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import FullPage from './components/FullPage';
import Resume from './components/Resume';
import NavBar from './components/NavBar';


function App() {

  
  return (
    <div className="App">
      <NavBar/>
    <Switch>
        <Route exact path='/' component={FullPage}/>
        <Route path='/resume' component={Resume} />
    </Switch>
    </div>
  );
}

export default App;
