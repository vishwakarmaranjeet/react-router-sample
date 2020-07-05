import React,{useContext} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import './App.css';
import Wrapper from './components/Hoc/Wrapper';
import Hooks from './components/Hooks';
import ApiCalls from './components/ApiCalls';
import Counter from './components/Counter';
import AddUser from './components/AddUser';
import EventListener from './components/EventListener';
import ClassComponent from './components/ClassComponent';
import {MyProvider, MyContext} from './components/BurgerMenu/MyProvider';
import Navigation from './components/BurgerMenu/Navigation';
const App =()=> {
  const ctx = useContext(MyContext);
  return (
    <Wrapper>
      <Router>
      {/* Context API */}
      <MyProvider>
          <Navigation/>
      </MyProvider>
      {/* Context API */}
        <main className="main__wrapper">
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
