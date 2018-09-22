

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import LogoutRoute from '../LogoutRoute';
// #endregion

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const props = {
      disconnectUser: () => {},
    };

    const component = renderer
      .create(
        <MemoryRouter>
          <LogoutRoute {...props} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
