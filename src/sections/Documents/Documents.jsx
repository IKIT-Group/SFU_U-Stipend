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
      href: "https://sfu.ru/ru/education/homepage/grants",
      contentDate: "2025 г.",
    },
    {
      id: 2,
      title: "Корректировки в размере стипендий",
      href: "https://sfu.ru/sapi/file-upload/2be985a1150bac9cd1d4dcf948bed13c.pdf",
      contentDate: "с 01.07.2023",
    },
    {
      id: 3,
      title: "Направление подготовки бакалавров/специальности в 2025 году",
      href: "https://ikit.sfu-kras.ru/postup/bak_spec",
      contentDate: "2025 г.",
    },
    {
      id: 4,
      title: "Информационное письмо о конкурсе для назначения стипендии Правительства Российской Федерации",
      href: "https://sfu.ru/sapi/file-upload/ddbfab1a1aad50ef64a192d7d17d864d.pdf",
      contentDate: "2025 г.",
    },
    {
      id: 5,
      title: "Об учреждении стипендий Правительства Российской Федерации для аспирантов и студентов государственных организаций",
      href: "https://about.sfu-kras.ru/docs/8702/pdf/665594",
      contentDate: "2019 г.",
    },
    {
      id: 6,
      title: "Алгоритм составления рейтинга студентов для назначения государственной академической стипендии в повышенном размере",
      href: "https://about.sfu-kras.ru/docs/9041/app1/665594",
      contentDate: "2023 г.",
    }
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
              <a
                href={href}
                className={styles.documentsDownload}
                target="_blank"
              >
              <div className={styles.documentsContent}>
                <h4 className={styles.documentsContentTitle}>
                  {title}
                </h4>
                <p className={styles.documentsContentDate}>
                  {contentDate}
                </p>
              </div>
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