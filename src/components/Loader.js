import React, { Component } from 'react'
import Spinner from 'react-spinner-material'
import './styles/loader.scss'

export default class Example extends Component {
  render() {
    return (
      <div className="loader-container">
        <Spinner size={40} spinnerColor={'#333'} spinnerWidth={2} />
        <p>Loading</p>
      </div>
    )
  }
}
