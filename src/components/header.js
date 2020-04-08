import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <>
    <header>
      <nav className={["navbar navbar-expand-lg d-flex justify-content-between", `${headerStyles.bgGreen}`].join(" ")}>
        <div class="ml-4">
          <Link className={["navbar-brand d-lg-inline-block text-white", `${headerStyles.navbarBrand}`].join(" ")}>
            iGEM BITS Goa
          </Link>
        </div>
        <div class="mr-3 mb-2">
          <div id="menuArea">
            <input type="checkbox" id="menuToggle"
                   className={[`${headerStyles.input}`, `${headerStyles.menuToggle}`].join(" ")}></input>

            {/* <label for="menuToggle" className={[`${headerStyles.menuItem}`, 
                                          "menuOpen nav-link text-uppercase text-white"].join(" ")}>
                     <Link id="menuToggle" className={[`${headerStyles.menuItem}`,
                     "nav-link m-2 menu-item text-uppercase text-white open"].join(" ")}> 
                      Explore
                    </label> */}

            <label for="menuToggle" className={headerStyles.menuOpen}>
              <div className={headerStyles.open}></div>
            </label>

            <div className={[`${headerStyles.menu}`, `${headerStyles.menuEffects}`].join(" ")}>
              <label for="menuToggle" class="mr-3"></label>
              <div className={headerStyles.menuContent}>
                <ul>
                  <li><Link>MENU 1</Link></li>
                  <li><Link>MENU 2</Link></li>
                  <li><Link>MENU 3</Link></li>
                  <li><Link>MENU 4</Link></li>
                </ul>
              </div>
            </div>
          </div >
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


