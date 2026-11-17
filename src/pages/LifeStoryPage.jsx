function LifeStoryPage() {
  return (
    <main className="page-main">
      <title>Life Story — Georgina Mark</title>
      <section className="page-heading">
        <p className="eyebrow"><span /> MY LIFE STORY</p>
        <h1>
          A difficult
          <br />
          <em>chapter.</em>
        </h1>
        <p>
          I’ve been through painful loss and difficult experiences that changed
          how I see life. For now, I’m focusing on rebuilding, finding peace,
          and moving forward one day at a time. I’m keeping the details private
          and will share more only if and when it feels right.
        </p>
      </section>
      <section className="life-story-note">
        <span className="note-star" aria-hidden="true">✳</span>
        <div>
          <h2>My story, in my own time</h2>
          <p>
            Some parts of my story are deeply personal. For my privacy and
            safety, I’m choosing not to share names, places, or more details
            here.
          </p>
        </div>
      </section>
      <section className="story-interactions-note" aria-labelledby="story-comments-heading">
        <div>
          <h2 id="story-comments-heading">Comments and reactions</h2>
          <p>
            Public comments and reactions are off for now. I can decide what
            kind of responses feel safe to receive later.
          </p>
        </div>
        <span>OFF FOR PRIVACY</span>
      </section>
    </main>
  )
}

export default LifeStoryPage
