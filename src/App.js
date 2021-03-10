import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FriendDetails from "./components/FriendDetails";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/friend/:friendId'>
            <FriendDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
