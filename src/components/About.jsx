import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image">
              <div className="about__image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <div className="about__image-decoration"></div>
            <div className="about__image-dots"></div>
          </div>

          <div className="about__content">
            <p className="about__label">About Me</p>
            <h2 className="section-title">Passionate Developer<br/>&amp; Creative Thinker</h2>
            <p className="about__text">
              I'm a dedicated full-stack developer with a passion for creating elegant
              solutions to complex problems. With over 5 years of experience in the industry,
              I've had the privilege of working with startups and established companies alike.
            </p>
            <p className="about__text">
              My journey in tech started with curiosity and has evolved into a deep love for
              crafting digital experiences. I believe in writing clean, maintainable code
              and staying current with emerging technologies.
            </p>

            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-label">Name:</span>
                <span className="about__detail-value">Ronald Osujuh</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Email:</span>
                <span className="about__detail-value">rosujuh@gmail.com</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Location:</span>
                <span className="about__detail-value">Nairobi, Kenya</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Availability:</span>
                <span className="about__detail-value about__detail-value--highlight">Open to Work</span>
              </div>
            </div>

            <div className="about__buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="#projects" className="btn btn-outline">
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
