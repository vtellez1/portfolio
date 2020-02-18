import React from 'react';
import './App.css';
import { Switch, Route, Link} from 'react-router-dom';

import FullPage from './components/FullPage';
import Resume from './components/Resume';


function App() {

  
  return (
    <div className="App">
    <Switch>
        <Route exact path='/' component={FullPage}/>
        <Route path='/resume' component={Resume} />
    </Switch>
    </div>
  );
}

export default App;
