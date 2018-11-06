import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="top">
              <h1>A simple, <br/>Landing Page</h1>
              <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nunc sed sapien faucibus molestie id quis tellus. Phasellus malesuada elit nunc, sed fermentum orci.</p>
                  <div><a href="#" className="contact">Contact Us</a></div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header;