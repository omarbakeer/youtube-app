import React, { Component } from 'react'
import './style.scss'

export default class MobFilter extends Component {
  render() {
    return (
      <section className="mob-filter">
        <select name="search_categories" className="mob-filter__select">
          <option value="all" selected="selected">
            all
          </option>
          <option value="channel">channel</option>
          <option value="playlist">play list</option>
        </select>
        <select name="search_time" className="mob-filter__select">
          <option value="anytime" selected="selected">
            any time
          </option>
          <option value="today">today</option>
          <option value="week">this week</option>
          <option value="month">this month</option>
        </select>
      </section>
    )
  }
}
