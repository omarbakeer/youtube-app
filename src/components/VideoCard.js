import React, { Component } from 'react'
import { parseISO8601Duration } from '../utils'
import './styles/video-card.scss'

export default class VideoCard extends Component {
  render() {
    const {
      videoId,
      thumbnail,
      duration,
      videoTitle,
      channelName,
      viewCount
    } = this.props
    return (
      <article
        className="card"
        onClick={() => {
          window.location.href = `/video/${videoId}`
        }}
      >
        <figure className="card__thumbnail">
          <img
            src={thumbnail}
            alt="video-thumbnail"
            className="card__thumbnail-img"
          />
          <span className="video-card__thumbnail-time">
            {duration ? parseISO8601Duration(duration) : '12:00'}
          </span>
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">{videoTitle}</h4>
          <h5 className="card__description-subtitle">{channelName}</h5>
          <h5 className="card__description-subtitle">{viewCount} views</h5>
        </aside>
      </article>
    )
  }
}
