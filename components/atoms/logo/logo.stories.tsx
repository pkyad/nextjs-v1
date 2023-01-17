/* eslint-disable no-import-assign */

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logo from '.'

import * as NextImage from 'next/image'

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

export const Primary: ComponentStory<typeof Logo> = () => <Logo></Logo>
