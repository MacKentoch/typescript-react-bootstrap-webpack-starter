// #region imports
import React from 'react';
import { RouteComponentProps } from 'react-router';
// #endregion

// #region flow types
type Props = any & RouteComponentProps<any>;

type State = any;
// #endregion

class Protected extends React.PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <h1>Protected view</h1>
        <h3>If you can read, it means you are authenticated</h3>
      </div>
    );
  }
  // #endregion
}

export default Protected;
