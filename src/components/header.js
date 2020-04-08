import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <>
    <header>
      <nav className={["navbar navbar-expand-lg navbar-light", `${headerStyles.bgGreen}`].join(" ")}>
        <div className="container">
          <div className="d-flex">
            <Link className={["navbar-brand d-lg-inline-block text-white", `${headerStyles.navbarBrand}`].join(" ")}>
              iGEM BITS Goa
          </Link>
          </div>
          <div className="d-flex align-items-right">
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li className="nav-item">
                <Link className={[`${headerStyles.menuItem}`, "nav-link m-2 menu-item text-uppercase text-white"].join(" ")}>
                  Explore
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
