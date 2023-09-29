import React from 'react';
import ContactForm from './ContactForm';

function PortfolioLanding() {
  const portfolioLinks = [
    {
      title: 'ScareBears',
      link: 'https://github.com/ReginaldGreen02/ScareBears',
    },
    {
      title: 'COSC-4358-GameDevProject-3D',
      link: 'https://github.com/PickledBrainStudios/COSC-4358-GameDevProject-3D',
    },
    {
      title: 'SafariSoul',
      link: 'https://github.com/audxce/SafariSoul',
    },
    {
      title: 'Reinforcement Learning',
      link: 'https://github.com/nghialuu14/COSC4368---Reinforcement-Learning',
    },
  ];

  return (
    <div className="portfolio-landing">
      
      <section  id="name-occupation" className="custom-section custom-portfolio">
        <h1 className="custom-text text-4xl font-bold">Your Name</h1>
        <p className="custom-text text-xl">Frontend Developer</p>
      </section>

      <section id="about" className="custom-section custom-about">
        <h2 className="custom-text text-2xl font-semibold mb-4">About Me</h2>
        <p className="custom-text text-lg text-gray-700">
          Welcome to my portfolio! I am a passionate frontend developer with a strong
          focus on creating responsive and user-friendly web applications.
        </p>
      </section>

      <section id="portfolio" className="custom-section custom-portfolio">
        <h2 className="custom-text text-2xl font-semibold mb-4">Portfolio</h2>
        <ul className="list-disc list-inside">
          {portfolioLinks.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="custom-section custom-contact">
        <h2 className="custom-text text-2xl font-semibold mb-4">Reach Out!</h2>
        <ContactForm />
      </section>
            
    </div>
  );
}

export default PortfolioLanding;
