import React, { Component } from 'react'
import { ReactComponent as YTMobileIcon } from '../images/youtube.svg'
import { ReactComponent as SearchIcon } from '../images/search.svg'
import { MdClose } from 'react-icons/md'
import './head-bar.scss'

export default class Header extends Component {
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
                type="text"
                name="searchInput"
                className="head-bar__input"
              />
              <MdClose className="head-bar__clear-input-icon" />
            </React.Fragment>
          ) : (
            <h1 className="head-bar__title">Title</h1>
          )}
          <a href="#!" className="head-bar__search-icon">
            <SearchIcon />
          </a>
        </div>
      </header>
    )
  }
}
