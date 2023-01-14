// @ts-nocheck
import { render } from '@testing-library/react'
import Home from '@/pages/index'
import React from 'react'
import * as routerModule from 'next/router'

it('renders homepage unchanged', () => {
  jest.spyOn(routerModule, 'useRouter').mockImplementation(() => {
    return {
      push: jest.fn()
    }
  })
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
