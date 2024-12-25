import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      offset={[10, 10]}
      placement="bottom-start"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <div className={cx('content__wrapper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            <div className={cx('menu__content')}>{renderItem()}</div>
          </div>
        </div>
      )}
      onHide={() => {
        setHistory((pre) => pre.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.bool,
  hideOnClick: PropTypes.func,
};

export default Menu;
