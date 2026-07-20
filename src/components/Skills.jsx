import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
    },
    {
      title: 'Backend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Tools & DevOps',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Linux']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <p className="skills__label">My Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div className="skills__card" key={index}>
              <div className="skills__card-icon">{category.icon}</div>
              <h3 className="skills__card-title">{category.title}</h3>
              <ul className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <li className="skills__item" key={skillIndex}>
                    <span className="skills__item-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
