import React, { Component} from 'react';

class Navbar extends Component {
    render (){
      console.log("render-navbar");
        return(
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
            <a className="navbar-brand btn-sm m-2 " href="#">
            <i className="fa fa-shopping-cart"/>
            <span className="badge badge-pill badge-secondary  m-2">{this.props.totalCounters} Items</span>
            </a>
  </div>
</nav>
        );
    }
}

export default Navbar;

