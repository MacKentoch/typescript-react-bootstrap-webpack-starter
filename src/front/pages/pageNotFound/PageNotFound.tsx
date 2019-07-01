import React from 'react';
import { RouteComponentProps } from 'react-router';
import Jumbotron from 'reactstrap/lib/Jumbotron';

// #region types
type Props = any & RouteComponentProps;
// #endregion

function PageNotFound({  }: Props) {
  return (
    <div>
      <Jumbotron>
        <h1>Sorry this page does not exists...</h1>
      </Jumbotron>
    </div>
  );
}

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
