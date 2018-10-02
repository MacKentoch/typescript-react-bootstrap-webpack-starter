// #region imports
import * as React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { AuthContextConsumer } from '../context/index';
import { type AuthProviderState } from '../providerComponent';
// #endregion

// #region flow types
export type AuthContextProps = { ...any } & AuthProviderState;
// #endregion

// #region CONSUMER HOC
export default function withAuth(/* additionnal args if needed */) {
  return BaseComponent => {
    class WithAuth extends React.Component<any, any> {
      render() {
        const { ...passProps } = this.props;

        return (
          <AuthContextConsumer>
            {(fromAuthProps: AuthContextProps) => (
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
