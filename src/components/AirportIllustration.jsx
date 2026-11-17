function AirportIllustration() {
  return (
    <div
      className="airport-art"
      aria-label="Illustration of an airplane above an abstract runway"
      role="img"
    >
      <div className="art-sun" />
      <div className="art-window window-one" />
      <div className="art-window window-two" />
      <div className="art-window window-three" />
      <div className="art-cloud cloud-one" />
      <div className="art-cloud cloud-two" />
      <svg className="art-plane" viewBox="0 0 310 150" fill="none" aria-hidden="true">
        <path
          d="M155 8c-7 0-12 5-13 12l-8 43-91 35c-7 3-10 11-7 17 2 5 8 8 14 6l86-22-3 35-25 16c-4 3-3 8 2 8l45-12 45 12c5 0 6-5 2-8l-25-16-3-35 86 22c6 2 12-1 14-6 3-6 0-14-7-17l-91-35-8-43c-1-7-6-12-13-12Z"
          fill="currentColor"
        />
      </svg>
      <div className="art-runway">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="art-caption">
        <span className="caption-dot" />
        <span>A PERSONAL STORY</span>
      </div>
    </div>
  )
}

export default AirportIllustration
