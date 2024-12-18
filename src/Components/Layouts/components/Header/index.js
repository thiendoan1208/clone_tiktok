import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// cho phép sử dụng - trong js
const cx = classNames.bind(styles);

function Header() {
  return <header className={cx('wrapper')}>
    <div className={cx('inner__wrapper')}></div>
  </header>;
}

export default Header;
