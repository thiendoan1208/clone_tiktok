import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './VideoInformation.module.scss';

const cx = classNames.bind(styles);

function VideoInformation({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Link to="/profile" className={cx('username')}>
        {data.nickname}
        </Link>
        <span className={cx('dot_icon')}>
          <FontAwesomeIcon icon={faCircle} />
        </span>
        <span className={cx('update__time')}>{data.popular_video.updated_at}</span>
      </div>

      <div className={cx('main')}>
        <span className={cx('content')}>{data.popular_video.description}</span>
      </div>

      <div className={cx('footer')}>
        <span className={cx('music__icon')}>
          <FontAwesomeIcon icon={faMusic} />
        </span>
        <span>{data.popular_video.music === "" ? "original sound" : data.popular_video.music }</span>
      </div>
    </div>
  );
}
VideoInformation.propTypes = {
  data: PropTypes.node.isRequired,
};

export default VideoInformation;
