/* eslint-disable no-undefined */

// #region imports
import * as React from 'react';
import { Motion, spring, presets } from 'react-motion';
import BackToTopButton, {ButtonPosition} from './backToTopButton/BackToTopButton';
// #endregion

// #region flow types
interface Props {
  minScrollY: number;
  scrollTo?: string | null;
  onScrollDone?: () => void;
}

interface State {
  windowScrollY: number;
  showBackButton: boolean;
  tickingScollObserve: boolean;
}
// #endregion

class BackToTop extends React.Component<Props, State> {
  public static defaultProps = {
    minScrollY: 120,
    onScrollDone: () => { return; },
  };

  state = {
    windowScrollY: 0,
    showBackButton: false,
    tickingScollObserve: false,
  };

  // #region lifecycle methods
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }

  render() {
    const { showBackButton } = this.state;
    return (
      <Motion style={{ x: spring(showBackButton ? 0 : 120, presets.stiff) }}>
        {({ x }) => (
          <BackToTopButton
            position={ ButtonPosition['bottom-right'] }
            onClick={this.handlesOnBackButtonClick}
            motionStyle={{
              WebkitTransform: `translate3d(${x}px, 0, 0)`,
              transform: `translate3d(${x}px, 0, 0)`,
            }}
          />
        )}
      </Motion>
    );
  }
  // #endregion

  // #region on windows scroll callback
  handleWindowScroll = () => {
    if (window) {
      const { windowScrollY, tickingScollObserve } = this.state;
      const { minScrollY } = this.props;

      /* eslint-disable no-undefined */
      const windowPagYOffset = window.pageYOffset;
      const documentPageYOffset: any = (
        document.documentElement ||
        document.body.parentNode ||
        document.body
      );
      const currentWindowScrollY =
        window.pageYOffset !== undefined
          ? windowPagYOffset
          : documentPageYOffset.scrollTop;
      /* eslint-enable no-undefined */

      // scroll event fires to often, using window.requestAnimationFrame to limit computations
      if (!tickingScollObserve) {
        window.requestAnimationFrame(() => {
          if (windowScrollY !== currentWindowScrollY) {
            const shouldShowBackButton =
              currentWindowScrollY >= minScrollY ? true : false;

            this.setState({
              windowScrollY: currentWindowScrollY,
              showBackButton: shouldShowBackButton,
            });
          }
          this.setState({ tickingScollObserve: false });
        });
      }

      this.setState({ tickingScollObserve: true });
    }
  };
  // #endregion

  // #region on button click (smooth scroll)
  handlesOnBackButtonClick = (event: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }
    const { minScrollY } = this.props;
    const { windowScrollY } = this.state;

    if (window && windowScrollY && windowScrollY > minScrollY) {
      // using here smoothscroll-polyfill
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      // smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  };

  scrollDone = () => {
    const { onScrollDone } = this.props;
    if (onScrollDone) {
      onScrollDone();
    }
  };
  // #endregion
}

export default BackToTop;
