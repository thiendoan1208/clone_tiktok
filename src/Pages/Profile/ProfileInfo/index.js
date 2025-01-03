import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare, faShare, faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './ProfileInfo.module.scss';
import Buttons from '~/Components/Buttons';
import ProfileInfoFollow from './ProfileInfoFollow';

const cx = classNames.bind(styles);

function ProfileInfo() {
  return (
    <div className={cx('wrapper')}>
      {/* Avatar */}
      <div className={cx('img')}>
        <img src={images.userAvatar} alt="" />
      </div>

      {/* Information */}
      <div className={cx('infor')}>
        <div className={cx('nickname')}>
          <h1>doan.thien.bhhh</h1>
          <h2>Doan Thien</h2>
        </div>

        {/* Controls */}
        <div className={cx('controls')}>
          <Buttons primary className={cx('primary__btn')}>
            Edit Profile
          </Buttons>

          <Buttons className={cx('edit__btn')}>Promote post</Buttons>

          <Buttons className={cx('edit__btn')}>
            <FontAwesomeIcon icon={faGear} />
          </Buttons>

          <Buttons className={cx('edit__btn')}>
            <FontAwesomeIcon icon={faShare} />
          </Buttons>
        </div>

        {/* Follow */}
        <ProfileInfoFollow />

        {/* Bio */}
        <div className={cx('bio')}>
          <span>No bio yet.</span>
        </div>
      </div>

      {/* Edit Profile Overlay */}
      <div className={cx('overlay')} tabIndex={-1}>
        <div className={cx('edit__profile')}>
          {/* Header */}
          <div className={cx('header')}>
            <h1 className={cx('header__text')}>Edit Profile</h1>
            <FontAwesomeIcon className={cx('header_X')} icon={faX} />
          </div>
          {/* Main */}
          <div className={cx('main')}>
            {/* Profile photo */}
            <div className={cx('profile__photo', 'all__section')}>
              <div className={cx('aside')}>
                <span className={cx('aside__text')}>Profile Photo</span>
              </div>
              <div className={cx('photo__section')}>
                <div className={cx('pre__photo')}>
                  <img src="https://i.pinimg.com/736x/cd/c9/8b/cdc98beb5e2ec6518b5fd3852372351b.jpg" alt="" />
                  <div className={cx('edit__img')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
              </div>
            </div>

            {/* Username */}
            <div className={cx('username', 'all__section')}>
              <div className={cx('aside')}>
                <span className={cx('aside__text')}>Username</span>
              </div>
              <div className={cx('username__section')}>
                <div className={cx('username__change')}>
                  <input className={cx('username__input')} type="text" placeholder="Username" />
                  <div className={cx('username__rule')}>
                    <span className={cx('username__link')}>www.tiktok.com/@doan.thien.bhhh</span>
                    <span className={cx('rule')}>
                      Usernames can only contain letters, numbers, underscores, and periods. Changing your username will
                      also change your profile link.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className={cx('name', 'all__section')}>
              <div className={cx('aside')}>
                <span className={cx('aside__text')}>Name</span>
              </div>
              <div className={cx('name__section')}>
                <div className={cx('name__change')}>
                  <input className={cx('name__input')} type="text" placeholder="Name" />
                  <div className={cx('name__rule')}>
                    <span className={cx('rule')}>Your nickname can only be changed once every 7 days.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className={cx('change__bio', 'all__section')}>
              <div className={cx('aside')}>
                <span className={cx('aside__text')}>Bio</span>
              </div>
              <div className={cx('bio__section')}>
                <div className={cx('bio__change')}>
                  <textarea className={cx('bio__input')} type="text" placeholder="Bio" />
                  <div className={cx('bio__rule', 'text__counter')}>
                    <span className={cx('rule')}>
                      <span className={cx('counter')}>0</span>/80
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Save Area */}
            <div className={cx('save__area')}>
              <div className={cx('button__choice')}>
                <Buttons outline className={cx('cancel')}>
                  Cancel
                </Buttons>
                <Buttons outline className={cx('save')}>
                  Save
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
