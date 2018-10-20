// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import BackToTopButton, { ButtonPosition } from '../BackToTopButton';
// #endregion

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const props = {
      position: ButtonPosition['bottom-right'],
      onClick: () => {},
      motionStyle: {},
    };

    const component = renderer
      .create(
        <div>
          <BackToTopButton {...props} />
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
