// #region lifecycle
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Jumbotron from 'reactstrap/lib/Jumbotron';
// #endregion

// #region flow types
interface Props extends RouteComponentProps {}
interface State {}
// #endregion

class PageNotFound extends React.PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Sorry this page does not exists...</h1>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default PageNotFound;