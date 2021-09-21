import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {//does it render a heading?
    render(<Home />)//react DOM render command

    const heading = screen.getByRole('heading', {//check screen object to see if heading comes back and see what text /something/i matches a string
      name: /List of Names/i,
    })

    expect(heading).toBeInTheDocument()
  })
})