import React from 'react'
import PropTypes from 'prop-types'
import './styles/channel-card.scss'

const ChannelCard = props => {
  const { channleName, thumbnail, videoCount, subscriberCount } = props
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

ChannelCard.propTypes = {
  channleName: PropTypes.string,
  thumbnail: PropTypes.string,
  videoCount: PropTypes.string,
  subscriberCount: PropTypes.string
}

export default ChannelCard
