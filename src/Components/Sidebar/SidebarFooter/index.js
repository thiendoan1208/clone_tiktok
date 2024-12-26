import classNames from 'classnames/bind';
import styles from './SidebarFooter.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SidebarFooter() {
  return (
    <footer>
      <hr></hr>
      <div className={cx('wrapper')}>
        <div style={{ backgroundImage: `url(${images.tiktokEffect})` }} className={cx('tiktok__effect')}>
          <p> Create Tiktok effects, get a reward</p>
        </div>
        <div className={cx('about')}>
          <span>Company</span>
          <span>Program</span>
          <span>Term & Policies</span>
          <span>&copy; 2024 Tiktok</span>
        </div>
      </div>
      <div className={cx('tiktok__effect--wrapper')}> 
      <img className={cx('tiktok__effect--icon')} src={images.tiktokEffectIcon} alt='tiktok effect'></img>
      </div>
    </footer>
  );
}

export default SidebarFooter;
