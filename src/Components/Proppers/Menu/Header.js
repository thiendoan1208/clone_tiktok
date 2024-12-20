import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
        <button className={cx('back__btn')}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
        </button>
        <h4 className={cx('header__title')}>{title}</h4>
    </header>
  );
}

export default Header;
