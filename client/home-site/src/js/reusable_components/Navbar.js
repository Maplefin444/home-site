import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/">
                    <FontAwesomeIcon icon={faHouse} size="2xl" />
                </CustomLink>
                <CustomLink to="/musichome">
                    <FontAwesomeIcon icon={faMusic} size="2xl" />
                </CustomLink>
                <CustomLink to="/rshome">
                    <FontAwesomeIcon icon={faGamepad} size="2xl" />
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