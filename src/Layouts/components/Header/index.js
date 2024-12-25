import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faMoon,
  faCloudUpload,
  faUser,
  faCoins,
  faHouse,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Buttons from '~/Components/Buttons';
import Menu from '~/Components/Proppers/Menu';
import DefaultImage from '~/Components/Images';
import Search from '~/Layouts/components/Search';
import FixedBtn from '../FixedBtn';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
    children: {
      title: 'Dark mode',
      data: [
        {
          type: 'mode',
          code: 'deviceTheme',
          title: 'Use device theme',
        },
        {
          type: 'mode',
          code: 'Dark',
          title: 'Dark mode',
        },
        {
          type: 'mode',
          code: 'Light',
          title: 'Light mode',
        },
      ],
    },
  },
];

function Header() {
  const currentUser = true;

  // Hanle Logic

  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case 'language':
        // Handle
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faHouse} />,
      title: 'Creator tools',
      to: '/creator-tools',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Log out',
      to: '/',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner__wrapper')}>
        <div className={cx('header__logo')}>
          <Link className={cx('logo__link')} to={config.routes.home}>
            <img src={images.logo.default} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx('header__action')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('upload__btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <button className={cx('message__btn')}>
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                  <span className={cx('message__noti')}>99+</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Buttons text>Upload</Buttons>
              <Buttons primary to='/'>Login</Buttons>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {currentUser ? (
              <DefaultImage className={cx('user__avatar')} src={images.userAvatar} alt="User avatar" />
            ) : (
              <button className={cx('more__btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>

      <FixedBtn />
    </header>
  );
}

export default Header;

// 18:39
