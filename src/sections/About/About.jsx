import React from 'react';
import styles from './About.module.scss'
import clsx from "clsx";
import Title from "../../components/Title/index.js";
import UStipendLogoIcon from '../../assets/icons/u-stipend_logo.svg?react'
import SfuLogoIcon from '../../assets/icons/sfu_logo.svg?react'
import TeamLogoIcon from '../../assets/icons/team_logo.svg?react'

const About = () => {
  const aboutItems = [
    {
      id: 1,
      href: "#header",
      svg: <UStipendLogoIcon />,
      targetNewPage: false,
    },
    {
      id: 2,
      href: "https://www.sfu.ru/ru",
      svg: <SfuLogoIcon />,
      targetNewPage: true,
    },
    {
      id: 3,
      href: "https://github.com/IKIT-Group",
      svg: <TeamLogoIcon />,
      targetNewPage: true,
    },
  ]

  const ariaLabel = "about-title"

  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby={ariaLabel}
    >
      <div className={clsx(styles.aboutInner, 'container')}>
        <Title
          ariaLabel={ariaLabel}
          title="О проекте"
        />
        <p className={styles.aboutDescription}>
          Сервис был создан для студентов Сибирского Федерального
          Университета, чтобы помочь им в получении актуальной информации о
          стипендиях и выплатах. Мы стремимся сделать процесс получения
          информации о стипендиях максимально простым и удобным.
        </p>
        <ul className={styles.aboutList}>
          {aboutItems.map(({ id, href, svg, targetNewPage }) => (
            <li key={id} >
              <a
                href={href}
                target={targetNewPage ? "_blank" : ''}
                className={styles.aboutLink}
              >
                {svg}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;