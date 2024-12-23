import Navbar from './Navbar';
import Home from "./Home";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create';
import Details from './details';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/blogs/:id'>
              <Details />
            </Route>
          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App;
