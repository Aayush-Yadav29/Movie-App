import './App.css';
import Leftbar from './Leftbar';
import MainPanel from './MainPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Tv from './Tv';
import Sports from './Sports';
import TrailerPage from './TrailerPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Leftbar />
        <Switch>
          <Route exact path="/">
            <MainPanel />
          </Route>
          <Route exact path="/MainPanel">
            <MainPanel />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/Tv">
            <Tv/>
          </Route>
          <Route exact path="/Sports">
            <Sports/>
          </Route>
          <Route exact path="/MainPanel/:id">
            <TrailerPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
