// #region imports
import React from 'react';
import AnimatedDiv from './styled/AnimatedDiv';
import { getDisplayName } from '../utils/index';
// #endregion

// #region flow types
type Props = any;

type State = any;
// #endregion

function withEnterAnimation() {
  return (BaseComponent: any) => {
    class WithEnterAnimation extends React.Component<Props, State> {
      static displayName = `withEnterAnimation${getDisplayName(BaseComponent)}`;

      render() {
        const { ...passProps } = this.props;

        return (
          <AnimatedDiv viewEnter>
            <BaseComponent {...passProps} />
          </AnimatedDiv>
        );
      }
    }

    // /* eslint-disable no-process-env */
    // if (process.env.NODE_ENV !== 'production') {
    //   // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
    //   WithEnterAnimation.displayName = wrapDisplayName(
    //     BaseComponent,
    //     'withEnterAnimation',
    //   );
    // }
    // /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

export default withEnterAnimation;
