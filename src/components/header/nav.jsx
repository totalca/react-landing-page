import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navigation">Creative<span>Labs</span></li>
        </ul>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portofolio">Portofolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;