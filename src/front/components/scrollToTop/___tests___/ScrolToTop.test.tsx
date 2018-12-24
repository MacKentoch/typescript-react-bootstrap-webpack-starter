// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ScrollToTop from '../ScrollToTop';
// #endregion

describe('ScrollToTop component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <div>
        <MemoryRouter>
          <ScrollToTop>
            <p>a child</p>
          </ScrollToTop>
        </MemoryRouter>
      </div>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
