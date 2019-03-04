import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as YTMobileIcon } from '../images/youtube.svg'
import { ReactComponent as SearchIcon } from '../images/search.svg'
import { MdClose } from 'react-icons/md'
import './head-bar.scss'

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
    submitSearchReq: PropTypes.func.isRequired
  }
  state = {
    isSearching: false
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
                value={this.props.title}
                onChange={this.props.handleInputChange}
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
                ? this.props.submitSearchReq
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
