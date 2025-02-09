import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Buttons.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Buttons({
  to,
  href,
  rounded = false,
  disabled = false,
  text = false,
  primary = false,
  outline = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...passPops
}) {
  let Comp = 'button';

  let classes = cx('wrapper', {
    primary,
    outline,
    disabled,
    rounded,
    small,
    large,
    text,
    leftIcon,
    rightIcon,
    [className]: className,
  });

  const props = {
    onClick,
    ...passPops,
  };

  // delete btn when disabled
  if (disabled) {
    Object.keys(props).forEach((propKey) => {
      if (propKey.startsWith('on') && typeof propKey === 'function') {
        delete props[propKey];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Buttons.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Buttons;
