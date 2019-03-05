import React, { Component } from 'react'
import { MdPlaylistPlay } from 'react-icons/md'
import './styles/playlist-card.scss'

export default class PlaylistCard extends Component {
  render() {
    const {
      playlistTitle,
      playlistId,
      itemCount,
      thumbnail,
      channelName
    } = this.props
    return (
      <article className="card">
        <figure className="card__thumbnail">
          <img
            src={thumbnail}
            alt="video-thumbnail"
            className="card__thumbnail-img"
          />
          <div className="playlist-card__thumbnail-video-count">
            <h6>{itemCount}</h6>
            <MdPlaylistPlay />
          </div>
        </figure>
        <aside className="card__description">
          <h4 className="card__description-title">{playlistTitle}</h4>
          <h5 className="card__description-subtitle">{channelName}</h5>
        </aside>
      </article>
    )
  }
}
