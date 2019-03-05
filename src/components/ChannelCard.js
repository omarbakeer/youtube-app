import React, { Component } from 'react'
import './styles/channel-card.scss'

export default class VideoCard extends Component {
  render() {
    const { channleName, thumbnail, videoCount, subscriberCount } = this.props
    return (
      <article className="channel-card">
        <figure>
          <img
            src={thumbnail}
            alt="channel-thumbnail"
            className="channel-card__thumbnail"
          />
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">{channleName}</h4>
          <h5 className="card__description-subtitle">{videoCount} videos</h5>
          <h5 className="card__description-subtitle">
            {subscriberCount} subscribers
          </h5>
        </aside>
      </article>
    )
  }
}
