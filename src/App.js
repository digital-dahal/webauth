import React from 'react';
import SignUp from './compo/SignUp/index.js';
import SignIn from './compo/SignIn/index.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
function App() {
  return (
  	<Router >
    <div className="App">
    <Switch>
    <Route  exact path="/" component={SignUp}/>
      <Route exact path="/login" component={SignIn}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;