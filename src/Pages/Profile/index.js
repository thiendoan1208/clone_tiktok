import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import ProfileInfo from './ProfileInfo';
import ProfileVideo from './ProfileVideo';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('profile')}>
      <div className={cx('profile__info')}>
        <ProfileInfo />
      </div>
      <div className={cx('profile__video')}>
        <ProfileVideo />
      </div>
    </div>
  );
}

export default Profile;
