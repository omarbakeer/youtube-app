import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, cleanup } from 'react-testing-library'
import { renderWithRedux } from '../../utils'
import ConnectedHeader from '../Header'

afterEach(cleanup)

describe('Header component', () => {
  test('Header renders with redux with defaults', () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <ConnectedHeader />
      </Router>
    )
    expect(getByTestId('title').textContent).toBe('YouTube')
  })

  test('Header shows search input when searching', () => {
    const { getByTestId } = renderWithRedux(
      <Router>
        <ConnectedHeader />
      </Router>
    )
    fireEvent.click(getByTestId('search-icon'))
    expect(getByTestId('search-input')).toBeDefined()
  })
})
