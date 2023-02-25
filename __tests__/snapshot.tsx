// @ts-nocheck
import { render, waitFor } from '@testing-library/react'
import Home from '@/pages/index'
import React from 'react'
import * as routerModule from 'next/router'

it('renders homepage unchanged', async () => {
  const mockFn = jest.fn()
  jest.spyOn(routerModule, 'useRouter').mockImplementation(() => {
    return {
      push: mockFn
    }
  })
  const { container } = render(<Home />)
  await waitFor(() => {
    expect(mockFn).toHaveBeenCalled()
  })
  expect(container).toMatchSnapshot()
})
