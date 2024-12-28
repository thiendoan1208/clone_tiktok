import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';

import styles from './Videos.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
  return (
    <div className={cx('wraper')}>
      <video className={cx('video')}  preload="none" controls muted loop src={data.popular_video.file_url} />

      <div className={cx('status')}>
        <div className={cx('avatar')}>
          <img className={cx('avatar__user')} src={data.avatar} alt="" />
          <div className={cx('follow__btn')}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        <div className={cx('react')}>
          <div className={cx('react__btn')}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <span className={cx('number')}>194.2K</span>
        </div>

        <div className={cx('react')}>
          <div className={cx('react__btn')}>
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <span className={cx('number')}>194.2K</span>
        </div>

        <div className={cx('react')}>
          <div className={cx('react__btn')}>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <span className={cx('number')}>194.2K</span>
        </div>

        <div className={cx('react')}>
          <div className={cx('react__btn')}>
            <FontAwesomeIcon icon={faShare} />
          </div>
          <span className={cx('number')}>194.2K</span>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Video;
