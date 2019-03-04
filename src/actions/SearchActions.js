import axios from 'axios'
import { HANDLE_SEARCH_INPUT, SUBMIT_SEARCH_REQUEST } from './index'
import { getItemDetails } from '../utils'

const { REACT_APP_GOOGLE_API_KEY } = process.env

export const handleSearchInput = payload => {
  return {
    type: HANDLE_SEARCH_INPUT,
    payload
  }
}

export const submitSearchRequest = query => {
  return async dispatch => {
    const searchResult = []
    let details
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            part: 'snippet',
            q: query,
            key: REACT_APP_GOOGLE_API_KEY
          }
        }
      )
      for (let item of res.data.items) {
        if (item.id.hasOwnProperty('channelId')) {
          details = await getItemDetails(item.id.channelId, 'channels')
          searchResult.push({
            ...item,
            statistics: details.data.items[0].statistics
          })
        } else if (item.id.hasOwnProperty('videoId')) {
          details = await getItemDetails(item.id.videoId, 'videos')
          searchResult.push({
            ...item,
            contentDetails: details.data.items[0].contentDetails
          })
        } else {
          console.warn('it should be a list!!!')
        }
      }
      dispatch({
        type: SUBMIT_SEARCH_REQUEST,
        searchResult
      })
    } catch (error) {
      dispatch({
        type: SUBMIT_SEARCH_REQUEST,
        error
      })
    }
  }
}
