import classNames from 'classnames/bind';
import styles from './StatusBar.module.scss';
import ShareOverLay from '../ShareOverLay';
import Buttons from '~/Components/Buttons';
import { Wrapper } from '~/Components/Proppers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faHeart, faCommentDots, faBookmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function StatusBar({ data }) {
  const followBtn = useRef();
  const likeBtn = useRef();

  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(data.popular_video.likes_count);
  const [followCount, setFollowCount] = useState(data.followers_count)

  const handleFollow = (e) => {
    e.stopPropagation();
    if (data.is_followed === true || follow === true) {
      setFollow(false);
      followBtn.current.classList.add(cx('followed'));
      setFollowCount(pre => pre - 1)
    } else {
      setFollow(true);
      followBtn.current.classList.remove(cx('followed'));
      setFollowCount(pre => pre + 1)
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    if (data.popular_video.is_liked === true || like === true) {
      setLike(false);
      likeBtn.current.classList.remove(cx('isLiked'));
      setLikeCount((pre) => pre - 1);
    } else {
      setLike(true);
      likeBtn.current.classList.add(cx('isLiked'));
      setLikeCount((pre) => pre + 1);
    }
  };

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  // Avatar
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <Wrapper>
          <div className={cx('preview')}>
            <header className={cx('header')}>
              <img className={cx('avatar')} src={data.avatar} alt="avartar" />
              {data.is_followed || follow ? (
                <Buttons onClick={handleFollow} className={cx('following')} outline>
                  Following
                </Buttons>
              ) : (
                <Buttons onClick={handleFollow} primary>
                  Follow
                </Buttons>
              )}
            </header>
            <div className={cx('body')}>
              <p className={cx('nickname')}>
                <strong>{data.nickname}</strong>
                {data.tick ? <FontAwesomeIcon className={cx('tick')} icon={faCircleCheck} /> : <span></span>}
              </p>
              <p className={cx('username')}>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <div className={cx('footer')}>
              <div className={cx('analysis')}>
                <span>{followCount}</span>
                <p>Followers</p>
              </div>
              <div className={cx('analysis')}>
                <span>{data.likes_count}</span>
                <p>Likes</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  };

  return (
    <div>
      <div className={cx('avatar')}>
        {/* Avatar */}
        <div>
          <Tippy interactive delay={[800, 500]} placement="bottom-start" render={renderPreview}>
            <img className={cx('avatar__user')} src={data.avatar} alt="User_avatar" />
          </Tippy>
        </div>

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
        <span className={cx('number')}>{likeCount}</span>
      </div>

      <div className={cx('react')}>
        <div className={cx('react__btn')} onClick={handleStopPropagation}>
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <span className={cx('number')}>{data.popular_video.comments_count}</span>
      </div>

      <div className={cx('react')}>
        <div className={cx('react__btn')} onClick={handleStopPropagation}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <span className={cx('number')}>0</span>
      </div>

      <ShareOverLay data={data} />
    </div>
  );
}

StatusBar.propTypes = {
  data: PropTypes.node.isRequired,
};

export default StatusBar;
