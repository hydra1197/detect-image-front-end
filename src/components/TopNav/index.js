import React from 'react';
import { NavLink } from 'react-router-dom';
import { HISTORY_ROUTE, HOME_ROUTE } from '../../constants/routes';
import cls from './top-nav.module.scss';

const TopNav = () => {
  return (
    <div className={cls.wrapper}>
      <NavLink exact to={HOME_ROUTE}>
        Home
      </NavLink>
      <NavLink to={HISTORY_ROUTE}>History</NavLink>
    </div>
  );
};

export default TopNav;
