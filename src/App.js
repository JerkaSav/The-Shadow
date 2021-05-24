import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Register from './views/Register';
import Onboarding from './views/Onboarding';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/onboarding" component={Onboarding}></Route>
      </Switch>
    </div>
  );
}

export default App;
