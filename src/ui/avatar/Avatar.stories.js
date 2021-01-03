import React from 'react'

import Avatar from '.'

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    name: {
      control: 'text'
    }
  }
}

const Story = ({ ...props }) => <Avatar {...props} />

export const Default = Story.bind({})
Default.args = {
  name: 'John Doe'
}
