import React from 'react';
import { shallow } from 'enzyme';

import { Contacts } from '../contacts.component';

jest.unmock('../contacts.component.js');

describe('<Contacts />', () => {
  const getShallow = () => shallow(<Contacts />);

  it('should match snapshot', () => {
    expect(getShallow()).toMatchSnapshot();
  });
});
