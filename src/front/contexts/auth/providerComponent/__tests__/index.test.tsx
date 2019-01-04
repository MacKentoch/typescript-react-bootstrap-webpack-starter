// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import AuthProvider from '../index';
// #endregion

describe('Auth Context Provider', () => {
  it('shloud render Auth provider', () => {
    const wrapper = shallow(
      <AuthProvider>
        <p>a child</p>
      </AuthProvider>,
    );
  });
});
