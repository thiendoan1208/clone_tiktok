import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faClosedCaptioning } from '@fortawesome/free-regular-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useRef, useState } from 'react';
import React from 'react';

import styles from './Videos.module.scss';
import StatusBar from '../StatusBar';
import VideoInformation from './VideoInformation';

const cx = classNames.bind(styles);

function Video({ data }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const videoWrapperRef = useRef();
  const videoRef = useRef();

  // Video Play/Pause
  const handleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <React.Fragment>
      <div onClick={handleVideoPlay} ref={videoWrapperRef} className={cx('wraper')}>
        {/* Video */}
        <video
          ref={videoRef}
          className={cx('video')}
          playsInline
          preload="none"
          loop={false}
          muted
          autoPlay
          src={data.popular_video.file_url}
        />

        <VideoInformation data={data} />

        {/* Video Control */}
        <div className={cx('video__control')}>
          <div className={cx('control__header')}></div>

          <div className={cx('control__footer')}>
            {/* Video Play/Pause Effect */}
            <div className={cx('play__pause')}>
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>

            <div>
              <Tippy content="Caption" placement="bottom">
                <FontAwesomeIcon className={cx('footer__icon')} icon={faClosedCaptioning} />
              </Tippy>
              <Tippy content="Floating Player" placement="bottom">
                <FontAwesomeIcon className={cx('footer__icon')} icon={faLayerGroup} />
              </Tippy>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className={cx('status')}>
        <StatusBar data={data} />
      </div>
    </React.Fragment>
  );
}

Video.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Video;
