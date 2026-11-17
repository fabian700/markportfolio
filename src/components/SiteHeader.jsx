import { Link, NavLink } from 'react-router-dom'
import ArrowIcon from './ArrowIcon.jsx'

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Georgina Mark, home">
        <span className="wordmark-mark">GM</span>
        <span>GEORGINA MARK</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink className="nav-home" to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/life-story">Life Story</NavLink>
        <NavLink to="/values">What matters</NavLink>
        <NavLink className="nav-contact" to="/contact">
          Contact <ArrowIcon />
        </NavLink>
      </nav>
    </header>
  )
}

export default SiteHeader
