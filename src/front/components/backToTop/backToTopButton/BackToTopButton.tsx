// #region imports
import React from 'react';
import cx from 'classnames';
import UpIcon from './UpIcon';
import WithRightMargin from './styled/WithRightMargin';
// #endregion

// #region flow types

export enum ButtonPosition {
  'bottom-left',
  'bottom-right',
}
export interface Props {
  position?: ButtonPosition | null;
  onClick: (event: React.SyntheticEvent<any>) => any;
  children?: React.ReactNode;
  motionStyle: any;
}
// #endregion

// #region constants
const defaultBackGroundColor = '#4A4A4A';
const sideOffset = '-10px';
const bottomOffset = '40px';
const defaultWidth = '100px';
const defaultZindex = 10;
const defaultOpacity = 0.5;
const defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor,
};
// #endregion

function BackToTopButton({ onClick, position, children, motionStyle }: Props) {
  const buttonStyle = setPosition(position, {
    ...motionStyle,
    ...defaultStyle,
  });

  return (
    <button
      style={buttonStyle}
      className={cx({
        btn: true,
      })}
      onClick={onClick}
    >
      {!children && (
        <WithRightMargin>
          <UpIcon color={'#F1F1F1'} />
        </WithRightMargin>
      )}
      {!!children && children}
    </button>
  );
}

// #region statics
BackToTopButton.defaultProps = {
  position: 'bottom-right',
};

BackToTopButton.displayName = 'BackToTopButton';
// #endregion

// #region helpers
function setPosition(
  position: ButtonPosition | null = ButtonPosition['bottom-right'],
  refStyle = defaultStyle,
): any {
  const style = { ...refStyle };

  switch (position) {
    case ButtonPosition['bottom-right']:
      style.right = sideOffset;
      style.left = '';
      return style;

    case ButtonPosition['bottom-left']:
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}
// #endregion

export default BackToTopButton;
