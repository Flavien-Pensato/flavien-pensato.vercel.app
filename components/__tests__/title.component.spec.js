import React from 'react';
import { shallow } from 'enzyme';

import { Title } from '../title.component';

jest.unmock('../title.component.js');

describe('<Title />', () => {
  const getShallow = () => shallow(<Title />);

  it('should match snapshot', () => {
    expect(getShallow()).toMatchSnapshot();
  });
});
