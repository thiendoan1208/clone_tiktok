import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Video from './Videos';
import styles from './Home.module.scss';
import * as request from '~/utils/httpsrequest';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
  const [videos, setVideo] = useState([]);
  const [pages, setPage] = useState(1);
  const [currentVideo, setCurrentVideo] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  const videoRefs = useRef([]);
  const upBtn = useRef();

  const videoArray = videoRefs.current;
  const videoList = videoArray.length;

  console.log(currentVideo);

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
            video.muted = true;
            video.play().catch((err) => {
              console.warn('Video đang bị lỗi, F5 lại trang web để sửa', err);
            });
            setCurrentVideo(videoRefs.current.indexOf(entry.target));
          } else if (!video && !entry.isIntersecting) {
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

  return (
    <>
      <div className={cx('wrapper')}>
        {videos.map((item, index) => (
          <div ref={(el) => (videoRefs.current[index] = el)} key={index} className={cx('video')}>
            <Video data={item} />
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
