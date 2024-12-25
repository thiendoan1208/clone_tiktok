import classNames from 'classnames/bind';
import HeadlesTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faHourglassHalf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

import * as request from '~/utils/httpsrequest';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
import { Wrapper as ProppersWrapper } from '~/Components/Proppers';
import SearchResult from '~/Components/SearchResult';
import AccountItem from '~/Components/AccountItem';
import { useDebounce } from '~/hooks';
import AccountListMemo from '~/Components/AccountListMemo';

const cx = classNames.bind(styles);

function Searh() {
  const [result, setResult] = useState([]);
  const [searchValue, setsearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue) {
      setResult([]);
      return;
    }

    setLoading(true);

    request
      .get('users/search?', {
        params: {
          q: debouncedValue,
          type: 'less',
        },
      })
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debouncedValue]);

  const handleClear = () => {
    setsearchValue('');
    inputRef.current.focus();
    setResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div>
      <HeadlesTippy
        interactive
        visible={showResult && result.length > 0}
        placement="bottom"
        render={(attrs) => (
          <div className={cx('search__result')} tabIndex="-1" {...attrs}>
            <ProppersWrapper>
              <SearchResult data={searchValue} />
              <h1 className={cx('account')}>Accounts</h1>
              <AccountListMemo data={result} />
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
              {loading ? (
                <FontAwesomeIcon className={cx('search__loading')} icon={faHourglassHalf} />
              ) : (
                <FontAwesomeIcon icon={faCircleXmark} />
              )}
            </button>
          )}

          <button className={cx('search__find')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlesTippy>
    </div>
  );
}

export default Searh;
