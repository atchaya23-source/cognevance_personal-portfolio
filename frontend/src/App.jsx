
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js',
  'Node.js', 'Express.js', 'MongoDB',
  'Python', 'C', 'SQL', 'GitHub'
];

function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Unable to send right now. Please try again later.');
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Atchaya<span>.</span></Link>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <Link to="/expertise">MERN Journey</Link>
        </div>
      </nav>

      <header className="hero">
        <p className="section-title">HELLO, I'M</p>
        <h1>Atchaya R</h1>
        <h2>Computer Science Student & Aspiring MERN Stack Developer</h2>
        <p>
          I build modern web experiences and explore practical technology
          solutions through web development, programming and AI projects.
        </p>
        <div>
          <a className="primary-btn" href="#projects">Explore My Projects ↗</a>
          <a className="secondary-btn" href="#contact">Contact Me</a>
        </div>
      </header>

      <section id="about" className="section">
        <p className="section-title">A LITTLE ABOUT ME</p>
        <h2>Turning Ideas Into Digital Experiences</h2>
        <p>
          I'm a Computer Science and Engineering student at E.G.S. Pillay
          Engineering College. I enjoy developing web applications, exploring
          AI-based solutions and learning technologies that solve real-world
          problems. I'm currently expanding my full-stack development skills
          with the MERN stack.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-title">MY TOOLKIT</p>
        <h2>Technical Skills</h2>
        <div className="card-grid">
          {skills.map((skill) => (
            <div className="card skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-title">THINGS I'VE WORKED ON</p>
        <h2>Featured Projects</h2>
        <div className="card-grid">
          <article className="card">
            <p className="section-title">AI · SECURITY</p>
            <h3>AI-Based Phishing Website Detection</h3>
            <p>
              An independent project exploring URL-based phishing detection
              and a Chrome Extension concept to warn users about suspicious
              websites.
            </p>
            <span>URL Analysis · Python · Security</span>
          </article>

          <article className="card">
            <p className="section-title">TEAM PROJECT</p>
            <h3>AI-Based Civil Shield</h3>
            <p>
              Contributed to the project concept and designed and developed
              the frontend as part of a team project.
            </p>
            <span>Frontend Development · UI Design</span>
          </article>

          <article className="card">
            <p className="section-title">WEB DEVELOPMENT</p>
            <h3>Web Development Projects</h3>
            <p>
              Developed portfolio, e-commerce and mall website projects
              using web technologies.
            </p>
            <span>HTML · CSS · JavaScript</span>
          </article>
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-title">MY LEARNING PATH</p>
        <h2>Education & Achievements</h2>
        <div className="card-grid">
          <article className="card">
            <h3>B.E. Computer Science and Engineering</h3>
            <p>E.G.S. Pillay Engineering College, Nagapattinam</p>
            <span>2024–2028</span>
          </article>
          <article className="card">
            <h3>NPTEL Elite Certification</h3>
            <p>Human Computer Interaction</p>
            <span>96% · 2026</span>
          </article>
          <article className="card">
            <h3>Leadership</h3>
            <p>President — Design Thinking & Innovation Cell</p>
            <span>College leadership</span>
          </article>
          <article className="card">
            <h3>Additional Learning</h3>
            <p>Python Developer certification and programming training.</p>
            <span>Workshops · Training</span>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="section-title">LET'S CONNECT</p>
        <h2>Have an Idea? Let's Talk.</h2>
        <p>Send me a message using the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message →</button>
          {status && <p>{status}</p>}
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Atchaya R · Designed & built with React</p>
        <p>Computer Science · Web Development · AI</p>
      </footer>
    </>
  );
}

function Expertise() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Atchaya<span>.</span></Link>
        <Link to="/">← Back to Home</Link>
      </nav>
      <section className="section">
        <p className="section-title">MY DEVELOPMENT JOURNEY</p>
        <h2>MERN Stack Development</h2>
        <p>
          I'm learning full-stack development by building responsive
          interfaces, creating backend APIs and connecting applications
          to databases.
        </p>
        <div className="card-grid">
          <article className="card">
            <h3>MongoDB</h3>
            <p>Database storage and document-based data.</p>
          </article>
          <article className="card">
            <h3>Express.js</h3>
            <p>Backend routing and REST API development.</p>
          </article>
          <article className="card">
            <h3>React.js</h3>
            <p>Reusable components and interactive interfaces.</p>
          </article>
          <article className="card">
            <h3>Node.js</h3>
            <p>Server-side JavaScript and backend functionality.</p>
          </article>
        </div>
        <a className="primary-btn" href="/#projects">View Projects</a>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expertise" element={<Expertise />} />
    </Routes>
  );
}
