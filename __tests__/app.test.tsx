// @ts-nocheck
import MyApp from '@/pages/_app'
import SignIn from '@/pages/auth/sign-in'
import Home from '@/pages/home'
import { STATUS_CODES } from '@/shared/constants'
import mockSetup from '@/shared/helpers/mock-setup'
import * as useAppContextModule from '@/shared/hooks/useAppContext'
import { act, render, screen, waitFor } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import React from 'react'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('@/shared/hooks/useAppContext', () => {
	return {
		__esModule: true,
		...jest.requireActual('@/shared/hooks/useAppContext')
	}
})
mockSetup()
describe('_app', () => {
	it('renders a home page', async () => {
		void mockRouter.push('/home')

		await act(async () => {
			render(<MyApp Component={Home} />)
		})
		await waitFor(() => {
			expect(screen.getByText('Admin Test')).toBeInTheDocument()
			expect(screen.getByText('Hello from tRPC')).toBeInTheDocument()
		})
	})

	it('renders a the login page', async () => {
		void mockRouter.push('/auth/sign-in')

		jest.spyOn(useAppContextModule, 'default').mockImplementation(() => {
			return { loading: false, user: null, fetchUser: jest.fn() }
		})

		global.fetch = async () => {
			return await Promise.resolve({
				json: async () => await Promise.resolve({}),
				status: STATUS_CODES.SERVER_ERROR
			})
		}
		await act(async () => {
			render(<MyApp Component={SignIn} />)
		})
		await waitFor(() => {
			expect(
				screen.getByText('Sign in with username and password')
			).toBeInTheDocument()
		})
	})
})
