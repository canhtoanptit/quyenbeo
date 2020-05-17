import React, {Component} from 'react';
import {UserIcon} from "../Icons/UserIcon.component";
import './ButtonImage.style.scss'

export default class ButtonImage extends Component {
  render() {
    return (
      <button className={'ButtonImage'}>
        <UserIcon/>
      </button>
    )
  }
}
