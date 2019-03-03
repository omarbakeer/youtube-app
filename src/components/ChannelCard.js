import React, { Component } from 'react'
import './channel-card.scss'

export default class VideoCard extends Component {
  render() {
    return (
      <article className="channel-card">
        <figure>
          <img
            src="https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg"
            alt="channel-thumbnail"
            className="channel-card__thumbnail"
          />
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">Channel Name</h4>
          <h5 className="card__description-subtitle">146 videos</h5>
          <h5 className="card__description-subtitle">29K subscribers</h5>
        </aside>
      </article>
    )
  }
}
