import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGear, faPenToSquare, faShare, faX } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './ProfileInfo.module.scss';
import Buttons from '~/Components/Buttons';
import ProfileInfoFollow from './ProfileInfoFollow';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function ProfileInfo() {
  const [editProfile, setEditProfile] = useState(false);
  const [preImg, setPreImg] = useState(images.userAvatar);
  const [originalImg, setOriginalImg] = useState(preImg);
  const [usernameInput, setUsernameInput] = useState('doan.thien.bhhh');
  const [originalUserName, setOriginalUserName] = useState(usernameInput);
  const [usernameCounter, setUsernameCounter] = useState(usernameInput.length);

  const overlayRef = useRef();
  const preImgInputRef = useRef();
  const preImgRef = useRef();
  const usernameInputRef = useRef();
  const usernameErrorNotiRef = useRef();
  const correctIconRef = useRef();
  const usernameMaxErrorNotiRef = useRef();

  const saveBtnRef = useRef();

  // handle open edit profile menu
  const handleEditProfile = () => {
    if (editProfile === true) {
      setEditProfile(false);
      overlayRef.current.classList.remove(cx('active'));
      // Profile Img
      setPreImg(originalImg);
      // Username change
      setUsernameInput(originalUserName);
    } else {
      setEditProfile(true);
      overlayRef.current.classList.add(cx('active'));
    }
  };

  // handle preWatch image
  const handlepreImg = () => {
    const file = preImgInputRef.current.files[0];

    if (file) {
      let preImgSrc = preImgRef.current.src;
      preImgSrc = URL.createObjectURL(file);
      setPreImg(preImgSrc);
    }
  };

  // handle UserName change
  const handleValidateUsername = (e) => {
    let value = e.target.value.trimStart();
    const hasSpace = value.includes(' ');
    setUsernameInput(value);

    if (/[a-z]/.test(value) || /[A-Z]/.test(value) || /[0-9]/.test(value)) {
      correctIconRef.current.classList.add(cx('correct'));
      usernameInputRef.current.classList.remove(cx('error'));
      usernameErrorNotiRef.current.classList.remove(cx('error'));
    } else {
      correctIconRef.current.classList.remove(cx('correct'));
      usernameInputRef.current.classList.add(cx('error'));
      usernameErrorNotiRef.current.classList.add(cx('error'));
    }

    if ((value.length === 0) & (value.length <= 24)) {
      correctIconRef.current.classList.remove(cx('correct'));
      usernameInputRef.current.classList.add(cx('error'));
      usernameErrorNotiRef.current.classList.add(cx('error'));
      usernameMaxErrorNotiRef.current.classList.remove(cx('error'));
    } else if (value.length > 24) {
      correctIconRef.current.classList.remove(cx('correct'));
      usernameInputRef.current.classList.add(cx('error'));
      usernameErrorNotiRef.current.classList.remove(cx('error'));
      usernameMaxErrorNotiRef.current.classList.add(cx('error'));
    } else {
      correctIconRef.current.classList.add(cx('correct'));
      usernameInputRef.current.classList.remove(cx('error'));
      usernameErrorNotiRef.current.classList.remove(cx('error'));
    }

    if (hasSpace || value.length === 0) {
      correctIconRef.current.classList.remove(cx('correct'));
      usernameInputRef.current.classList.add(cx('error'));
      usernameErrorNotiRef.current.classList.add(cx('error'));
    } else {
      correctIconRef.current.classList.add(cx('correct'));
      usernameInputRef.current.classList.remove(cx('error'));
      usernameErrorNotiRef.current.classList.remove(cx('error'));
    }
  };
  // handle Name change

  // handle Bio change

  // hanle Save changes

  useEffect(() => {
    if (preImg === originalImg) {
      saveBtnRef.current.classList.remove(cx('active'));
    } else {
      saveBtnRef.current.classList.add(cx('active'));
    }
  }, [originalImg, preImg, usernameCounter, usernameInput.length]);

  useEffect(() => {
    if (usernameCounter === usernameInput.length || usernameErrorNotiRef.current.classList.contains(cx('error'))) {
      saveBtnRef.current.classList.remove(cx('active'));
    } else {
      saveBtnRef.current.classList.add(cx('active'));
    }
  }, [usernameCounter, usernameInput.length]);

  const saveChange = () => {
    // Overlay
    setEditProfile(false);
    // Profile Img
    setOriginalImg(preImg);
    // Username change
    setOriginalUserName(usernameInput);
    setUsernameCounter(usernameInput.length);

    overlayRef.current.classList.remove(cx('active'));
  };

  return (
    <div className={cx('wrapper')}>
      {/* Avatar */}
      <div className={cx('img')}>
        <img src={preImg} alt="" />
      </div>

      {/* Information */}
      <div className={cx('infor')}>
        <div className={cx('nickname')}>
          <h1>{usernameInput}</h1>
          <h2>Doan Thien</h2>
        </div>

        {/* Controls */}
        <div className={cx('controls')}>
          <Buttons onClick={handleEditProfile} primary className={cx('primary__btn')}>
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
      <div ref={overlayRef} className={cx('overlay')} tabIndex={-1}>
        <div className={cx('edit__profile')}>
          {/* Header */}
          <div className={cx('header')}>
            <h1 className={cx('header__text')}>Edit Profile</h1>
            <FontAwesomeIcon onClick={handleEditProfile} className={cx('header_X')} icon={faX} />
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
                  <img ref={preImgRef} src={preImg} alt="" />
                  <label htmlFor="imgPre" className={cx('edit__img')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </label>
                  <input ref={preImgInputRef} onChange={handlepreImg} type="file" hidden id="imgPre" />
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
                  <input
                    onChange={handleValidateUsername}
                    ref={usernameInputRef}
                    className={cx('username__input')}
                    type="text"
                    placeholder="Username"
                    value={usernameInput}
                  />
                  {/* Error noti when there is no username */}
                  <span ref={usernameErrorNotiRef} className={cx('error__no-username')}>
                    This username isn’t available. Please enter a new one.
                  </span>
                  {/* Error when > 24 */}
                  <span ref={usernameMaxErrorNotiRef} className={cx('error__max-username')}>
                    Maximum 24 characters.
                  </span>
                  {/* Correct when user enter username */}
                  <FontAwesomeIcon ref={correctIconRef} className={cx('username__check--icon')} icon={faCheck} />

                  <div className={cx('username__rule')}>
                    <span className={cx('username__link')}>{`www.tiktok.com/@${usernameInput}`}</span>
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
                  <input className={cx('name__input')} type="text" placeholder="Name(Incomplete)" />
                  <div className={cx('name__rule')}>
                    <span className={cx('rule')}>Your nickname can only be changed once every 7 days.</span>
                    {/* error when name > 30 */}
                    {/* <span className={cx('error__name')}>Maximum 30 characters</span>  */}
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
                  <textarea className={cx('bio__input')} type="text" placeholder="Bio(Incomplete)" />
                  <div className={cx('bio__rule', 'text__counter')}>
                    <span className={cx('rule')}>
                      <span className={cx('counter')}>0</span>/80
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Save Area */}
          <div className={cx('save__area')}>
            <div className={cx('button__choice')}>
              <Buttons onClick={handleEditProfile} outline className={cx('cancel')}>
                Cancel
              </Buttons>
              <Buttons ref={saveBtnRef} onClick={saveChange} outline className={cx('save')}>
                Save
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
