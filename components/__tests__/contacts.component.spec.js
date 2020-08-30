import React from 'react'
import { shallow } from 'enzyme'
import serializer from 'jest-emotion'

import { Contacts } from '../contacts.component'

expect.addSnapshotSerializer(serializer)

jest.unmock('../contacts.component.js')

describe('<Contacts />', () => {
  const getShallow = () => shallow(<Contacts />)

  it('should match snapshot', () => {
    expect(getShallow()).toMatchSnapshot()
  })
})
