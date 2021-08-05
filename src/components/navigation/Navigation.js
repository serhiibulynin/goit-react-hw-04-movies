import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../routes/navRoutes";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        className={styles.navLink}
        activeClassName={styles.active}
        to={navRoutes.home}
      >
        Home
      </NavLink>

      <NavLink
        className={styles.navLink}
        activeClassName={styles.active}
        to={navRoutes.movies}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
