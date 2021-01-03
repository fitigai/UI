import React from 'react'

import Icon from '.'
import { ICONS, ICON } from '../../utils/constants'

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: ICONS
      }
    }
  }
}

const Story = ({ name = ICON.CHECK, ...props }) => (
  <Icon name={name} {...props} />
)

export const Default = Story.bind({})
