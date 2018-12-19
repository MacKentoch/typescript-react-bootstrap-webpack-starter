// #region imports
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { AuthContextConsumer } from '../context';
import { AuthProviderState } from '../providerComponent';
// #endregion

// #region flow types
export interface AuthContextProps extends AuthProviderState { }
// #endregion

// #region CONSUMER HOC
export default function withAuth<P extends object>(/* additionnal args if needed */) {
  return (BaseComponent: React.ComponentType<P>) => {
    class WithAuth extends React.Component<P, any> {
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

    return hoistNonReactStatics(WithAuth, BaseComponent);
  };
}
// #endregion
