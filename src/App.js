import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Wrapper from './components/Hoc/Wrapper';
import Hooks from './components/Hooks';
import ApiCalls from './components/ApiCalls';
import Counter from './components/Counter';
import AddUser from './components/AddUser';
import EventListener from './components/EventListener';
import ClassComponent from './components/ClassComponent';
import './App.css';
const App =()=> {
  return (
    <Wrapper>
      <Router>
        <main className="main__wrapper">
          <aside className="left__sidebar">
              <ul className="sidebar__item">
                  <li><NavLink to="/">Hooks</NavLink></li>
                  <li><NavLink to="/counter">Click Counter</NavLink></li>
                  <li><NavLink to="/apicalls">API Calls</NavLink></li>
                  <li><NavLink to="/adduser">Add User</NavLink></li>
                  <li><NavLink to="/eventListener">Event Listener</NavLink></li>
                  <li><NavLink to="/classcomponent">Class Component</NavLink></li>
              </ul>
          </aside>
          <section className="right__wrapper">
              <Switch>
                  <Route exact path="/" component={()=><Hooks/>}/>
                  <Route path="/ApiCalls" component={()=><ApiCalls/>}/>
                  <Route path="/Counter" component={()=><Counter/>}/>
                  <Route path="/AddUser" component={()=><AddUser/>}/>
                  <Route path="/EventListener" component={()=><EventListener/>}/>
                  <Route path="/ClassComponent" component={()=><ClassComponent/>}/>
              </Switch>
          </section>
      </main>
      </Router>
    </Wrapper>
  );
}
export default App;
