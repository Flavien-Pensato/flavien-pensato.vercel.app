import React from 'react'
import { shallow } from 'enzyme'
import serializer from 'jest-emotion'
import { Title } from '../title.component'

expect.addSnapshotSerializer(serializer)

jest.unmock('../title.component.js')

describe('<Title />', () => {
  const getShallow = () => shallow(<Title />)

  it('should match snapshot', () => {
    expect(getShallow()).toMatchSnapshot()
  })
})
