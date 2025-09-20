import React from 'react';
import styles from './Popup.module.scss'
import clsx from "clsx";
import successIcon from '../../assets/icons/success_icon.svg'
import warningIcon from '../../assets/icons/warning_icon.svg'
import dangerIcon from '../../assets/icons/danger_icon.svg'

const Popup = (props) => {
  const {
    className
  } = props

  return (
    <div
      id="resultPopup"
      className={clsx(className, styles.popup)}
      data-js-result-popup
    >
      <p className={styles.popupTitle}>
        Статус показывает состояние получения стипендии, где:
      </p>
      <ul className={styles.popupList}>
        <li className={styles.popupItem}>
          <img
            src={successIcon}
            alt=""
            className={styles.popupImage}
          />
          <p className={styles.popupText}>
            получить без дополнительных действий
          </p>
        </li>
        <li className={styles.popupItem}>
          <img
            src={warningIcon}
            alt=""
            className={styles.popupImage}
          />
          <p className={styles.popupText}>требуется подача документов</p>
        </li>
        <li className={styles.popupItem}>
          <img
            src={dangerIcon}
            alt=""
            className={styles.popupImage}
          />
          <p className={styles.popupText}>получение невозможно</p>
        </li>
      </ul>
    </div>
  );
};

export default Popup;