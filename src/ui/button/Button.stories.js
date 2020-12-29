import React from 'react'

import Button from '.'
import { BUTTON_TYPES } from '../../utils/constants'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: BUTTON_TYPES
      }
    }
  }
}

const Story = ({ type, ...props }) => (
  <Button type={type} {...props}>
    Main title
  </Button>
)

export const Default = Story.bind({})
