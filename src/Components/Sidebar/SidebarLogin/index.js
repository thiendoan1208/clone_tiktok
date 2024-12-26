import classNames from 'classnames/bind';
import styles from './SidebarLogin.module.scss';
import Buttons from '~/Components/Buttons';

const cx = classNames.bind(styles);

function SidebarLogin() {
  return (
    <div className={cx('wrapper')}>
      <hr></hr>
      <div className={cx('content')}>
        <p>Đăng nhập để follow các <br></br> tác giả, thích video và <br></br> xem bình luận.</p>
        <Buttons className={cx('button')} outline>Login</Buttons>
      </div>
    </div>
  );
}

export default SidebarLogin;
