import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  setLoadingState,
  handleSearchInput,
  submitSearchRequest
} from '../actions/SearchActions'
import { ReactComponent as YTMobileIcon } from '../images/youtube.svg'
import { ReactComponent as SearchIcon } from '../images/search.svg'
import { MdClose } from 'react-icons/md'
import './styles/head-bar.scss'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    dispatch: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object
  }
  state = {
    isSearching: false,
    searchInput: ''
  }

  sendRequest = () => {
    if (this.props.match.url.includes('video')) {
      this.props.history.push('/')
    }
    this.props.dispatch(setLoadingState(true))
    this.props.dispatch(submitSearchRequest(this.state.searchInput))
  }

  handleOnChange = e => {
    const searchInput = e.target.value
    this.props.dispatch(handleSearchInput(searchInput))
    this.setState({ searchInput })
  }

  render() {
    const { isSearching } = this.state
    return (
      <header className="head-bar">
        <a href="#!" className="head-bar__yt-icon">
          <YTMobileIcon />
        </a>
        <div className="head-bar__title-icon-container">
          {/* Text or Input according to the user action */}
          {isSearching ? (
            <React.Fragment>
              <input
                className="head-bar__input"
                type="text"
                name="searchInput"
                onChange={this.handleOnChange}
              />
              <MdClose
                className="head-bar__clear-input-icon"
                onClick={() => this.setState({ isSearching: false })}
              />
            </React.Fragment>
          ) : (
            <h1 className="head-bar__title">{this.props.title}</h1>
          )}
          <a
            href="#!"
            className="head-bar__search-icon"
            onClick={
              isSearching
                ? this.sendRequest
                : () => this.setState({ isSearching: true })
            }
          >
            <SearchIcon />
          </a>
        </div>
      </header>
    )
  }
}

export default withRouter(connect()(Header))
