import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchResult() {
  return (
  <Fragment>
    <div className={cx('result')}>
      <FontAwesomeIcon className={cx('result__icon')} icon={faMagnifyingGlass} />
      <h1 className={cx('result__text')}>Xin chao cac ban</h1>
    </div>
  </Fragment>);
}

export default SearchResult;
