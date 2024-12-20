import Buttons from '~/Components/Buttons';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classess = cx('menu__item', {
    separate: data.separate,
  });

  return (
    <Buttons className={classess} href={data.href} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Buttons>
  );
}

export default MenuItem;
