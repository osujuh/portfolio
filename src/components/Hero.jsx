import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-grid"></div>
        <div className="hero__bg-glow"></div>
      </div>

      <div className={`hero__content container ${isVisible ? 'hero__content--visible' : ''}`}>
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Ronald <span className="hero__name-accent">Osujuh</span></h1>
        <h2 className="hero__role">Backend <span className="hero__role-accent">Developer</span></h2>
        <p className="hero__description">
          I craft exceptional digital experiences with clean code and modern technologies.
          Passionate about building scalable applications that make a difference.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">50+</span>
            <span className="hero__stat-label">Projects Completed</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">30+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <a href="#about" className="hero__scroll-link">
          <span className="hero__scroll-text">Scroll Down</span>
          <div className="hero__scroll-line"></div>
        </a>
      </div>
    </section>
  )
}

export default Hero
