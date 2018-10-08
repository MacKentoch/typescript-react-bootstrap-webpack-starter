// #region imports
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
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

    return hoistNonReactStatics(WithAuth, BaseComponent);
  };
}
// #endregion
