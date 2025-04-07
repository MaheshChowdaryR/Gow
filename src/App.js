import React, { useState, useEffect } from 'react';
import './index.css';
import emailjs from 'emailjs-com';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_402a5of', 'template_1v3l9l8', e.target, '3SWOMKacXDYqdVzkg')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      }, (error) => {
        console.log(error.text);
      });
  };
  useEffect(() => {
    // Add a delay to animate each word
    const words = document.querySelectorAll('.floating-text span');
    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.5}s`; // Add delay for each word
    });
  }, []);

  return (
    <div className="bg-page-pattern text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-5">
        {/* Left Navigation */}
        <nav className="flex gap-6">
         
          <a href="#about" className="text-white hover:text-lightGreen">About</a>
          <a href="#projects" className="text-white hover:text-lightGreen">Projects</a>
          <a href="#skills" className="text-white hover:text-lightGreen">Skills</a>
        </nav>

        {/* Center Text (Hello Folks) */}
        <div className="flex-1 text-center">
          <h1 className="text-5xl font-dancing">
            <span className="text-lightGreen">Hello</span> <span className="text-white">Folks</span>
          </h1>
        </div>

        {/* Right Navigation */}
        <nav className="flex gap-6">
          <a href="#contact" className="text-white hover:text-lightGreen">Contact</a>
          <a href="https://www.linkedin.com/in/gowtham-sambangi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightGreen">LinkedIn</a>
        </nav>
      </header>

      {/* Line Below Header */}
      <div className="header-line"></div>

      {/* Landing Section */}
      <main className="flex flex-col sm:flex-row items-center justify-center p-10 mt-10 gap-12">
        {/* Left Section: Text */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-6xl font-extrabold text-green-400 text-center-position">
            I am
          </h2>
          <h2 className="text-7xl sm:text-8xl font-extrabold text-lightGreen mt-4 text-center-position">
            <span className="floating-text">Gowtham</span> 
          </h2>
          <p className="mt-6 text-3xl sm:text-4xl text-white font-bold text-center-position">
            A passionate <span className="text-white">React.js Developer</span>
          </p>
        </div>

        {/* Right Section: Hexagonal Image */}
        <div className="w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
          <div className="hexagon-shape">
          <img src="/images/gow.jpg" alt="Mahesh" className="hexagon-image"/>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="pt-16 pb-16 px-8">
        <h2 className="text-4xl font-extrabold text-lightGreen text-center">About Me</h2>
        <p className="mt-6 text-xl text-white text-center">
          I am a passionate React.js developer, currently pursuing my Bachelor's degree in Computer Science at VIT-AP. I have a strong background in building dynamic and user-friendly web applications. My expertise spans across JavaScript, React.js, and Tailwind CSS, with a focus on delivering clean, performant, and scalable code. I am constantly learning and growing in the field, and I’m always looking for opportunities to collaborate on innovative projects that challenge me to push the boundaries of web development.
        </p>
      </section>

      {/* Other Sections can follow */}
       {/* Projects Section */}
       <section id="projects">
        <h2 className="text-3xl font-bold text-center text-lightGreen">Projects</h2>

        {/* Project 1 */}
        <div className="project-tile">
          <img src="https://uicookies.com/wp-content/uploads/2018/09/royalestate-free-real-estate-website-templates.jpg" alt="Project One" />
          <div className="project-tile-content">
            <h3> Real Estate Web Application</h3>
            <p>
            Developed a scalable and responsive real estate platform using the MERN stack. Implemented JWT-based authentication and role-based access control for secure logins. Optimized database queries and integrated RESTful APIs for efficient property listings.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-tile">
          <img src="https://th.bing.com/th/id/OIP.Qq8IC6l8wGL9DX3oxqtClwHaD5?rs=1&pid=ImgDetMain" alt="Project Two" />
          <div className="project-tile-content">
            <h3> Hospital Management Systems</h3>
            <p>
            Built an AI-driven patient diagnosis and treatment recommendation system. Integrated real-time patient monitoring using IoT and predictive analytics for resource management. Developed an intelligent appointment scheduling system to minimize wait times            
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Technical Skills */}
          <div className="skill">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p></p>
          </div>
          <div className="skill">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p></p>
          </div>
          <div className="skill">
            <div className="skill-icon">🗄️</div>
            <h3>MySQL</h3>
            <p></p>
          </div>
          <div className="skill">
            <div className="skill-icon">💻</div>
            <h3>Web Development</h3>
            <p></p>
          </div>

          {/* Soft Skills */}
          <div className="skill">
            <div className="skill-icon">🤝</div>
            <h3>Teamwork</h3>
            <p></p>
          </div>
          <div className="skill">
            <div className="skill-icon">👥</div>
            <h3>Leadership</h3>
            <p></p>
          </div>
          <div className="skill">
            <div className="skill-icon">⚖️</div>
            <h3>Adaptability</h3>
          </div>
          <div className="skill">
            <div className="skill-icon">🔑</div>
            <h3>Problem Solving</h3>
          </div>
          <div className="skill">
            <div className="skill-icon">🎯</div>
            <h3>Creative Thinking</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '2rem' }}>
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {messageSent && <p className="message-sent">Your message has been sent!</p>}
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Gowtham Sambangi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
