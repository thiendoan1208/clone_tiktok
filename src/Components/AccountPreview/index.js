import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Buttons from '../Buttons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('preview')}>
      <header className={cx('header')}>
        <img className={cx('avatar')} src="https://i.pinimg.com/736x/91/5b/1b/915b1bf025b6b08d1de5ca7f9b92a896.jpg" alt="avarrtar" />
        <Buttons primary>Follow</Buttons>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>embemeo007</strong>
          <FontAwesomeIcon className={cx('tick')} icon={faCircleCheck} />
        </p>
        <p className={cx('username')}>Nguyen Ngoc Meow</p>
      </div>
      <div className={cx('footer')}> 
        <div className={cx('analysis')}>
            <span>8.2M</span>
            <p>Followers</p>
        </div>
        <div className={cx('analysis')}>
            <span>8.2M</span>
            <p>Likes</p>
        </div>
      </div>
    </div>
  );
}

export default AccountPreview;
