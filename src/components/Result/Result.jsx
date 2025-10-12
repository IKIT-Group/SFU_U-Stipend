import React, {useState} from 'react';
import styles from './Result.module.scss'
import clsx from "clsx";
import Popup from "../Popup/index.js";
import SuccessIcon from "../../assets/icons/success.svg?react"
import WarningIcon from "../../assets/icons/warning.svg?react"
import DangerIcon from "../../assets/icons/danger.svg?react"
import InfoIcon from "../../assets/icons/info.svg?react"

const Result = (props) => {
  const {
    className,
    data,
  } = props

  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const togglePopup = () => {
    setIsOpenPopup(prev => !prev)
  }

  return (
    <aside
      className={clsx(className, styles.result)}
    >
      {!data ? (
        <div
          id="resultPlaceholder"
          className={clsx(styles.resultPlaceholder)}
        >
          Введите данные для расчета стипендии...
        </div>
      ) : (
        <>
          <div
            className={clsx(styles.resultTitles, styles.resultBlock)}
          >
            <p className={styles.resultTitle}>Вид стипендии</p>
            <p className={styles.resultTitle}>Размер</p>
            <p
              id="resultTitle"
              className={clsx(styles.resultTitle, styles.resultTitleIconInfo)}
              onClick={togglePopup}
            >
              Статус
              <InfoIcon />
            </p>
            <Popup className={clsx(styles.resultPopup, !isOpenPopup ? 'visually-hidden' : '')} />
          </div>
          <ul
            className={clsx(styles.resultList, styles.resultBlock)}
          >
            {data.results.map((scholarship) => (
              <li className={styles.resultItem}>
                <span className={styles.resultName}>{scholarship.name}</span>
                <span className={styles.resultAmount}>{scholarship.amount}₽</span>
                <span className={styles.resultStatus}>
                  {scholarship.status === 'success' && <SuccessIcon className={styles.resultStatus} />}
                  {scholarship.status === 'warning' && <WarningIcon className={styles.resultStatus} />}
                  {scholarship.status === 'danger' && <DangerIcon className={styles.resultStatus} />}
                </span>
              </li>
            ))}
          </ul>
          <div className={clsx(styles.resultOutput, styles.resultBlock)}>
            {/* <div className={styles.resultTotal}>
              <span className={styles.resultTotalText}>Гарантированная сумма стипендии</span>
              <span className={styles.resultTotalAmount}>{Math.round(data.guaranteedSum)} ₽</span>
            </div>
            <div className={styles.resultTotal}>
              <span className={styles.resultTotalText}>Возможна сумма стипендии</span>
              <span className={styles.resultPossibleAmount}>{Math.round(data.possibleSum)} ₽</span>
            </div> */}
            <p className={styles.resultNote}>
              Расчёты являются примерными и могут отличаться от реальных.
            </p>
            <a
              href="#sources"
              className={styles.resultLink}
            >Как происходит расчет?
            </a>
          </div>
        </>
      )}
    </aside>
  )
    ;
};

export default Result;