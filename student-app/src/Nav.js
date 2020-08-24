import React from 'react';
import './Nav.css';
class NavBar extends React.Component {
    render() {
        return(<React.Fragment> 
          <div class="header">
  <div class="logo"><span style={{color:'Cyan'}} >S</span><span style={{color:'darkgrey'}}>List</span></div>
  <div class="header-right">
    <h6 class="active" >Welcome Admin</h6>
    <h6>About</h6>
  </div>
</div>        

 </React.Fragment>)
    }
}
export default NavBar;
