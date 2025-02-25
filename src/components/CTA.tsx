import React from 'react';
import { Github } from 'lucide-react';

interface HomeProps {
    isVisible: boolean;
}

const CTA: React.FC<HomeProps> = ({ isVisible }) => {
    return (
        <>
            {/* CTA Section */}
            <section className="bg-[#4584b6] py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
                        <p className="text-xl text-white/80 mb-8">Start your Python journey with us today!</p>
                        <a href="https://github.com/PyVersify/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#ffde57] hover:bg-[#ffd633] text-gray-900 px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transform transition hover:scale-105">
                                <Github className="h-5 w-5" />
                                <span>Join via GitHub</span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
