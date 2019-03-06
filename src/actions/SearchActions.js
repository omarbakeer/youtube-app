import axios from 'axios'
import {
  SET_LOADING_STATE,
  SET_SEARCH_FILTERS,
  HANDLE_SEARCH_INPUT,
  SUBMIT_SEARCH_REQUEST
} from './index'
import { getItemDetails } from '../utils'

const { REACT_APP_GOOGLE_API_KEY } = process.env

export const setLoadingState = isLoading => {
  return {
    type: SET_LOADING_STATE,
    isLoading
  }
}

export const setSearchFilters = ({ name, value }) => {
  return {
    type: SET_SEARCH_FILTERS,
    name,
    value
  }
}

export const handleSearchInput = payload => {
  return {
    type: HANDLE_SEARCH_INPUT,
    payload
  }
}

export const submitSearchRequest = (query, filter) => {
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
            key: REACT_APP_GOOGLE_API_KEY,
            type: filter.filterType
              ? filter.filterType
              : 'video,channel,playlist',
            publishedAfter: filter.filterTime
              ? filter.filterTime
              : new Date(0).toISOString()
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
            contentDetails: details.data.items[0].contentDetails,
            statistics: details.data.items[0].statistics
          })
        } else if (item.id.hasOwnProperty('playlistId')) {
          details = await getItemDetails(item.id.playlistId, 'playlists')
          searchResult.push({
            ...item,
            contentDetails: details.data.items[0].contentDetails
          })
        }
      }
      dispatch({
        type: SUBMIT_SEARCH_REQUEST,
        searchResult
      })
      dispatch({
        type: SET_LOADING_STATE,
        isLoading: false
      })
    } catch (error) {
      dispatch({
        type: SUBMIT_SEARCH_REQUEST,
        error
      })
    }
  }
}
