import { useEffect, useState } from 'react'
import { Tooltip } from '@mui/material'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faSun } from '@fortawesome/free-solid-svg-icons'
import cat from "./cat.jpg"

export default function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">
                    <Tooltip title="Dashboard" placement="right">
                        <div className="aligner">
                            <img src={cat} />
                        </div>
                    </Tooltip>
                </CustomLink>
                <button className="toggle" onClick={toggleTheme}>
                    <Tooltip title="Toggle Mode" placement="right">
                        <div className="aligner">
                            <FontAwesomeIcon icon={faSun} size="2xl" />
                        </div>
                    </Tooltip>
                </button>
                <div className='spacer'>
                </div>
                <CustomLink to="/">
                    <Tooltip title="Home" placement="right">
                        <div className="aligner">
                            <FontAwesomeIcon icon={faHouse} size="2xl" />
                        </div>
                    </Tooltip>
                </CustomLink>
                <CustomLink to="/musichome">
                    <Tooltip title="Music" placement="right">
                        <div className="aligner">
                            <FontAwesomeIcon icon={faMusic} size="2xl" />
                        </div>
                    </Tooltip>
                </CustomLink>
                <CustomLink to="/rshome">
                    <Tooltip title="Games" placement="right">
                        <div className="aligner">
                            <FontAwesomeIcon icon={faGamepad} size="2xl" />
                        </div>
                    </Tooltip>
                </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}