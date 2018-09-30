// #region imports
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router';
// #endregion

// #region flow types
interface Props extends RouteComponentProps {
  children: React.ReactNode;
}

type State = any;
// #endregion

class ScrollToTop extends Component<Props, State> {
  // #region lifecycle
  componentDidUpdate(prevProps: Props) {
    if (window) {
      const { location: prevLocation } = prevProps;
      const { location: nextLocation } = this.props;

      if (prevLocation !== nextLocation) {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
  // #endregion
}

export default withRouter(ScrollToTop);
