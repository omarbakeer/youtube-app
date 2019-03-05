import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { parseISO8601Duration } from '../utils'
import './video-card.scss'

class VideoCard extends Component {
  render() {
    const { thumbnail, duration, videoTitle, channelName, videoId } = this.props
    return (
      <article
        className="video-card"
        onClick={() => this.props.history.push(`/video/${videoId}`)}
      >
        <figure className="video-card__thumbnail">
          <img
            src={thumbnail}
            alt="video-thumbnail"
            className="video-card__thumbnail-img"
          />
          <span className="video-card__thumbnail-time">
            {duration ? parseISO8601Duration(duration) : '12:00'}
          </span>
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">{videoTitle}</h4>
          <h5 className="card__description-subtitle">{channelName}</h5>
          <h5 className="card__description-subtitle">29K views</h5>
        </aside>
      </article>
    )
  }
}

export default withRouter(VideoCard)
