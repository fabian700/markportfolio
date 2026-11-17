import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon.jsx'
import values from '../data/values.js'

function ValuesPage() {
  return (
    <main className="page-main">
      <title>What Matters — Georgina Mark</title>
      <section className="page-heading">
        <p className="eyebrow"><span /> WHAT MATTERS TO ME</p>
        <h1>
          It’s all about
          <br />
          <em>the connection.</em>
        </h1>
        <p>
          People, stories, and new perspectives connect us. Here are a few
          things I appreciate about those connections.
        </p>
      </section>
      <section className="values-section">
        <div className="values-heading">
          <p className="section-label"><span>02</span> IN EVERY JOURNEY</p>
          <h2>Small moments.<br /><em>Lasting meaning.</em></h2>
        </div>
        <div className="values-list">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <span className="value-number">{value.number}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>
      <Link className="next-page-link" to="/contact">
        <span>UP NEXT</span>
        <strong>Get in touch</strong>
        <ArrowIcon />
      </Link>
    </main>
  )
}

export default ValuesPage
