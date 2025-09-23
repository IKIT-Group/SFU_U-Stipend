import React from 'react';
import styles from './Help.module.scss'
import clsx from "clsx";
import Title from "../../components/Title/index.js";
 
const Help = () => {
  const ariaLabel = "help-title"

  const helpItems = [
    {
      id: 1,
      title: "Как оформить социальную стипендию?",
      href: new URL("../../assets/documents/Социалка.pdf", import.meta.url).href,
      imgSrc: new URL("../../assets/images/help/1.jpg", import.meta.url).href,
    },
    // {
    //   id: 2,
    //   title: "Как оформить материальную помощь?",
    //   href: new URL("../../assets/documents/Социалка.pdf", import.meta.url).href,
    //   imgSrc: new URL("../../assets/images/help/2.jpg", import.meta.url).href,
    // },
    // {
    //   id: 3,
    //   title: "Как оформить краевую стипендию?",
    //   href: new URL("../../assets/documents/Социалка.pdf", import.meta.url).href,
    //   imgSrc: new URL("../../assets/images/help/3.jpg", import.meta.url).href,
    // },
  ]

  return (
    <section
      className={styles.help}
      id="help"
      aria-labelledby={ariaLabel}
    >
      <div className={clsx(styles.helpInner, 'container')}>
        <Title
          ariaLabel={ariaLabel}
          title="Помощь"
        />
        <div className={styles.helpContent}>
          <p className={styles.helpDescription}>
            В данном разделе собраны инструкции в формате PDF - удобно
            сохранить и поделиться с одногруппниками. Они помогут решить вопросы, связанные со стипендиями, которые чаще
             всего возникают у студентов Сибирского Федерального Университета.
          </p>
          <ul className={styles.helpList}>
            {helpItems.map(({ id, title, href, imgSrc }) => (
              <li key={id}>
                <a
                  href={href}
                  className={styles.helpLink}
                  target="_blank"
                >
                  <img
                    className={styles.helpLinkImage}
                    src={imgSrc}
                    alt=""
                    width="514"
                    height="359"
                  />
                  <p
                    className={styles.helpLinkOverlay}
                    title={title}
                  >
                    {title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Help;