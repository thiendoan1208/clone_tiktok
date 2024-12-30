import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Buttons from '~/Components/Buttons';
import styles from './StatusAvatar.module.scss';
import { Wrapper } from '~/Components/Proppers';

const cx = classNames.bind(styles);

function StatusAvatar({ data, isFollow }) {

  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <Wrapper>
          <div className={cx('preview')}>
            <header className={cx('header')}>
              <img className={cx('avatar')} src={data.avatar} alt="avartar" />
              {data.is_followed || isFollow ? (
                <Buttons  className={cx('following')} outline>
                  Following
                </Buttons>
              ) : (
                <Buttons  primary>
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
                <span>{data.followers_count}</span>
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
      <Tippy interactive  delay={[800, 500]} placement="bottom-start" render={renderPreview}>
        <img className={cx('avatar__user')} src={data.avatar} alt="User_avatar" />
      </Tippy>
    </div>
  );
}

StatusAvatar.propTypes = {
  data: PropTypes.node.isRequired,
};

export default StatusAvatar;
