import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/'
import { render } from 'react-testing-library'
const { REACT_APP_GOOGLE_API_KEY } = process.env

// Reference
// https://stackoverflow.com/questions/22148885/converting-youtube-data-api-v3-video-duration-format-to-seconds-in-javascript-no

export const parseISO8601Duration = duration => {
  const match = duration.match(/P(\d+Y)?(\d+W)?(\d+D)?T(\d+H)?(\d+M)?(\d+S)?/)
  // An invalid case won't crash the app.
  if (!match) {
    console.error(`Invalid YouTube video duration: ${duration}`)
    return 0
  }
  const [, , , hours, minutes, seconds] = match
    .slice(1)
    .map(n => (n ? parseInt(n.replace(/\D/, '')) : 0))

  return `${hours ? `${hours}:` : ''}${
    minutes < 10 && hours ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const getItemDetails = async (itemId, type) => {
  try {
    return await axios.get(`https://www.googleapis.com/youtube/v3/${type}`, {
      params: {
        id: itemId,
        part:
          type === 'videos'
            ? 'snippet,contentDetails,statistics'
            : type === 'channels'
            ? 'statistics'
            : 'contentDetails',
        key: REACT_APP_GOOGLE_API_KEY
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const formatTimeFilter = filterTime => {
  const today = new Date()
  switch (filterTime) {
    case 'today':
      return today.toISOString()
    case 'week':
      today.setDate(today.getDate() - 7)
      return today.toISOString()
    case 'month':
      today.setDate(today.getDate() - 30)
      return today.toISOString()
    default:
      return new Date(0).toISOString()
  }
}

// <-- Testing utility for redux -->

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  }
}
