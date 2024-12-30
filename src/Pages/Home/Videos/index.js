import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark, faEllipsis, faUpLong, faHeartCrack, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faClosedCaptioning, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useRef, useState } from 'react';

import styles from './Videos.module.scss';
import StatusBar from '../StatusBar';
import { Wrapper } from '~/Components/Proppers';

const cx = classNames.bind(styles);

function Video({ data }) {
  const [isPlaying, setIsPlaying] = useState(true)

  const videoWrapperRef = useRef()
  const videoRef = useRef()
  const controlAnimation = useRef()

  const handleMoreOption = (props) => {
    return (
      <div className={cx('more__options')} tabIndex="-1" {...props}>
        <Wrapper>
          <div className={cx('auto__scroll', 'item')}>
            <FontAwesomeIcon className={cx('more__icon')} icon={faUpLong} />
            <span>Auto scroll</span>
            <div className={cx('button')}>
              <div className={cx('dot')}></div>
            </div>
          </div>

          <div className={cx('not__interested', 'item')}>
            <FontAwesomeIcon className={cx('more__icon')} icon={faHeartCrack} />
            <span>Not interested</span>
          </div>

          <div className={cx('report', 'item')}>
            <FontAwesomeIcon className={cx('more__icon')} icon={faFlag} />
            <span>Report</span>
          </div>
        </Wrapper>
      </div>
    );
  };

  // Video Play/Pause
  const handleVideoPlay = () => {
      if(videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
        controlAnimation.current.classList.add(cx('animation'))
        setTimeout(() => {
        controlAnimation.current.classList.remove(cx('animation'))
        },300)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
        controlAnimation.current.classList.add(cx('animation'))
        setTimeout(() => {
        controlAnimation.current.classList.remove(cx('animation'))
        },300)
      }
  }

  return (
    <div 
    onClick={handleVideoPlay}
    ref={videoWrapperRef} 
    className={cx('wraper')}
    >
      {/* Video */}
      <video ref={videoRef} className={cx('video')} playsInline preload="none" muted loop src={data.popular_video.file_url} />

      {/* Status Bar */}
      <div className={cx('status')}>
        <StatusBar data={data} />
      </div>

      {/* Video Control */}
      <div className={cx('video__control')}>
        <div className={cx('control__header')}>
          <div className={cx('volume')}>
            <FontAwesomeIcon icon={faVolumeXmark} />
            <div className={cx('volume__range')}>
              <div className={cx('range')}>
                <div className={cx('range__dot')}></div>
              </div>
            </div>
          </div>

          <div>
            <HeadlessTippy
              interactive
              placement="right"
              offset={[50, 20]}
              duration={[100, 200]}
              render={handleMoreOption}
            >
              <div className={cx('more')}>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </HeadlessTippy>
          </div>
        </div>

        <div className={cx('control__footer')}>
          <Tippy content="Caption" placement="bottom">
            <FontAwesomeIcon className={cx('footer__icon')} icon={faClosedCaptioning} />
          </Tippy>
          <Tippy content="Floating Player" placement="bottom">
            <FontAwesomeIcon className={cx('footer__icon')} icon={faLayerGroup} />
          </Tippy>
        </div>
      </div>

      {/* Video Play/Pause Effect */}
      <div ref={controlAnimation}  className={cx('control__animation')}>
      {isPlaying ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
      </div>

    </div>
  );
}

Video.propTypes = {
  data: PropTypes.node.isRequired,
};

export default Video;
