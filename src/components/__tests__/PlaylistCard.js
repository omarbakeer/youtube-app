import React from 'react'
import { cleanup, render } from 'react-testing-library'
import PlaylistCard from '../PlaylistCard'

afterEach(cleanup)

describe('PlaylistCard component', () => {
  test('PlaylistCard thumbnails renders correctly', () => {
    const { getByTestId } = render(<PlaylistCard />)

    expect(getByTestId('playlist-thumbnail')).toBeDefined()
    expect(getByTestId('playlist-count')).toBeDefined()
  })

  test('Header shows search input when searching', () => {
    const { getByTestId } = render(<PlaylistCard />)

    expect(getByTestId('playlist-title')).toBeDefined()
    expect(getByTestId('playlist-channel')).toBeDefined()
  })
})
