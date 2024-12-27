import classNames from 'classnames/bind';
import styles from './Videos.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faPlus, faShare } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Video() {
  return (
    <div className={cx('wraper')}>
      <video
        className={cx('video')}
        controls
        src="https://files.fullstack.edu.vn/f8-tiktok/videos/520-63516c43aeede.mp4"
      />
     <div className={cx('status')}>
          <div className={cx('avatar')}>
            <img className={cx('avatar__user')} src="https://files.fullstack.edu.vn/f8-tiktok/users/10/630267063d1b4.jpg" alt="" />
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

export default Video;
