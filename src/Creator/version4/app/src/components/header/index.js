import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    Icon
} from 'carbon-components-react'
import { iconDownload, iconHelp, iconSave, iconRestart, iconHelpOutline } from 'carbon-icons'

const StyledHeader = styled.header`
  z-index: 10;
`

export const Header = () => (
    <StyledHeader className="bx--platform-header">
        <a className="bx--platform-header__name" href="/" title="app name">
            Eclipse Phase Character Creator
        </a>

        <nav className="bx--platform-header__nav" aria-label="Platform Name">
            <ul className="bx--platform-header__menu-bar" role="menubar" aria-label="Platform Name">
                <li>
                    <Link
                        to="/" className="bx--platform-header__menu-item"
                        role="menuitem"
                        tabIndex="0">
                        Character Sheet
                    </Link>
                </li>
                <li>
                    <Link
                        to="/database"
                        className="bx--platform-header__menu-item"
                        role="menuitem"
                        tabIndex="0">
                        Database
                    </Link>
                </li>

                {/* <li className="bx--platform-header__submenu">
                    <a
                        className="bx--platform-header__menu-item bx--platform-header__menu-title"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded="false"
                        href="javascript:void(0)"
                        tabIndex="0">
                        L1 link 3
                        <svg className="bx--platform-header__menu-arrow" width="12" height="7" aria-hidden="true">
                            <path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
                        </svg>
                    </a>
                    <ul className="bx--platform-header__menu" role="menu" aria-label="L1 link 3">
                        <li role="none">
                            <a className="bx--platform-header__menu-item" role="menuitem" href="javascript:void(0)"
                               tabIndex="-1">
                    <span className="bx--text-truncate--end">
                      Link 1
                    </span>
                            </a>
                        </li>
                        <li role="none">
                            <a className="bx--platform-header__menu-item" role="menuitem" href="javascript:void(0)"
                               tabIndex="-1">
                    <span className="bx--text-truncate--end">
                      Link 2
                    </span>
                            </a>
                        </li>
                        <li role="none">
                            <a className="bx--platform-header__menu-item" role="menuitem" href="javascript:void(0)"
                               tabIndex="-1">
                    <span className="bx--text-truncate--end">
                      Ipsum architecto voluptatem
                    </span>
                            </a>
                        </li>
                    </ul>
                </li>*/}
            </ul>
        </nav>

        <div className="bx--platform-header__global">
            <button className="bx--platform-header__action" title="Action 2">
                <Icon
                    className="bx--structured-list-svg"
                    icon={iconRestart}
                    description="About"
                />
            </button>
            <button className="bx--platform-header__action" title="Action 2">
                <Icon
                    className="bx--structured-list-svg"
                    icon={iconDownload}
                    description="About"
                />
            </button>
            <button className="bx--platform-header__action" title="Action 3">
                <Icon
                    className="bx--structured-list-svg"
                    icon={iconSave}
                    description="About"
                />
            </button>
            <button className="bx--platform-header__action" title="Action 4">
                <Icon
                    className="bx--structured-list-svg"
                    icon={iconHelpOutline}
                    description="About"
                />
            </button>
        </div>
    </StyledHeader>
)

export default Header
