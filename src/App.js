import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue('');

  return (
    <div className="App">     
      <Router>
         {!user ? (
          <Login />
          ) : (
          <>
            <Header/>
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">                  
                  <Chat/>
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>  
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
  </div>
  );
}

export default App;
