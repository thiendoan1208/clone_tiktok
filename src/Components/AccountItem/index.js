import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p9-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/c1e04ca453189d9e40ddb5cca3e5b78c.jpeg?lk3s=a5d48078&nonce=32733&refresh_token=cfe94c09624a921c4bbd3a3c8bd7d3c1&x-expires=1734739200&x-signature=EAtrZh%2BQr8xKOJGSiZ4WJfz8buU%3D&shp=a5d48078&shcp=81f88b70' alt='avatar' />
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>embemeo07</span>
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </p>
            <p className={cx('username')}>nguyenngocmeow</p>
        </div>
  </div>;
}

export default AccountItem;
