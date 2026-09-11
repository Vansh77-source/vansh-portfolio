import './Stats.css';

const STATS = [
  { value: '6+', label: 'Projects built' },
  { value: '5+', label: 'Languages & frameworks' },
  { value: '2', label: 'Data analytics internships' },
  { value: '2027', label: 'Graduating year' },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((stat, i) => (
          <div className="stats__item reveal" style={{ '--delay': `${i * 90}ms` }} key={stat.label}>
            <span className="stats__index">0{i + 1}</span>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
