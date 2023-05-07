/* eslint-disable no-import-assign */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as NextImage from 'next/image'
import React from 'react'
import { Button } from 'uilib1'
import Logo from '.'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props: any) => <OriginalNextImage {...props} unoptimized />
})

const config: ComponentMeta<typeof Logo> = {
	title: 'Logo',
	component: Logo
}

export default config

export const Primary: ComponentStory<typeof Logo> = () => {
	return (
		<>
			<Button
				onClick={() => {
					// eslint-disable-next-line no-console
					console.log('clicked')
				}}
			>
				OK
			</Button>
			<Logo></Logo>
		</>
	)
}
