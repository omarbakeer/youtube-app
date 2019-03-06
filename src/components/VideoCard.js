import React from 'react'
import PropTypes from 'prop-types'
import { parseISO8601Duration } from '../utils'
import './styles/video-card.scss'

const VideoCard = props => {
  const {
    videoId,
    thumbnail,
    duration,
    videoTitle,
    channelName,
    viewCount
  } = props

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

VideoCard.propTypes = {
  videoId: PropTypes.string,
  thumbnail: PropTypes.string,
  duration: PropTypes.string,
  videoTitle: PropTypes.string,
  channelName: PropTypes.string,
  viewCount: PropTypes.string
}

export default VideoCard
