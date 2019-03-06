import React from 'react'
import axiosMock from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, cleanup, waitForElement } from 'react-testing-library'
import { renderWithRedux } from '../../utils'
import ConnectedHeader from '../Header'

afterEach(cleanup)

test('head-bar renders with redux with defaults', () => {
  const { getByTestId } = renderWithRedux(
    <Router>
      <ConnectedHeader />
    </Router>
  )
  expect(getByTestId('title').textContent).toBe('YouTube')
})

test('head-bar shows search input after clicking search icon', () => {
  const { getByTestId } = renderWithRedux(
    <Router>
      <ConnectedHeader />
    </Router>
  )
  fireEvent.click(getByTestId('search-icon'))
  expect(getByTestId('search-input')).toBeDefined()
})
