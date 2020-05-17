import React, {Component} from "react";
import './SearchField.style.scss'

export default class SearchField extends Component{
  render() {
    return(
     <>
       <input type={'text'} className={'SearchField'}/>
     </>
    )
  }
}
