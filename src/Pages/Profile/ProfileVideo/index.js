import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faVideo, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';

import styles from './ProfileVideo.module.scss';

const cx = classNames.bind(styles);

function ProfileVideo() {
  const [underlineWidth, setUnderlineWidth] = useState(138);
  const [underLineLeft, setUnderlineLeft] = useState(0);

  const navBarRef = useRef();
  const categoryRef = useRef();
  const underLineRef = useRef();

  useEffect(() => {
    const navBarItem = navBarRef.current.querySelectorAll('div');
    navBarItem.forEach((element, index) => {
      element.addEventListener('click', () => {
        navBarItem.forEach((item) => {
          item.classList.remove(cx('active'));
        });
        navBarItem[index].classList.add(cx('active'));
        setUnderlineWidth(element.offsetWidth);
        setUnderlineLeft(element.offsetLeft);
      });
    });
  });

  useEffect(() => {
    const navBarItem = navBarRef.current.querySelectorAll('div');
    navBarItem.forEach((element) => {
      element.addEventListener('mouseover', () => {
        setUnderlineLeft(element.offsetLeft);
        setUnderlineWidth(element.offsetWidth)
      });
    });
  });

  useEffect(() => {
    const activeItem = navBarRef.current.querySelector(`.${cx('active')}`);
    // Viết class cx như vậy để khi trả về kết quả sẽ là .active thì mới querySelector được
    // Nếu không có sẽ trả về active thì không thể queryselector được tới
    const navBarItem = navBarRef.current.querySelectorAll('div');
    navBarItem.forEach((element) => {
      element.addEventListener('mouseleave', () => {
        setUnderlineLeft(activeItem.offsetLeft);
        setUnderlineWidth(activeItem.offsetWidth)
      });
    });
  });

  useEffect(() => {
    const category = categoryRef.current.querySelectorAll('div');
    category.forEach((element, index) => {
      element.addEventListener('click', () => {
        category.forEach((item) => {
          item.classList.remove(cx('chose'));
        });
        category[index].classList.add(cx('chose'));
      });
    });
  });

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div ref={navBarRef} className={cx('navbar')}>
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

          <div className={cx('line__nav')}>
            <div
              style={{ width: `${underlineWidth}px`, left: `${underLineLeft}px` }}
              ref={underLineRef}
              className={cx('underline__nav')}
            ></div>
          </div>
        </div>

        <div className={cx('category__wrapper')}>
          <div ref={categoryRef} className={cx('category')}>
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
      <div className={cx('line')}></div>

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
