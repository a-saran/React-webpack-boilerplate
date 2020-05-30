import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>initial app</h1>
      <Router>
        <div className="App">
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>

          <Switch>
            <Route exact path="/" render={() => <h1>home page</h1>} />
            <Route exact path="/about" render={() => <h1>about page</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
