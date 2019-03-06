import React from 'react'
import Spinner from 'react-spinner-material'
import './styles/loader.scss'

const Loading = () => {
  return (
    <div className="loader-container">
      <Spinner size={40} spinnerColor={'#333'} spinnerWidth={2} />
      <p>Loading</p>
    </div>
  )
}
export default Loading
