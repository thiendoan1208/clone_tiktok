import PropTypes from 'prop-types';
import classNames from 'classnames/bind';


import styles from './Videos.module.scss';
import StatusBar from '../StatusBar';

const cx = classNames.bind(styles);

function Video({ data }) {
  return (
    <div className={cx('wraper')}>
      <video className={cx('video')}  preload="none" controls muted loop src={data.popular_video.file_url} />

      <div className={cx('status')}>
        <StatusBar data={data} />
      </div>
    </div>
  );
}

Video.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Video;
