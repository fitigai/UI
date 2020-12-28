import React from 'react'

const ExampleComponent = ({ text }) => {
  return <div>Example Component: {text}</div>
}

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(ExampleComponent).toBeTruthy()
  })
})
