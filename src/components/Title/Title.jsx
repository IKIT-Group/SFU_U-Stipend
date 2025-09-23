import React from 'react';
import styles from './Title.module.scss'
import clsx from "clsx";

const Title = (props) => {
  const {
    ariaLabel,
    isWhite,
    title
  } = props

  return (
    <h2
      className={clsx(styles.title, isWhite ? styles.titleIsWhite : '')}
      aria-label={ariaLabel}
    >
      {title}
    </h2>
  );
};

export default Title;