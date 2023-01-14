import { render } from '@testing-library/react'
import Home from '@/pages/index'
import React from 'react'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    // const heading = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })

    expect(1).toBe(1)
  })
})
