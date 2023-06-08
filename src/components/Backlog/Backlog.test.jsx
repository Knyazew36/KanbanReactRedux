import { describe, test, expect } from 'vitest'
import { render, screen, getByText, fireEvent } from '@testing-library/react'
import Backlog from './Backlog'

describe('Backlog components', () => {
  test('Backlog mounts properly', () => {
    const backlog = render('Backlog render', <Backlog />)
    expect(backlog).toMatchSnapshot()
    expect('backlog visible', screen.getByText(/backlog/i).textContent).toBeTruthy();

  })

  test('Backlog onClick button', () => {
    const backlog = render('Backlog render', <Backlog />)
    const button = expect(screen.queryAllByRole('button'))

  })
});