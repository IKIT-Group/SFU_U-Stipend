import React from 'react';
import styles from './Documents.module.scss'
import clsx from "clsx";
import Title from "../../components/Title/index.js";
import DownloadIcon from "../../assets/icons/download.svg?react"

const Documents = () => {
  const documentItems = [
    {
      id: 1,
      title: "Стипендии и премии для студентов и аспирантов",
      contentDate: "2025 г.",
      href: "https://sfu.ru/ru/education/homepage/grants",
    },
    {
      id: 2,
      title: "Корректировки в размере стипендий",
      contentDate: "с 01.07.2023",
      href: new URL("../../assets/documents/Корректировки в размере стипендий.pdf", import.meta.url).href,
    },
    {
      id: 3,
      title: "Направление подготовки бакалавров/специальности в 2025 году",
      contentDate: "2025 г.",
      href: "https://ikit.sfu-kras.ru/postup/bak_spec",
    },
  ]

  const ariaLabel = "documents-title"

  return (
    <section
      id="documents"
      className={styles.documents}
      aria-labelledby={ariaLabel}
    >
      <div className={clsx(styles.documentsInner, 'container')}>
        <Title
          ariaLabel={ariaLabel}
          title="Документы"
        />
        <ul className={styles.documentsList}>
          {documentItems.map(({ id, title, contentDate, href }) => (
            <li key={id} className={styles.documentsItem}>
              <div className={styles.documentsContent}>
                <h4 className={styles.documentsContentTitle}>
                  {title}
                </h4>
                <p className={styles.documentsContentDate}>
                  {contentDate}
                </p>
              </div>
              <a
                href={href}
                className={styles.documentsDownload}
                target="_blank"
              >
                <DownloadIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;