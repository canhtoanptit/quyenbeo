import React, {Component} from "react";
import './Header.style.scss'

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <a>Menu</a>
          <a>Logo</a>
          <a>search bar</a>
          <a>Login</a>
          <a>Cart</a>
        </nav>
      </header>
    )
  }
}
