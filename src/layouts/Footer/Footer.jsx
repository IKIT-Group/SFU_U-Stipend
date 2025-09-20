import React from 'react';
import clsx from "clsx";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footerInner, 'container')}>
        <p className="footerCopyright">Ⓒ U·Stipend 2025</p>
        <p className="footerAuthor">Создано командой <a target={"_blank"} className={styles.footerLink} href="https://github.com/IKIT-Group">Не Очень Интересно</a> </p>
      </div>
    </footer>
  );
};

export default Footer;