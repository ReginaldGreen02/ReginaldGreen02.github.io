import React from 'react';


function PortfolioLanding() {
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
        {/* Add your portfolio projects here */}
      </section>

      <section id="contact" className="custom-section custom-contact">
        <h2 className="custom-text text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="custom-text text-lg text-gray-700">Email: your@email.com</p>
        <p className="custom-text text-lg text-gray-700">LinkedIn: linkedin.com/your-profile</p>
        {/* Add other contact information as needed */}
      </section>
    </div>
  );
}

export default PortfolioLanding;
