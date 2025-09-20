import React from 'react';
import clsx from "clsx";
import styles from './BurgerButton.module.scss'

const BurgerButton = (props) => {
  const {
    onClick,
    isOpen
  } = props

  return (
    <button
      className={clsx(styles.burgerButton, 'visible-mobile', isOpen && styles.isActive)}
      type="button"
      aria-label="Open menu"
      title="Open menu"
      onClick={onClick}
      data-js-header-burger-button
    >
      <span className={styles.burgerButtonLine}></span>
      <span className={styles.burgerButtonLine}></span>
      <span className={styles.burgerButtonLine}></span>
    </button>
  );
};

export default BurgerButton;