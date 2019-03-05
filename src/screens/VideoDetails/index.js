import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getItemDetails } from '../../utils'
import Header from '../../components/Header'
import VideoCard from '../../components/VideoCard'
import { MdThumbUp, MdThumbDown, MdAdd, MdReply, MdFlag } from 'react-icons/md'
import './style.scss'

const { REACT_APP_GOOGLE_API_KEY } = process.env
class VideoDetails extends Component {
  state = {
    videoId: '',
    relatedVideos: []
  }
  componentDidMount = async () => {
    const { videoId } = this.props.match.params
    const res = await getItemDetails(videoId, 'videos')
    console.warn(res)
    // TODO: check the player property
    await this.getRelatedVideos(videoId)
    this.setState({ videoId })
  }

  getRelatedVideos = async videoId => {
    let details
    const relatedVideos = []
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            type: 'video',
            relatedToVideoId: videoId,
            key: REACT_APP_GOOGLE_API_KEY
          }
        }
      )
      for (let item of res.data.items) {
        details = await getItemDetails(item.id.videoId, 'videos')
        relatedVideos.push({
          ...item,
          contentDetails: details.data.items[0].contentDetails
        })
      }
      console.warn(res)
      this.setState({ relatedVideos })
    } catch (error) {
      console.warn(error)
    }
  }

  render() {
    const { relatedVideos, videoId } = this.state
    return (
      <main>
        <Header title="YouTube" />
        <div className="video-block">
          <iframe
            className="video-block__media"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          <div className="video-block__details">
            <h4 className="video-block__details__title">
              VideoTitl sdsadnajskl dasjkldh asjkd lhasjkdhsa dasjkd sje
              <span className="video-block__details__subtitle">
                {' '}
                - 24K views
              </span>
            </h4>
            <div className="video-block__details__actions-container">
              <div className="video-block__details__actions-group">
                <MdThumbUp className="video-block__details__actions-icon" />
                <span>234</span>
                <MdThumbDown className="video-block__details__actions-icon" />
                <span>234</span>
              </div>
              <div>
                <MdAdd className="video-block__details__actions-icon" />
                <MdReply className="video-block__details__actions-icon" />
                <MdFlag className="video-block__details__actions-icon" />
              </div>
            </div>
          </div>
        </div>
        {relatedVideos &&
          relatedVideos.map(video => (
            <VideoCard
              key={video.id.videoId}
              videoId={video.id.videoId}
              videoTitle={video.snippet.title}
              channelName={video.snippet.channelTitle}
              thumbnail={video.snippet.thumbnails.medium.url}
              duration={video.contentDetails.duration}
            />
          ))}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return { storeObj: state.SearchReducer }
}

export default connect(mapStateToProps)(VideoDetails)
