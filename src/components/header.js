import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <>
    <header>
      <nav className="navbar fixed-top navbar-expand-lg d-flex justify-content-between bgGreen">
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
              <div className="container w-100 h-100">
                <div className={[`${headerStyles.menuContent}`, "d-flex flex-column justify-content-center h-100"].join(" ")}>
                  <div className="row w-100 mb-4">
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Overview</li>
                        <hr/>
                        <li><Link to="/Description">Description</Link></li>
                        <li><Link to="/Design">Design</Link></li>
                        <li><Link to="/Results">Results</Link></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Project</li>
                        <hr/>
                        <li><Link to="/Experiments">Experiments</Link></li>
                        <li><Link to="/Notebook">Notebook</Link></li>
                        <li><Link to="/Contribution">Contribution</Link></li>
                        <li><Link to="/Demonstrate">Demonstrate</Link></li>
                        <li><Link to="/Improve">Improve</Link></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Parts</li>
                        <hr/>
                        <li><Link to="/Parts">Overview</Link></li>
                        <li><Link to="/Basic_Part">Basic Parts</Link></li>
                        <li><Link to="/Composite_Part">Composite Parts</Link></li>
                        <li><Link to="/Part_Collection">Parts Collection</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="row w-100">
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Human Practices</li>
                        <hr/>
                        <li><Link to="/Human_Practices">Overview</Link></li>
                        <li><Link to="/Public_Engagement">Outreach and Engagement</Link></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Team</li>
                        <hr/>
                        <li><Link to="/Team">Team Members</Link></li>
                        <li><Link to="/Collaborations">Collaborations</Link></li>
                        <li><Link to="/Attributions">Attributions</Link></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li className={headerStyles.navHead}>Awards</li>
                        <hr/>
                        <li><Link to="/Entrepreneurship">Entrepreneurship</Link></li>
                        <li><Link to="/Hardware">Hardware</Link></li>
                        <li><Link to="/Measurement">Measurement</Link></li>
                        <li><Link to="/Model">Model</Link></li>
                        <li><Link to="/Plant">Plant</Link></li>
                        <li><Link to="/Software">Software</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div >
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


