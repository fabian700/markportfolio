import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'
import georginaMarkPhoto from '../assets/georgina-mark.png'

function HomePage() {
  return (
    <main>
      <title>Home — Georgina Mark</title>
      <section className="intro">
        <div className="intro-copy">
          <p className="eyebrow"><span /> A JOURNEY OF MY OWN</p>
          <h1>
            Every journey
            <br />
            starts <span>somewhere.</span>
          </h1>
          <p className="intro-description">
            I’m Georgina Mark. Every life has its own story, and this is a
            little of mine.
          </p>
          <div className="intro-actions">
            <Link className="button button-dark" to="/about">
              A little about me <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={georginaMarkPhoto} alt="Georgina Mark" />
          <div className="art-caption">
            <span className="caption-dot" />
            <span>A PERSONAL STORY</span>
          </div>
        </div>
        <div className="intro-index" aria-hidden="true">
          <span>01</span>
          <span className="index-line" />
          <span>05</span>
        </div>
      </section>
      <section className="home-next">
        <p className="section-label"><span>01</span> GET TO KNOW ME</p>
        <h2>A little more about the person behind the story.</h2>
        <Link className="text-link" to="/about">
          Visit my about page <ArrowIcon />
        </Link>
      </section>
    </main>
  )
}

export default HomePage
