import React from 'react'
import axiosMock from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, cleanup, waitForElement } from 'react-testing-library'
import { renderWithRedux } from '../../../utils'
import ConnectedHome from '../index'

afterEach(cleanup)

// TODO:
// 1- Mock axios api request
// 2- give a sample requestInfo
// 3- expect a sample response
// 4- do assertions to that response

test.skip('head-bar perform the search request and render results', () => {
  // fireEvent.click(getByTestId('search-icon'))
  // fireEvent.click(getByTestId('search-icon'))
  // const resultsContainerNode = await waitForElement(() =>
  //   getByTestId('results-container')
  // )
  // expect(getByTestId('title').textContent).toBe('YouTube')
})
