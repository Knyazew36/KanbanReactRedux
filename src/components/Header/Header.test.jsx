import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen, getByText } from '@testing-library/react'
import Header from './Header'

describe('Header components', () => {
  test('Header mounts properly', () => {
    const backlog = render('Header render', <Header />)
    expect(backlog).toMatchSnapshot()
    expect('Header visible', screen.getByText(/Header/i).textContent).toBeTruthy();

  })

});