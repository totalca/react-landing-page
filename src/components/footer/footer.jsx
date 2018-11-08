import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>CreativeLabs</h3>
        <p><strong>Support Center</strong> <br /> support@email.com</p>
        <ul>
          <li><a href="#facebook"><i className="fab fa-facebook-square"></i></a></li>
          <li><a href="#twitter"><i className="fab fa-twitter-square"></i></a></li>
          <li><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;