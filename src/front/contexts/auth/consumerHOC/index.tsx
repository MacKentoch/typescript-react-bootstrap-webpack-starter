// #region imports
import * as React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { AuthContextConsumer } from '../context';
import { AuthProviderState } from '../providerComponent';
// #endregion

// #region flow types
export type AuthContextProps = {} & AuthProviderState;
// #endregion

// #region CONSUMER HOC
export default function withAuth(/* additionnal args if needed */) {
  return (BaseComponent: any) => {
    class WithAuth extends React.Component<any, any> {
      render() {
        const { ...passProps } = this.props;

        return (
          <AuthContextConsumer>
            {fromAuthProps => (
              <BaseComponent {...fromAuthProps} {...passProps} />
            )}
          </AuthContextConsumer>
        );
      }
    }

    // #region add static displayName for dev
    /* eslint-disable no-process-env */
    if (process.env.NODE_ENV !== 'production') {
      WithAuth.displayName = wrapDisplayName(BaseComponent, 'WithAuth');
    }
    /* eslint-enable no-process-env */
    // #endregion

    return WithAuth;
  };
}
// #endregion
