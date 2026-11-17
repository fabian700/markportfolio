import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-wordmark" to="/">
        <span className="wordmark-mark">GM</span>
        <span>GEORGINA MARK</span>
      </Link>
      <span>MADE WITH CARE</span>
      <Link to="/" className="back-to-top">BACK TO HOME ↑</Link>
    </footer>
  )
}

export default SiteFooter
