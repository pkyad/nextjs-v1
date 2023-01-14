import { render } from '@testing-library/react'
import Home from '@/pages/index'
import React from 'react'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
