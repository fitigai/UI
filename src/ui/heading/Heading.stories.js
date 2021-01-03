import React from 'react'

import Heading from '.'
import { SIZES, SIZE } from '../../utils/constants'

export default {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: SIZES
      }
    }
  }
}

const Story = ({ ...props }) => <Heading {...props} />

export const Default = Story.bind({})
Default.args = {
  children: 'Lorem ispum',
  size: SIZE.M
}
