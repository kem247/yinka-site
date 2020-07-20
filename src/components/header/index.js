import { Link } from "gatsby"
import classNames from "classnames"
import React, { useState } from "react"
import styles from "./styles.module.css"
import Nav from "react-bootstrap/Nav"

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={classNames(styles.container, "clearfix")}>
          <div
            className={styles.primaryMenuTrigger}
            onClick={() => setShowMobileNav(!showMobileNav)}
            onKeyPress={() => setShowMobileNav(!showMobileNav)}
            role="button"
            tabIndex={0}
          >
            <i className="icon-reorder"></i>
          </div>
          <div className={styles.logo}>
            <Link to="/" className={styles.standardLogo}></Link>
          </div>
          <nav className={styles.primaryMenu}>
            <Nav
              className={classNames("justify-content-end", styles.primaryNav, {
                [styles.show]: showMobileNav,
              })}
              activeKey="/#section-home"
            >
              <Nav.Item>
                <Link to="#/section-home" className={styles.navLink}>
                  <div>Home</div>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#/section-about" className={styles.navLink}>
                  <div>About</div>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#/section-gallery" className={styles.navLink}>
                  <div>Gallery</div>
                </Link>
              </Nav.Item>
            </Nav>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
