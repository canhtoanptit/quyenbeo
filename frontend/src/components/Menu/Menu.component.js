import React, {Component} from "react";
import {MenuIcon} from "./MenuIcon.component";
import './Menu.style.scss'

export default class Menu extends Component{
  render() {
    return(
      <div className={'Menu'}>
        <MenuIcon/>
        MENU
      </div>
    )
  }
}
