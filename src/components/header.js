import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <nav className={["navbar navbar-expand-lg navbar-light", `${headerStyles.bgGreen}`].join(" ")}>
      <div className="container">
        <div class="d-flex">
          <a className={["navbar-brand d-lg-inline-block text-white", `${headerStyles.navbarBrand}`].join(" ")} href="#">
            iGEM BITS Goa
          </a>
        </div>
        <div class="d-flex align-items-right">
          <ul class="navbar-nav ml-auto flex-nowrap">
            <li class="nav-item">
              <a href="#" className={[`${headerStyles.menuItem}`, "nav-link m-2 menu-item text-uppercase text-white"].join(" ")}>Explore</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
