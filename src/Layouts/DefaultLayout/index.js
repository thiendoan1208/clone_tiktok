import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from '../../Components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const currentUser = false;

  return (
    <div className={cx('wrapper')}>
      <Header currentUser={currentUser} />
      <div className={cx('container')}>
        <div className={cx('inner__con')}>
          <Sidebar currentUser={currentUser} />
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
