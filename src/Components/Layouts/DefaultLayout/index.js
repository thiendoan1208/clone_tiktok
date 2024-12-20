import classNames from 'classnames/bind';

import Header from '~/Components/Layouts/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles)

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

export default DefaultLayout;
