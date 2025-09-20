import React from 'react';
import styles from './Help.module.scss'
import clsx from "clsx";
 
const Help = () => {
  return (
    <section
      className={styles.help}
      id="help"
      aria-labelledby="help-title"
    >
      <div className={clsx(styles.helpInner, 'container')}>
        <h2 className={styles.helpTitle}>Помощь</h2>
        <div className={styles.helpContent}>
          <p className={styles.helpDescription}>
            В данном разделе собраны инструкции в формате PDF - удобно
            сохранить и поделиться с одногруппникми. Каждая из них призвана
            решить ту или иную задачу по вопросу стипендии, которая часто
            возникает у студентов Сибирского Федерального Университета.
          </p>
          <ul className={styles.helpList}>
            <li className={styles.helpItem}>
              <a
                href="../../assets/documents/Социалка.pdf"
                className={styles.helpLink}
                target="_blank"
              >
                <img
                  className={styles.helpLinkImage}
                  src="../../assets/images/help/1.jpg"
                  width="514"
                  height="359"
                  alt=""
                />
                <p
                  className={styles.helpLinkOverlay}
                  title="Как оформить социальную стипендию?"
                >
                  Как оформить социальную стипендию?
                </p>
              </a>
            </li>
            <li className={styles.helpItem}>
              <a
                href="../../assets/documents/Социалка.pdf"
                className={styles.helpLink}
                target="_blank"
              >
                <img
                  className={styles.helpLinkImage}
                  src="../../assets/images/help/2.jpg"
                  width="514"
                  height="359"
                  alt=""
                />
                <p
                  className={styles.helpLinkOverlay}
                  title="Как оформить материальную помощь?"
                >
                  Как оформить материальную помощь?
                </p>
              </a>
            </li>
            <li className={styles.helpItem}>
              <a
                href="../../assets/documents/Социалка.pdf"
                className={styles.helpLink}
                target="_blank"
              >
                <img
                  className={styles.helpLinkImage}
                  src="../../assets/images/help/3.jpg"
                  width="514"
                  height="359"
                  alt=""
                />
                <p
                  className={styles.helpLinkOverlay}
                  title="Как оформить краевую стипендию?"
                >
                  Как оформить краевую стипендию?
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Help;