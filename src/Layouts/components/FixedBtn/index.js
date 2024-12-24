import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faX } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import styles from './FixedBtn.module.scss';

const cx = classNames.bind(styles);

function FixedBtn() {
  const [click, setClick] = useState(false);
  const fixedBtnRef = useRef();

  const handleClickforGetAppBtn = () => {
    const getAppbtn = fixedBtnRef.current;

    if (getAppbtn.innerText == 'Get app') {
      getAppbtn.classList.add(cx('hidden'));

      setTimeout(() => {
        getAppbtn.classList.remove(cx('hidden'));
        setClick(true);
      }, 100);
    } else {
      getAppbtn.classList.add(cx('hidden'));

      setTimeout(() => {
        getAppbtn.classList.remove(cx('hidden'));
        setClick(false);
      }, 100);
    }
  };

  return (
    <div onClick={handleClickforGetAppBtn} className={cx('getapp__btn')}>
      <button ref={fixedBtnRef} className={cx('fixed__btn')}>
        {!click ? (
          <>
            <FontAwesomeIcon className={cx('qr__icon')} icon={faQrcode} />
            Get app
          </>
        ) : (
          <FontAwesomeIcon icon={faX} />
        )}
      </button>
    </div>
  );
}

export default FixedBtn;
