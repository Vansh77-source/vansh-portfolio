import './Experience.css';

const TIMELINE = [
  {
    period: 'Mar 2025 – May 2025',
    title: 'Data Analytics Intern',
    org: 'CodElevate Technologies',
    desc: "Built an interactive Power BI dashboard for a 'Superstore Sales Analysis' project — sales trends, profit margins and regional performance via DAX. Also ran exploratory data analysis on real-time 911 emergency call data with Python, NumPy and Pandas, visualized with Seaborn and Matplotlib.",
    tags: ['Power BI', 'Python', 'Pandas', 'DAX'],
  },
  {
    period: '2023 – Present',
    title: 'B.E. Information Technology',
    org: 'Sipna COET, Amravati (SGBAU)',
    desc: 'Coursework and self-directed projects spanning web development, programming fundamentals and data analytics.',
    tags: ['Web Dev', 'Java', 'DSA'],
  },
  {
    period: '2023',
    title: 'HSC',
    org: 'Raj Junior College, Yavatmal',
    desc: 'Completed higher secondary education.',
    tags: [],
  },
  {
    period: '2021',
    title: 'SSC',
    org: 'K.D. Sikchi, Daryapur',
    desc: 'Completed secondary education.',
    tags: [],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">03 &middot; experience</p>
          <h2 className="section-title">
            My <span>journey</span>.
          </h2>
          <p className="section-desc">
            Internship work and education that shaped how I build.
          </p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="timeline__row reveal" style={{ '--delay': `${i * 100}ms` }} key={item.title}>
              <div className="timeline__marker">
                <span className="timeline__dot" />
                <span className="timeline__line" />
              </div>
              <div className="timeline__content">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <span className="timeline__org">{item.org}</span>
                <p className="timeline__desc">{item.desc}</p>
                {item.tags.length > 0 && (
                  <div className="timeline__tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
