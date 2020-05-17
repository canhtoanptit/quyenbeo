import React, {Component} from "react";
import './Header.style.scss'
import SearchField from "../SearchField";
import Logo from "../Logo";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className={'Logo'}>
            <Logo/>
          </div>
          <div className={'Login'}>
            <SearchField/>
          </div>
          <div>
            Lien he
          </div>
        </nav>
      </header>
    )
  }
}
