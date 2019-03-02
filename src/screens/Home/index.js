import React, { Component } from 'react'
import Header from '../../components/Header'
import MobFilter from './components/Filter/Filter.mob'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <MobFilter />
      </div>
    )
  }
}
