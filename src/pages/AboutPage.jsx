import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'

function AboutPage() {
  return (
    <main className="page-main">
      <title>About — Georgina Mark</title>
      <section className="page-heading">
        <p className="eyebrow"><span /> A LITTLE ABOUT ME</p>
        <h1>
          A world of stories
          <br />
          passes through <em>here.</em>
        </h1>
        <p>
          Life is full of unexpected turns, new beginnings, and people who
          shape our stories.
        </p>
      </section>
      <figure className="about-id-card">
        <img
          src={`${import.meta.env.BASE_URL}georgina-mark-id-card.png`}
          alt="Profile card artwork for Georgina Mark"
        />
      </figure>
      <section className="about-section section-grid">
        <p className="section-label"><span>01</span> MY STORY</p>
        <div className="about-copy">
          <h2>
            Part of a world
            <br />
            in <em>motion.</em>
          </h2>
          <p>
            My story is shaped by the people I’ve loved, the challenges I’ve
            faced, and the hope I carry forward.
          </p>
          <p>
            I’m choosing to share the personal parts of my life at my own pace.
          </p>
        </div>
        <div className="about-note">
          <span className="note-star" aria-hidden="true">✳</span>
          <span>WHAT MATTERS</span>
          <strong>Connection</strong>
          <span className="note-divider" />
          <span>SHARED AT</span>
          <strong>My own pace</strong>
        </div>
      </section>
      <Link className="next-page-link" to="/values">
        <span>UP NEXT</span>
        <strong>What matters to me</strong>
        <ArrowIcon />
      </Link>
    </main>
  )
}

export default AboutPage
