import React, { Component } from 'react'
import './video-card.scss'

export default class VideoCard extends Component {
  render() {
    return (
      <article className="video-card">
        <figure className="video-card__thumbnail">
          <img
            src="https://i.ytimg.com/vi/Ks-_Mh1QhMc/mqdefault.jpg"
            alt="video-thumbnail"
            className="video-card__thumbnail-img"
          />
          <span className="video-card__thumbnail-time">2:30</span>
        </figure>
        <aside className="video-card__description">
          <h4 className="video-card__description-title">
            Video title dsadsa d sadasdas
          </h4>
          <h5 className="video-card__description-subtitle">channel name</h5>
          <h6 className="video-card__description-subtitle">29K views</h6>
        </aside>
      </article>
    )
  }
}
