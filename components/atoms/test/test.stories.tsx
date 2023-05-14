/* eslint-disable no-import-assign */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as NextImage from 'next/image'
import React from 'react'
import Test from '.'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props: any) => <OriginalNextImage {...props} unoptimized />
})

const config: ComponentMeta<typeof Test> = {
	title: 'Test',
	component: Test
}

export default config

export const Primary: ComponentStory<typeof Test> = () => {
	return (
		<>
			<Test></Test>
		</>
	)
}
