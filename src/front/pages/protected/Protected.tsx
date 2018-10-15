// #region imports
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
// #endregion

// #region flow types
interface Props extends RouteComponentProps {}

interface State {}
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
