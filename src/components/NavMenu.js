'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import NavMenuItem from './NavMenuItem';

const NavMenu = ({ activeIndex, bullets, onClick, menuName, pathName }) => {
  const style = {
    top: '0%',
    position: 'fixed',
    zIndex: 3
  };

  return (
    <div className="topnav" style={style} id="myTopnav">
      {Array.from(new Array(bullets), (x, i) => i + 1).map(i => {
        return (
          <NavMenuItem
            active={i === activeIndex}
            key={i}
            index={i}
            onClick={onClick}
            menuName={menuName[i-1]}
            pathName={pathName[i-1]}
          />
        );
      })}
    </div>
  );
};

NavMenu.propTypes = {
  activeIndex: PropTypes.number,
  bullets: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  menuName: PropTypes.arrayOf(PropTypes.string),
  pathName: PropTypes.arrayOf(PropTypes.string)
};

export default NavMenu;
