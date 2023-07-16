import './App.css';
import Leftbar from './Leftbar';
import MainPanel from './MainPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
function App() {
  return (
    <Router>
    <div className="App">
      <Leftbar/>
      <Switch>
        <Route exact path = "/">
          <MainPanel/>
        </Route>
        <Route exact path = "/Search">
          <Search/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
