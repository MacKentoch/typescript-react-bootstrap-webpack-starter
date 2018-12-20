// #region imports
import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { AuthContextConsumer } from '../context';
import { AuthProviderState } from '../providerComponent';
// #endregion

// #region flow types
export interface InjectedProps extends AuthProviderState {}

interface State {}
// #endregion

// #region CONSUMER HOC
export default function withAuth<
  P extends InjectedProps
>(/* additionnal args if needed */) {
  return (BaseComponent: ComponentType<P>) => {
    class WithAuth extends React.Component<P, State> {
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
