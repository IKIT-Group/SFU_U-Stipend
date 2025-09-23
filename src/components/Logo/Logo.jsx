import React from 'react';
import clsx from "clsx";
import styles from './Logo.module.scss'

const Logo = (props) => {
  const {
    className
  } = props

  return (
    <a
      href="/"
      className={clsx(className, styles.logo)}
    >
      U∙Stipend
    </a>
  );
};

export default Logo;