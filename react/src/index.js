import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Connect from "./pages/Connect";
import Chat from "./pages/Chat";


  /*class Dede extends React.Component {
    render() {
      return (
      <React.StrictMode>
          <Router>
              <Switch>
                  <Route path="/chat">
                    <Chat/>
                  </Route>
                  <Route path="/connect">
                    <Connect />
                  </Route>

              </Switch>
          </Router>
      </React.StrictMode>
      )

    } 
  }
  ReactDOM.render(<Dede/>, document.getElementById('root'));*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/chat">
          <Chat/>
        </Route>
        <Route path="/connect">
          <Connect />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// Dans le main il y a d'autre composant comme Users
