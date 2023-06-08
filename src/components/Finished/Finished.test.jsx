import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen, getByText } from '@testing-library/react'
import Finished from './Finished'

describe('Finished components', () => {
  test('Finished mounts properly', () => {
    const backlog = render('Finished render', <Finished />)
    expect(backlog).toMatchSnapshot()
    expect('Finished visible', screen.getByText(/Finished/i).textContent).toBeTruthy();

  })
});