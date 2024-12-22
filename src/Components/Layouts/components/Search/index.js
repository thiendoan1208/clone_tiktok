import classNames from 'classnames/bind';
import HeadlesTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglassHalf, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { use, useState, useRef, useEffect } from 'react';

import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import { Wrapper as ProppersWrapper } from '~/Components/Proppers';
import SearchResult from '~/Components/SearchResult';
import AccountItem from '~/Components/AccountItem';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Searh() {
  const [result, setResult] = useState([]);
  const [searchValue, setsearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const debounced = useDebounce(searchValue, 500)

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced) {
      setResult([])
      return;
    }

    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false)
      });
  }, [debounced]);

  const handleClear = () => {
    setsearchValue('');
    inputRef.current.focus();
    setResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlesTippy
      interactive={true}
      visible={showResult && result.length > 0}
      placement="bottom"
      render={(attrs) => (
        <div className={cx('search__result')} tabIndex="-1" {...attrs}>
          <ProppersWrapper>
            <SearchResult data={searchValue} />
            <h1 className={cx('account')}>Accounts</h1>
            {result.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
            <h1 className={cx('all__result')}>
              View all results for "<span>{searchValue}</span>"
            </h1>
          </ProppersWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('header__search')}>
        <input
          onFocus={() => {
            setShowResult(true);
          }}
          ref={inputRef}
          value={searchValue}
          className={cx('search__input')}
          placeholder="Search"
          onChange={(e) => setsearchValue(e.target.value.trimStart())}
        />

        {!!searchValue && (
          <button className={cx('search__clear')} onClick={handleClear}>
             {loading ? <FontAwesomeIcon className={cx('search__loading')} icon={faHourglassHalf} /> : <FontAwesomeIcon icon={faCircleXmark} />}
          </button>
        )}

        <button className={cx('search__find')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlesTippy>
  );
}

export default Searh;
