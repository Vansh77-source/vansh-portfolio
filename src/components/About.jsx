import portrait from '../assets/portfolio.jpg';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="reveal">
          <p className="eyebrow">01 &middot; about</p>
          <h2 className="section-title">
            This is <span>me</span>.
          </h2>
          <p className="about__lead">
            Hi, I'm Vansh — an Information Technology undergrad who enjoys turning ideas into
            working interfaces.
          </p>
          <p className="section-desc">
            I'm a B.E. Information Technology student at Sipna COET, Amravati (SGBAU), graduating
            in 2027. I build responsive, user-centric web applications with HTML, CSS,
            JavaScript, Bootstrap and React. I enjoy turning ideas into polished digital
            experiences, with careful attention to layout, usability and responsive design.
          </p>
          <p className="section-desc">
            Outside of coursework, I like building small self-contained tools end to
            end — from landing pages to interactive web apps — to keep learning by
            designing, building and shipping.
          </p>
        </div>

        <div className="about__facts reveal" style={{ '--delay': '100ms' }}>
          <div className="about__portrait">
            <img src={portrait} alt="Vansh Bijwe" />
            <span>frontend developer</span>
          </div>
          <div className="fact">
            <span className="fact__label">location</span>
            <span className="fact__value">Amravati, India</span>
          </div>
          <div className="fact">
            <span className="fact__label">education</span>
            <span className="fact__value">B.E. Information Technology, Sipna COET (2023–2027)</span>
          </div>
          <div className="fact">
            <span className="fact__label">focus</span>
            <span className="fact__value">Frontend development & UI design</span>
          </div>
          <div className="fact">
            <span className="fact__label">languages</span>
            <span className="fact__value">English, Hindi, Marathi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
