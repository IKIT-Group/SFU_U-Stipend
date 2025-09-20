import React from 'react';
import styles from './Sources.module.scss'
import clsx from "clsx";

const Sources = () => {
  return (
    <section
      className={styles.sources}
      id="sources"
      aria-labelledby="sources-title"
    >
      <div className={clsx(styles.sourcesInner, 'container')}>
        <h2
          className={styles.sourcesTitle}
          aria-label="sources-title"
        >
          Как происходит расчёт?
        </h2>
        <p className={styles.sourcesDescription}>
          Наш сервис получает информацию о видах и размерах стипендий из
          официальных документов и сайта Сибирского Федерального Университета.
          <br />
          Когда Вы указываете информацию о себе, сервис проводит тщательный
          анализ и подбирает для Вас актуальные, доступные для получения
          стипендий.
        </p>
      </div>
    </section>
  );
};

export default Sources;