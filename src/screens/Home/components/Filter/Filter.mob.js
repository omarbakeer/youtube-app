import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSearchFilters } from '../../../../actions/SearchActions'
import { formatTimeFilter } from '../../../../utils'
import './style.scss'

class MobFilter extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }
  handleOnChange = e => {
    const filterType = e.target.name
    let filterValue = e.target.value
    if (filterType === 'filterTime') {
      filterValue = formatTimeFilter(filterValue)
    }
    this.props.dispatch(
      setSearchFilters({
        name: filterType,
        value: filterValue
      })
    )
  }
  render() {
    return (
      <section className="mob-filter" onChange={this.handleOnChange}>
        <select name="filterType" className="mob-filter__select">
          <option defaultValue="all">all</option>
          <option value="channel">channel</option>
          <option value="playlist">play list</option>
        </select>
        <select name="filterTime" className="mob-filter__select">
          <option defaultValue="anytime">any time</option>
          <option value="today">today</option>
          <option value="week">this week</option>
          <option value="month">this month</option>
        </select>
      </section>
    )
  }
}

export default connect()(MobFilter)
