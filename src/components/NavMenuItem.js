'use strict';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const NavMenuItem = ({ active, index, onClick, menuName, pathName }) => {

  const handleClick = () => {
    onClick(index, true);
  };

  const classes = classNames('topnav-item', {
    'is-active': active
  });

  return (
    <a
      href={`#${pathName}`}
      className={classes}
      onClick={handleClick}
    > {menuName} </a>
  );
};

NavMenuItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  menuName: PropTypes.string,
  pathName: PropTypes.string
};

export default NavMenuItem;
