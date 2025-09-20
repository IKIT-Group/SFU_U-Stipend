import styles from './Header.module.scss'
import clsx from "clsx";
import BurgerButton from "../../components/BurgerButton/BurgerButton.jsx";
import Logo from "../../components/Logo/index.js";
import {useState} from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(prev => !prev)
  }

  return (
    <header
      id="header"
      className={styles.header}
    >
      <div className={clsx(styles.headerInner, 'container')}>
        <Logo className={styles.headerMenuLink}></Logo>
        <div
          className={clsx(styles.headerOverlay, openMenu && styles.isActive)}
        >
          <nav className={styles.headerMenu}>
            <ul className={styles.headerMenuList}>
              <li className={styles.headerMenuItem}>
                <a
                  href="#calculator"
                  className={styles.headerMenuLink}
                >Калькулятор
                </a>
              </li>
              <li className={styles.headerMenuItem}>
                <a
                  href="#help"
                  className={styles.headerMenuLink}
                >Помощь
                </a>
              </li>
              <li className={styles.headerMenuItem}>
                <a
                  href="#documents"
                  className={styles.headerMenuLink}
                >Документы
                </a>
              </li>
              <li className={styles.headerMenuItem}>
                <a
                  href="#about"
                  className={styles.headerMenuLink}
                >О проекте
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <BurgerButton
          onClick={toggleMenu}
          isOpen={openMenu}
        />
      </div>
    </header>
  )
}

export default Header