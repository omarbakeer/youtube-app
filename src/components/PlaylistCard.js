import React, { Component } from 'react'
import { MdPlaylistPlay } from 'react-icons/md'
import './playlist-card.scss'

export default class PlaylistCard extends Component {
  render() {
    const { videoId, thumbnail, videoTitle, channelName } = this.props
    return (
      <article
        className="card"
        onClick={() => {
          window.location.href = `/video/${videoId}`
        }}
      >
        <figure className="card__thumbnail">
          <img
            src="https://www.rishabhsoft.com/wp-content/uploads/2011/05/Entry-and-Exit-Criteria-for-Testing.jpg"
            alt="video-thumbnail"
            className="card__thumbnail-img"
          />
          <div className="playlist-card__thumbnail-video-count">
            <h6>54</h6>
            <MdPlaylistPlay />
          </div>
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">
            dausdh bausd hsaudklh saudkhjdsahd jksadn
          </h4>
          <h5 className="card__description-subtitle">sajdhja ksdh ssakjdhj</h5>
        </aside>
      </article>
    )
  }
}
