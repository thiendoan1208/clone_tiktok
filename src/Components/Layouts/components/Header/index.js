import classNames from 'classnames/bind';
import HeadlesTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faHourglassHalf,
  faMagnifyingGlass,
  faQrcode,
  faX,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faMoon,
  faCloudUpload,
  faEnvelope,
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
import { Wrapper as ProppersWrapper } from '~/Components/Proppers';
import SearchResult from '~/Components/SearchResult';
import AccountItem from '~/Components/AccountItem';
import Buttons from '~/Components/Buttons';
import Menu from '~/Components/Proppers/Menu';

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
  const [result, setResult] = useState([]);
  const [click, setClick] = useState(false);
  const fixedBtnRef = useRef();
  const currentUser = true;

  // Hanle Logic
  const handleClickforGetAppBtn = () => {
    const getAppbtn = fixedBtnRef.current;

    if (getAppbtn.innerText == 'Get app') {
      getAppbtn.classList.add(cx('hidden'));

      setTimeout(() => {
        getAppbtn.classList.remove(cx('hidden'));
        setClick(true);
      }, 100);
    } else {
      getAppbtn.classList.add(cx('hidden'));

      setTimeout(() => {
        getAppbtn.classList.remove(cx('hidden'));
        setClick(false);
      }, 100);
    }
  };

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
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        <HeadlesTippy
          interactive={true}
          visible={result.length > 0}
          render={(attrs) => (
            <div className={cx('search__result')} tabIndex="-1" {...attrs}>
              <ProppersWrapper>
                <SearchResult />
                <h1 className={cx('account')}>Accounts</h1>
                <AccountItem />
                <h1 className={cx('all__result')}>
                  View all results for "<span>meo</span>"{' '}
                </h1>
              </ProppersWrapper>
            </div>
          )}
        >
          <div className={cx('header__search')}>
            <input className={cx('search__input')} placeholder="Search" />
            <button className={cx('search__clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('search__loading')} icon={faHourglassHalf} />

            <button className={cx('search__find')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlesTippy>

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
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Buttons text>Upload</Buttons>
              <Buttons primary>Login</Buttons>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {currentUser ? (
              <div className={cx('user__avatar')}>
                <img
                  src="https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/c1e04ca453189d9e40ddb5cca3e5b78c.jpeg?lk3s=a5d48078&nonce=32733&refresh_token=cfe94c09624a921c4bbd3a3c8bd7d3c1&x-expires=1734739200&x-signature=EAtrZh%2BQr8xKOJGSiZ4WJfz8buU%3D&shp=a5d48078&shcp=81f88b70"
                  alt="User avatar"
                  className={cx('avatar')}
                />
              </div>
            ) : (
              <button className={cx('more__btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>

        <div onClick={handleClickforGetAppBtn} className={cx('getapp__btn')}>
          <button ref={fixedBtnRef} className={cx('fixed__btn')}>
            {!click ? (
              <>
                <FontAwesomeIcon className={cx('qr__icon')} icon={faQrcode} />
                Get app
              </>
            ) : (
              <FontAwesomeIcon icon={faX} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
