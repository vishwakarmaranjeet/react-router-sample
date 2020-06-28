import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Wrapper from './components/Hoc/Wrapper';
import Hooks from './components/Hooks';
import './App.css';
import Flexbox from './components/Flexbox';
const App =()=> {
  return (
    <Wrapper>
      <Router>
        <main className="main__wrapper">
          <aside className="left__sidebar">
              <ul className="sidebar__item">
                  <li><NavLink to="/">Hooks</NavLink></li>
                  <li><NavLink to="/flexbox">CSS flexbox</NavLink></li>
              </ul>
          </aside>
          <section className="right__wrapper">
              <Switch>
                  <Route exact path="/" component={()=><Hooks/>}/>
                  <Route path="/flexbox" component={()=><Flexbox/>}/>
              </Switch>
          </section>
      </main>
      </Router>
    </Wrapper>
  );
}
export default App;
