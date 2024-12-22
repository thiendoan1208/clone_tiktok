import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import DefaultImage from '../Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <DefaultImage className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.nickname}</span>
          {(data.tick = true ? <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} /> : <span></span>)}
        </p>
        <p className={cx('username')}>{data.full_name}</p>
      </div>
    </Link>
  );
}

export default AccountItem;
