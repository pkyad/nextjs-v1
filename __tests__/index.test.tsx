// @ts-nocheck
import { render } from '@testing-library/react'
import Home from '@/pages/index'

import React from 'react'
import * as routerModule from 'next/router'

describe('Home', () => {
  const pushMockFn = jest.fn()
  it.only('renders a heading', async () => {
    jest.spyOn(routerModule, 'useRouter').mockImplementation(() => {
      return {
        push: pushMockFn
      }
    })

    const container = render(<Home />)
    expect(pushMockFn).toHaveBeenCalled()
    const label = container.queryByText('Index page')
    expect(label).toBeInTheDocument()
  })
})
