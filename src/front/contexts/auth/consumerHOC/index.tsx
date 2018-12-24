// #region imports
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { AuthContextConsumer } from '../context';
import { AuthProviderState } from '../providerComponent';
import { $Subtract } from '../../../types/operators';
// #endregion

// #region flow types
export type AuthContextProps = AuthProviderState;

export type InjectedProps = AuthProviderState;

type Props = any;
type State = any;
// #endregion

// #region CONSUMER HOC
export default function withAuth<P extends InjectedProps>() {
  return (
    BaseComponent: React.ComponentType<P>,
  ): React.ComponentType<$Subtract<P, InjectedProps>> => {
    class WithAuth extends React.Component<Props, State> {
      render() {
        // @ts-ignore
        const { ...passProps } = this.props;

        return (
          <AuthContextConsumer>
            {/* @ts-ignore */}
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
