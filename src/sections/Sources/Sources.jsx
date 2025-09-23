import React from 'react';
import styles from './Sources.module.scss'
import clsx from "clsx";
import Title from "../../components/Title/index.js";

const Sources = () => {
  const ariaLabel = "sources-title"

  return (
    <section
      className={styles.sources}
      id="sources"
      aria-labelledby={ariaLabel}
    >
      <div className={clsx(styles.sourcesInner, 'container')}>
        <Title
          title="Как происходит расчёт?"
          ariaLabel={ariaLabel}
        />
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