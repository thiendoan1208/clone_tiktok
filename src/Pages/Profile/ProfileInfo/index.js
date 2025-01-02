import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './ProfileInfo.module.scss';
import Buttons from '~/Components/Buttons';

const cx = classNames.bind(styles);

function ProfileInfo() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('img')}>
        <img src={images.userAvatar} alt="" />
      </div>

      <div className={cx('infor')}>
        <div className={cx('nickname')}>
          <h1>doan.thien.bhhh</h1>
          <h2>Doan Thien</h2>
        </div>

        <div className={cx('controls')}>
          <Buttons primary className={cx('primary__btn')}>Edit Profile</Buttons>

          <Buttons className={cx('edit__btn')}>Promote post</Buttons>
          
          <Buttons className={cx('edit__btn')}>
            <FontAwesomeIcon icon={faGear} />
          </Buttons>

          <Buttons className={cx('edit__btn')}>
            <FontAwesomeIcon icon={faShare} />
          </Buttons>
        </div>

        <div className={cx('follow')}>
          <div className={cx('follow__info')}>
            <span className={cx('number')}>0</span>
            <span className={cx('symbol')}>Following</span>
          </div>
          <div className={cx('follow__info')}>
            <span className={cx('number')}>0</span>
            <span className={cx('symbol')}>Followers</span>
          </div>
          <div className={cx('follow__info')}>
            <span className={cx('number')}>0</span>
            <span className={cx('no_symbol')}>Likes</span>
          </div>
        </div>

        <div className={cx('bio')}>
            <span>No bio yet.</span>
        </div>

      </div>
    </div>
  );
}

export default ProfileInfo;
