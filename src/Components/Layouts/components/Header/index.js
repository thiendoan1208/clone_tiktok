import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglassHalf, faMagnifyingGlass, faQrcode, faX, faEllipsisVertical, faLanguage, faCircleQuestion, faMoon } from '@fortawesome/free-solid-svg-icons';

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
      switch(MenuItem.type) {
        case 'language':
          // Handle
          break;
        default:
      }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner__wrapper')}>
        <div className={cx('header__logo')}>
          <img src={images.logo.default} alt="Tiktok" />
        </div>

        <Tippy
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
        ></Tippy>
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

        <div className={cx('header__action')}>
          <Buttons text>Upload</Buttons>
          <Buttons primary>Login</Buttons>

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
          <Menu items={MENU_ITEM} onChange={handleMenuChange}>
            <button className={cx('more__btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
