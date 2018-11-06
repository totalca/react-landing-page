import React, { Component } from 'react';
import Nav from './nav';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
          <div className="top">
              <h1>we design <br/>your dream</h1>
              <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nunc sed sapien faucibus molestie id quis tellus. Phasellus malesuada elit nunc, sed fermentum orci.</p>
                  <div><a href="#contact" className="contact">Contact Us</a></div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header;