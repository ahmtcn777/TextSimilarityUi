import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import AddWriter from './Components/Writer';
import AddText from './Components/Text';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>

          <Route path="/addWriter">
            <AddWriter />
          </Route>

          <Route path="/addText">
            <AddText />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;