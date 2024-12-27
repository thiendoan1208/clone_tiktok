import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Video from './Videos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {

  
  return (
    <div className={cx('wrapper')}>
      <div className={cx('video')}>
        <Video />
      </div>
      <div className={cx('controls')}>
        <button className={cx('control__button')}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>

        <button className={cx('control__button')}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
}

export default Home;
