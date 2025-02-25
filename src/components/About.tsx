import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About : React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#4584b6]">About PyVersify</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering developers to write better Python code through modern tools and community collaboration.
          </p>
        </section>
  
        {/* Mission Statement */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#4584b6]">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            PyVersify aims to revolutionize Python development by providing cutting-edge tools
            and fostering a collaborative community. We believe in making Python development
            more accessible, efficient, and enjoyable for developers of all skill levels.
          </p>
        </section>
  
        {/* Values Section */}
        <section className="mb-12 grid md:grid-cols-3 gap-12">
          <div className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-50 p-8 shadow-md rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-[#4584b6]">Innovation</h3>
              <p className="text-gray-700">
                Pushing the boundaries of what's possible with Python development tools.
              </p>
            </div>
          </div>
          <div className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-50 p-8 shadow-md rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-[#4584b6]">Community</h3>
              <p className="text-gray-700">
                Building a supportive ecosystem for Python developers worldwide.
              </p>
            </div>    
          </div>
          <div className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-50 p-8 shadow-md rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-[#4584b6]">Quality</h3>
              <p className="text-gray-700">
                Maintaining high standards in code quality and developer experience.
              </p>
            </div>
          </div>
        </section>
  
        {/* FAQ Link Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#4584b6]">Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            Check out our frequently asked questions or reach out to our team.
          </p>
          <Link
            to="/faq"
            className="inline-block bg-[#4584b6] text-white px-6 py-2 rounded-lg hover:bg-[#3a719b] transition-colors"
          >
            View FAQ
          </Link>
        </section>
  
        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#4584b6]">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We're always looking to connect with developers and improve our platform.
          </p>
          <a
            href="mailto:contact@pyversify.com"
            className="text-[#4584b6] hover:text-[#3a719b] transition-colors"
          >
            PyVersify@nlb-software.dev
          </a>
        </section>
      </div>
    );
};

export default About;