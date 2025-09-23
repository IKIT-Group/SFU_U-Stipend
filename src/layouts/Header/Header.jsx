import styles from './Header.module.scss'
import clsx from "clsx";
import BurgerButton from "../../components/BurgerButton/BurgerButton.jsx";
import Logo from "../../components/Logo/index.js";
import {useEffect, useState} from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(prev => !prev)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  const menuItems = [
    {
      id: 1,
      href: "#calculator",
      title: "Калькулятор",
    },
    {
      id: 2,
      href: "#help",
      title: "Помощь",
    },
    {
      id: 3,
      href: "#documents",
      title: "Документы",
    },
    {
      id: 4,
      href: "#about",
      title: "О проекте",
    },
  ]

  useEffect(() => {
    const html = document.documentElement

    if (openMenu) {
      html.classList.add('is-lock')
    } else {
      html.classList.remove('is-lock')
    }

    return () => html.classList.remove("is-lock");
  }, [openMenu]);

  return (
    <header
      id="header"
      className={styles.header}
    >
      <div className={clsx(styles.headerInner, 'container')}>
        <Logo className={styles.headerMenuLink} />
        <div
          className={clsx(styles.headerOverlay, openMenu && styles.isActive)}
        >
          <nav className={styles.headerMenu}>
            <ul className={styles.headerMenuList}>
              {menuItems.map(({ id, href, title }) => (
                <li key={id}>
                  <a href={href} className={styles.headerMenuLink} onClick={closeMenu}>
                    {title}
                  </a>
                </li>
              ))}
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