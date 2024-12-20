import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchResult() {
  return (
  <>
    <div className={cx('result')}>
      <FontAwesomeIcon className={cx('result__icon')} icon={faMagnifyingGlass} />
      <h1 className={cx('result__text')}>Xin chao cac ban</h1>
    </div>
  </>);
}

export default SearchResult;
