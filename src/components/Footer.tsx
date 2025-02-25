import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faGithub, faDiscord, faMastodon } from '@fortawesome/free-brands-svg-icons';
import smallLogo from '../assets/images/logo_32x32.png';

const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Works', path: '/works' },
    { name: 'Support', path: '/support' },
    { name: 'Help', path: '/help' }
];

const socialLinks = [
    { name: 'Slack', icon: faSlack, url: '#' },
    { name: 'GitHub', icon: faGithub, url: '#' },
    { name: 'Discord', icon: faDiscord, url: '#' },
    { name: 'Mastodon', icon: faMastodon, url: '#' }
];

const Footer: React.FC = () => {
    return (
        <>
            {/* Footer */}
            <footer className="block bg-gray-900 text-white py-12">
                <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="flex-col flex items-center">
                        {/* Footer Logo */}
                        <div className="flex items-center space-x-2 mb-4 md:mb-0 pb-10">
                            <img src={smallLogo} className='h-9 w-9'/>
                            <span className="text-3xl font-bold">py versify</span>
                        </div>
                        
                        {/* Footer Links */}
                        <div className="text-center font-semibold">
                            {footerLinks.map((link, index) => (
                                <Link 
                                    key={index} 
                                    to={link.path} 
                                    className="inline-block px-6 py-2 font-normal text-white transition hover:text-[#ffde57]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Divider */}
                        <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>

                        {/* Social Links */}
                        <div className="mb-12 grid-cols-4 grid-flow-col grid max-w-52 gap-8 mx-auto">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.url} 
                                    className="mx-auto flex-col flex max-w-6 items-center justify-center text-white"
                                >
                                    <FontAwesomeIcon icon={link.icon} color='#ffffff' />
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} py versify. All rights reserved.</p>
                        </div>  
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;