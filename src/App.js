import {Fragment} from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Template from "./components/layouts/Template";
import Home from "./components/layouts/Home";

function App() {
  return (
    <Fragment>
      <Template>
        <Router>
          <Switch>
            <Route path={"/"} component={Home} exact={true}/>
          </Switch>
        </Router>
      </Template>
    </Fragment>
  );
}

export default App;
