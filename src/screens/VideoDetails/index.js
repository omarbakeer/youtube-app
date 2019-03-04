import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import ChannelCard from '../../components/ChannelCard'
import VideoCard from '../../components/VideoCard'
import { MdThumbUp, MdThumbDown, MdAdd, MdReply, MdFlag } from 'react-icons/md'
import './style.scss'

class VideoDetails extends Component {
  componentDidMount = () => {}

  render() {
    return (
      <main>
        <Header title={this.props.storeObj ? this.props.storeObj.input : ''} />
        <div className="video-block">
          <video
            className="video-block__media"
            controls
            // autoPlay
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
        {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </main>
    )
  }
}

const mapStateToProps = state => {
  return { storeObj: state.SearchReducer }
}

export default connect(mapStateToProps)(VideoDetails)
