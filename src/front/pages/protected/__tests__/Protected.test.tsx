import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import Protected from '../Protected';

describe('Protected page', () => {
  it('renders as expected', () => {
    const props = {};

    const component = shallow(
      <div>
        <MemoryRouter>
          <Protected {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
