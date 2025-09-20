import React from 'react';
import styles from './Preview.module.scss'
import clsx from "clsx";

const Preview = () => {
  return (
    <section
      className={styles.preview}
      aria-labelledby="preview-title"
    >
      <div className={clsx(styles.previewInner, 'container')}>
        <div className={styles.previewBody}>
          <h1
            className="visually-hidden"
            id="preview-title"
          >
            Калькулятор стипендии СФУ
          </h1>
          <h2 className={styles.previewTitle}>
            <span className={styles.isOrange}>U∙Stipend</span> — удобный сервис подсчета
            стипендии для студентов Сибирского Федерального Университета.
          </h2>
          <div className={styles.previewDescription}>
            <p>
              Теперь не нужно искать нужные документы о размерах стипендий, мы
              собрали все в одном месте! Планируйте свою стипендию, указывая
              результаты сессии и другие характеристики.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;