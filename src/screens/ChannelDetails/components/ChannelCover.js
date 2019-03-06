import React, { Component } from 'react'
import './channel-cover.scss'

export default class ChannelCover extends Component {
  render() {
    // const { channleName, thumbnail, videoCount, subscriberCount } = this.props
    return (
      <article className="channel-cover">
        <div className="channel-cover__banner">
          <img
            src="https://images.ctfassets.net/zw48pl1isxmc/394dmb7NJmGAGqq8MiEy8C/b8fa0eff52c66428576f8d7d26ec8b47/optimizely-og-image.png"
            alt="channel cover"
          />
        </div>
        <div className="channel-cover__banner">
          <img
            src="https://images.ctfassets.net/zw48pl1isxmc/394dmb7NJmGAGqq8MiEy8C/b8fa0eff52c66428576f8d7d26ec8b47/optimizely-og-image.png"
            alt="channel-thumbnail"
            className="channel-cover__thumbnail-img"
          />
        </div>
        {/* <aside className="card__description">
          <h4 className="card__description-title">{channleName}</h4>
          <h5 className="card__description-subtitle">{videoCount} videos</h5>
          <h5 className="card__description-subtitle">
            {subscriberCount} subscribers
          </h5>
        </aside> */}
      </article>
    )
  }
}
