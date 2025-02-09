import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon }) {
  return (
    <NavLink className={(nav) => cx('menu__item', { active: nav.isActive })} to={to}>
     <div className={cx('menu__icon')}> {icon}</div>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;

// Navlink hỗ trợ thêm class active khi được chọn đến 