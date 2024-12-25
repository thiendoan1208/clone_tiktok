// import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
  // return React.Children.only(children);
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyles;

// React.Children.only : chỉ cho phép truyền duy nhất 1 children 


