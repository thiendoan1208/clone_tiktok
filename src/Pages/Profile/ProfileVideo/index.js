import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faVideo, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './ProfileVideo.module.scss';

const cx = classNames.bind(styles);

function ProfileVideo() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('navbar')}>
          <div className={cx('nav__item', 'active')}>
            <FontAwesomeIcon className={cx('icon')} icon={faVideo} />
            <span className={cx('section')}>Video</span>
          </div>

          <div className={cx('nav__item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faRetweet} />
            <span className={cx('section')}>Reposts</span>
          </div>

          <div className={cx('nav__item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
            <span className={cx('section')}>Favorites</span>
          </div>

          <div className={cx('nav__item')}>
            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
            <span className={cx('section')}>Liked</span>
          </div>
        </div>

        <div className={cx('category__wrapper')}>
          <div className={cx('category')}>
            <div className={cx('cate__item', 'chose')}>
              <span className="item__name">Latest</span>
            </div>

            <div className={cx('cate__item')}>
              <span className="item__name">Popular</span>
            </div>

            <div className={cx('cate__item')}>
              <span className="item__name">Oldest</span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('main')}>
        <div className={cx('main__content')}>
            <div className={cx('nothing')}>
            <FontAwesomeIcon icon={faCheck} />
            </div>
            <span className={cx('nothing__header')}>Upload your first video</span>
            <span className={cx('nothing__main')}>Your video will appear here</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileVideo;
