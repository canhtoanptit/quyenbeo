import React, {Component} from "react";
import './Category.style.scss'

export default class Category extends Component {
  render() {
    return (
      <p className={'Category'}>
        <div className={'Item'}>
          <span className={'Description'}>blabla</span>
        </div>
      </p>
    )
  }
}
