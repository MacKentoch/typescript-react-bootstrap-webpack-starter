// #region imports
import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// #endregion

// #region flow types
interface Props extends RouteComponentProps {}
interface State {}
// #endregion

class About extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  // #endregion
}

export default About;
