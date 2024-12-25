import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('inner__con')}>
          <Sidebar />
          <div className={cx('content')}>
          {children}
          </div>
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

