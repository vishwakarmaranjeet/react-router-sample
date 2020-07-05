import React, { useContext } from 'react';
import {slide as Menu} from 'react-burger-menu'
import { MyContext } from "./MyProvider";
import {NavLink} from 'react-router-dom';
const Navigation =()=>{
    const ctx = useContext(MyContext)
    return(
        <Menu     
            burgerBarClassName={"burger-bars"}
            crossClassName={"cross-bars"}
            pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
            isOpen={ctx.isMenuOpen}
            width={ '28%' }
            onStateChange={(state)=>ctx.stateChangeHandler(state)}>

            <aside className="left__sidebar">
              <ul className="sidebar__item">
                  <li><NavLink to="/" onClick={ctx.toggleMenu}>Hooks</NavLink></li>
                  <li><NavLink to="/counter" onClick={ctx.toggleMenu}>Click Counter</NavLink></li>
                  <li><NavLink to="/apicalls" onClick={ctx.toggleMenu}>API Calls</NavLink></li>
                  <li><NavLink to="/adduser" onClick={ctx.toggleMenu}>Add User</NavLink></li>
                  <li><NavLink to="/eventListener" onClick={ctx.toggleMenu}>Event Listener</NavLink></li>
                  <li><NavLink to="/classcomponent" onClick={ctx.toggleMenu}>Class Component</NavLink></li>
              </ul>
          </aside>
        </Menu>
    )
}
export default Navigation