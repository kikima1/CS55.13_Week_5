import React from 'react'
import { render, screen } from '@testing-library/react'
import Entry from '../pages/[id]'

describe('Entry', () => {
  it('renders a heading', () => {//does it render a heading?
    render(<Entry />)//react DOM render command

    const heading = screen.getByRole('heading', {
      name: /Best Friend/i,
    })

    expect(heading).toBeInTheDocument()
  })
})