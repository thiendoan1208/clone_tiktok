import classNames from 'classnames/bind';
import styles from './ShareOverLay.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLink, faPaperPlane, faRotate, faShare, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function ShareOverLay({ data }) {
  const linkRef = useRef();
  const copyBtnRef = useRef();
  const shareOverlayRef = useRef();
  const copyNotiRef = useRef();

  const [active, setActive] = useState(false);

  // Copy Video Link
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(linkRef.current.innerText);
      shareOverlayRef.current.classList.remove(cx('active'));
      copyNotiRef.current.classList.add(cx('animation'));
      setTimeout(() => {
        copyNotiRef.current.classList.remove(cx('animation'));
      },3000)
    } catch (err) {
      console.log(err);
    }
  };

  // On/Off ShareOverlay
  const hanleShareOverlay = () => {
    if (active === true) {
      setActive(false);
      shareOverlayRef.current.classList.remove(cx('active'));
    } else {
      setActive(true);
      shareOverlayRef.current.classList.add(cx('active'));
    }
  };

  return (
    <>
      <div className={cx('react')}>
        <div onClick={hanleShareOverlay} className={cx('react__btn')}>
          <FontAwesomeIcon icon={faShare} />
        </div>
        <span className={cx('number')}>{data.popular_video.shares_count}</span>
      </div>

      <div ref={copyNotiRef} className={cx('copy__noti')}>
        <span>Copied</span>
      </div>

      <div ref={shareOverlayRef} className={cx('share__overlay')}>
        <div className={cx('wrapper')}>
          <div className={cx('inner__wrapper')}>
            <header>
              <span className={cx('header')}>Share to</span>
              <FontAwesomeIcon onClick={hanleShareOverlay} className={cx('header__icon')} icon={faX} />
            </header>

            <div className={cx('sub__header')}>
              <span ref={linkRef} className={cx('video__link')}>
                {data.popular_video.file_url}
              </span>
              <div ref={copyBtnRef} className={cx('copy__icon')} onClick={handleCopy}>
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>

            <div className={cx('main__content')}>
              <Link to="" className={cx('choices')}>
                <div className={cx('inline__choice')}>
                  <div className={cx('icon__box')}>
                    <FontAwesomeIcon icon={faRotate} />
                  </div>
                  <span className={cx('icon__name')}>Repost</span>
                </div>
              </Link>

              <Link to="" className={cx('choices')}>
                <div className={cx('inline__choice')}>
                  <div className={cx('icon__box', 'send')}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  <span className={cx('icon__name')}>Send to Friends</span>
                </div>
              </Link>

              <Link to="" className={cx('choices')}>
                <div className={cx('inline__choice')}>
                  <div className={cx('icon__box', 'embed')}>
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <span className={cx('icon__name')}>Embed</span>
                </div>
              </Link>

              <Link to="" className={cx('choices')}>
                <div className={cx('inline__choice')}>
                  <div className={cx('icon__box', 'whatapp')}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <span className={cx('icon__name')}>WhatsApp</span>
                </div>
              </Link>

              <Link to="" className={cx('choices')}>
                <div className={cx('inline__choice')}>
                  <div className={cx('icon__box', 'facebook')}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <span className={cx('icon__name')}>Facebook</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ShareOverLay.propTypes = {
  data: PropTypes.node.isRequired,
};

export default ShareOverLay;
