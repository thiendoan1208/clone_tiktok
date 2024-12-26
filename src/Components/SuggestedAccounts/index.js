import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <hr></hr>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('see__more--btn')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
