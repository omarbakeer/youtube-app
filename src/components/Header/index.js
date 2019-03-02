import React, { Component } from 'react'
import { ReactComponent as YTMobileIcon } from '../../images/youtube.svg'
import { ReactComponent as SearchIcon } from '../../images/search.svg'
import './style.scss'

export default class Header extends Component {
  render() {
    return (
      <header className="head-bar">
        <a href="#!" className="head-bar__yt-icon">
          <YTMobileIcon />
        </a>
        <div className="head-bar__title-icon-container">
          {/* Text or Input according to the user action */}
          <h1 className="head-bar__title">Title</h1>
          <a href="#!" className="head-bar__search-icon">
            <SearchIcon />
          </a>
        </div>
      </header>
    )
  }
}
