import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="nav">Creative<span>Labs</span></li>
        </ul>
        <ul>
          <li><a href="#nav">About</a></li>
          <li><a href="#nav">Portofolio</a></li>
          <li><a href="#nav">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;