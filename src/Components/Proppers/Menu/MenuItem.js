import Buttons from '~/Components/Buttons';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Buttons className={cx('menu__item')} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Buttons>
  );
}

export default MenuItem;
