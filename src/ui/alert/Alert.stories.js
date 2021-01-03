import React from 'react'

import Alert from '.'
import { ALERT_TYPES } from '../../utils/constants'

export default {
  title: 'UI/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ALERT_TYPES
      }
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  }
}

const Story = ({ ...props }) => <Alert {...props} />

export const Default = Story.bind({})
Default.args = {
  type: 'success',
  title: 'Lorem ispum dolor',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, aperiam voluptas numquam, assumenda blanditiis veniam quasi necessitatibus natus officiis totam temporibus. Culpa fugit optio distinctio voluptatem commodi consequatur delectus fuga.'
}
