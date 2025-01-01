import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpLong,
  faHeartCrack,
  faChevronUp,
  faChevronDown,
  faVolumeXmark,
  faVolumeHigh,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

import { useCallback, useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import Video from './Videos';
import styles from './Home.module.scss';
import * as request from '~/utils/httpsrequest';
import { Wrapper } from '~/Components/Proppers';

const cx = classNames.bind(styles);

function Home() {
  const [videos, setVideo] = useState([]);
  const [pages, setPage] = useState(1);
  const [currentVideo, setCurrentVideo] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [muted, setMuted] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [videoProgress, setVideoProgress] = useState('');

  const videoRefs = useRef([]);
  const upBtn = useRef();
  const buttonRef = useRef();
  const dotRef = useRef();
  const progressBarRef = useRef();
  const progressFillRef = useRef();
  const progressDotRef = useRef();

  const videoArray = videoRefs.current;
  const videoList = videoArray.length;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const InsideAllVideos = [];

  videoArray.forEach((element) => {
    const video = element.querySelector('video');
    InsideAllVideos.push(video);
  });

  
  // Call API
  useEffect(() => {
    request
      .get('users/suggested?', {
        params: {
          page: pages,
          per_page: 5,
        },
      })
      .then((res) => {
        setVideo((pre) => [...pre, ...res.data]);
      });
  }, [pages]);


  // Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wrapper = entry.target;
          const video = wrapper.querySelector('video');

          if (entry.isIntersecting && video) {
            video.play().catch((err) => {
              console.warn('Video đang bị lỗi, F5 lại trang web để sửa', err);
            });
            setCurrentVideo(videoRefs.current.indexOf(entry.target));
          } else {
            video.muted = true;
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [videos]);

  // ScrollByHand + ScrollBtn
  useEffect(() => {
    if (currentVideo === videoList - 1) {
      setPage((pre) => pre + 1);
    }

    if (currentVideo > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [currentVideo, videoList]);

  // ClickScrollDown
  const clickScrollDown = () => {
    setTimeout(() => {
      if (currentVideo <= videoList) {
        videoArray[currentVideo + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  // ClickClickScrollUp
  const clickScrollUp = () => {
    if (currentVideo > 0) {
      videoArray[currentVideo - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle Video Volume
  const handleVolume = (e) => {
    e.stopPropagation();

    if (muted === true) {
      setMuted(false);
      InsideAllVideos.forEach((video) => {
        video.muted = false;
      });
    } else {
      setMuted(true);
      InsideAllVideos.forEach((video) => {
        video.muted = true;
      });
    }
  };

  useEffect(() => {
    if (muted === false) {
      setMuted(false);
      InsideAllVideos.forEach((video) => {
        video.muted = false;
      });
    }
  }, [muted, InsideAllVideos]);

  // Auto Scroll
  const handleMoreOption = (props) => {
    return (
      <div onClick={handleStopPropagation} className={cx('more__options')} tabIndex="-1" {...props}>
        <Wrapper>
          <div className={cx('auto__scroll', 'item')}>
            <FontAwesomeIcon className={cx('more__icon')} icon={faUpLong} />
            <span>Auto scroll</span>
            <div ref={buttonRef} onClick={handleAutoScroll} className={cx('button', { active: autoPlay })}>
              <div ref={dotRef} onClick={handleAutoScroll} className={cx('dot', { active: autoPlay })}></div>
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

  // stopPropagation
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  // Handle AutoScroll
  const handleVideoEnd = useCallback(() => {
    videoArray[currentVideo + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentVideo, videoArray]);

  // Khi autoPlay thay đổi, React re-renders và tạo ra một hàm mới cho handleVideoEnd.
  // Điều này dẫn đến việc removeEventListener không hoạt động đúng,
  //  vì nó không xóa được các listener đã thêm trước đó (do khác tham chiếu).
  // Giải pháp:
  //  Sử dụng useCallback để đảm bảo handleVideoEnd giữ nguyên tham chiếu giữa các lần render.

  useEffect(() => {
    if (autoPlay !== false) {
      buttonRef.current?.classList.add(cx('active'));
      dotRef.current?.classList.add(cx('active'));
      // ?. Optional Chaning Nó giúp đảm bảo rằng bạn không gặp lỗi khi buttonRef.current là null hoặc undefined.

      InsideAllVideos.forEach((video) => {
        video.addEventListener('ended', handleVideoEnd);
        video.loop = false;
      });
    } else {
      buttonRef.current?.classList.remove(cx('active'));
      dotRef.current?.classList.remove(cx('active'));

      InsideAllVideos.forEach((video) => {
        video.removeEventListener('ended', handleVideoEnd);
        video.loop = true;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, currentVideo, InsideAllVideos, videoArray]);

  const handleAutoScroll = () => {
    setAutoPlay((pre) => !pre);
  };

  // Video Progress Bar
  const handleProgressFill = (e) => {
    e.stopPropagation()

    const progressBarWidth = progressBarRef.current.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;

    //Nếu bạn đang sử dụng sự kiện React như onClick hoặc onMouseMove, đối tượng sự kiện trong React
    //là một phiên bản tổng hợp (SyntheticEvent) chứ không phải là sự kiện gốc của trình duyệt
    // Để lấy giá trị offsetX, bạn cần truy cập vào sự kiện gốc (nativeEvent).
    let progressFillWidth = Math.floor((clickPosition / progressBarWidth) * 100);

    InsideAllVideos.forEach((video) => {
      video.currentTime = (video.duration / 100) * progressFillWidth;
    });

    setVideoProgress(progressFillWidth);
  };

  InsideAllVideos.forEach((video) => {
    video.addEventListener('timeupdate', () => {
      let percentTime = Math.floor((video.currentTime / video.duration) * 100);
      setVideoProgress(percentTime);
    });
  });

  useEffect(() => {
    InsideAllVideos.forEach((video) => {
      video.currentTime = 0;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideo])

  return (
    <>
      <div className={cx('wrapper')}>
        {videos.map((item, index) => (
          <div ref={(el) => (videoRefs.current[index] = el)} key={index} className={cx('video')}>
            {/* Video */}
            <Video data={item} videos={videoArray} videoList={InsideAllVideos} />

            {/* Volume */}
            <div className={cx('volume')}>
              {muted ? (
                <FontAwesomeIcon onClick={handleVolume} icon={faVolumeXmark} />
              ) : (
                <FontAwesomeIcon onClick={handleVolume} icon={faVolumeHigh} />
              )}
            </div>

            {/* More */}
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

            {/* Progress Bar */}
            <div onClick={handleProgressFill} ref={progressBarRef} className={cx('progress__bar')}>
              <div style={{ width: `${videoProgress}%` }} ref={progressFillRef} className={cx('progress__fill')}>
                <div ref={progressDotRef} className={cx('progress__dot')}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={cx('controls')}>
        <button disabled={isDisable} ref={upBtn} className={cx('control__button')} onClick={clickScrollUp}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <button className={cx('control__button')} onClick={clickScrollDown}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </>
  );
}

export default Home;

// el cho phép bạn tham chiếu trực tiếp đến phần tử DOM.
// videoRefs.current[index] cho phép bạn lưu trữ tham chiếu của từng phần tử video
// trong mảng videoRefs.current theo chỉ mục của nó, giúp bạn truy cập và thao tác với từng video dễ dàng.

// const index = videoRefs.current.indexOf(entry.target);
//  -> VideoRef.current: tham chiếu đến mảng chứa tất cả các video
//  -> entry.target: Lấy ra target của thẻ trong viewport
//  -> indexOf(): kiểm tra entry.target là index thứ mấy của VideoRef.curents

//   },[currentVideo, videoList]); điều kiện bên trong chỉ được gọi khi 1 trong 2 giá trị thay đổiđổi
