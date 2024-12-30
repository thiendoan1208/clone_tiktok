import classNames from 'classnames/bind';
import styles from './StatusBar.module.scss';
import ShareOverLay from '../ShareOverLay';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import StatusAvatar from './StatusAvatar';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function StatusBar({ data }) {
  const followBtn = useRef();
  const likeBtn = useRef();

  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(data.popular_video.likes_count);

  const handleFollow = () => {
    if (data.is_followed === true || follow === true) {
      setFollow(false);
      followBtn.current.classList.add(cx('followed'));
    } else {
      setFollow(true);
      followBtn.current.classList.remove(cx('followed'));
    }
  };

  const handleLike = () => {
    if (data.popular_video.is_liked === true || like === true) {
      setLike(false);
      likeBtn.current.classList.remove(cx('isLiked'));
      setCount((pre) => pre - 1);
    } else {
      setLike(true);
      likeBtn.current.classList.add(cx('isLiked'));
      setCount((pre) => pre + 1);
    }
  };

  return (
    <>
      <div className={cx('avatar')}>
        <StatusAvatar data={data} isFollow={follow} />
        <div ref={followBtn} className={cx('follow__btn')} onClick={handleFollow}>
          {data.is_followed || follow ? (
            <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
          ) : (
            <FontAwesomeIcon className={cx('icon')} icon={faPlus} />
          )}
        </div>
      </div>

      <div className={cx('react')}>
        <div ref={likeBtn} className={cx('react__btn')} onClick={handleLike}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <span className={cx('number')}>{count}</span>
      </div>

      <div className={cx('react')}>
        <div className={cx('react__btn')}>
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <span className={cx('number')}>{data.popular_video.comments_count}</span>
      </div>

      <div className={cx('react')}>
        <div className={cx('react__btn')}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <span className={cx('number')}>0</span>
      </div>

      <ShareOverLay data={data} />
    </>
  );
}

StatusBar.propTypes = {
  data: PropTypes.node.isRequired,
};

export default StatusBar;
