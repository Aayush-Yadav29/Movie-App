import './App.css';
import Leftbar from './Leftbar';
import MainPanel from './MainPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Leftbar />
        <Switch>
          <Route exact path="/Movie-app">
            <MainPanel />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
