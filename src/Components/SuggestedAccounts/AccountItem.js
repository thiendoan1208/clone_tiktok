import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper } from '../Proppers';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <Wrapper>
          <AccountPreview />
        </Wrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account__item')}>
          <img
            className={cx('user__img')}
            src="https://i.pinimg.com/736x/91/5b/1b/915b1bf025b6b08d1de5ca7f9b92a896.jpg"
            alt=""
          />
          <div className={cx('item__info')}>
            <p className={cx('nickname')}>
              <strong>embemeow007</strong>
              <FontAwesomeIcon className={cx('tick')} icon={faCircleCheck} />
            </p>
            <p className={cx('username')}>Nguyen Ngoc Meow</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
