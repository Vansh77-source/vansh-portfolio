import './Process.css';
const STEPS = [['01', 'think', 'Understand the problem'], ['02', 'design', 'Plan the user experience and interface'], ['03', 'build', 'Develop with modern frontend technologies'], ['04', 'refine', 'Test, optimize and polish']];
function Process() { return <section id="process" className="section process"><div className="container"><div className="section-head reveal"><p className="eyebrow">05 · how i work</p><h2 className="section-title">From idea to <span>interface</span>.</h2></div><div className="process__grid">{STEPS.map(([number, title, text], i) => <article className="process__step reveal" style={{ '--delay': `${i * 90}ms` }} key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>; }
export default Process;
