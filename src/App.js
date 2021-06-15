import './App.css';
import Login from "./components/Login";
import UserDashboard from './components/Dashboards/UserDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="<MyContainer">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/UserDashboard" component={UserDashboard}/>
          <Route exact path="/AdminDashboard" component={AdminDashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
