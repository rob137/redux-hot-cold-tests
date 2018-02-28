import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import { RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

describe('<TopNav />', () => {
  it('renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('dispatches restartGame on click to \'new game\'', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
  })
});