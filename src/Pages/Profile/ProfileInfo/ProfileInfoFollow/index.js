import classNames from "classnames/bind";
import styles from '../ProfileInfo.module.scss'

const cx = classNames.bind(styles)

function ProfileInfoFollow() {
  return (
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
  );
}

export default ProfileInfoFollow;
