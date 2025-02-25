// src/components/FAQ.tsx
import React from 'react';

interface FAQProps {
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

const FAQ: React.FC<FAQProps> = ({ openFaq, setOpenFaq }) => {
  return (
    <section className="bg-[#4784b6] dark:bg-gray-50 rounded-xl bg-opacity-75 m-10 hover:bg-[#3a719b] hover:mx-3 transition-colors duration-1000">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-black lg:text-4xl dark:text-white">
            Frequently asked questions
        </h1>

        <div className="text-xl mt-8 space-y-8 lg:mt-12">
            {[
                {
                question: "How can I get started with Python programming?",
                answer: "Getting started with Python is easy! We recommend beginning with our beginner tutorials, joining our community forums, and practicing with simple coding exercises. Our resources section has everything you need to start your Python journey."
                },
                {
                question: "What resources are available for learning?",
                answer: "We offer a wide range of resources including video tutorials, interactive coding challenges, documentation guides, and community-driven projects. All resources are freely available to our community members."
                },
                {
                question: "How can I contribute to the community?",
                answer: "There are many ways to contribute! You can share your knowledge in forums, create tutorials, help other members with their questions, or contribute to our open-source projects on GitHub."
                },
                {
                question: "Do I need prior programming experience?",
                answer: "No prior programming experience is required! Our resources cater to all skill levels, from complete beginners to advanced developers. We have structured learning paths to guide you."
                },
                {
                question: "How can I connect with other members?",
                answer: "You can connect with other members through our community forums, Discord server, regular virtual meetups, and collaborative coding sessions. We encourage active participation and networking!"
                }
            ].map((faq, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                <button
                    className="flex items-center justify-between w-full"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                    <h1 className="font-semibold text-gray-700 dark:text-white">{faq.question}</h1>
                    <span className={`${openFaq === index ? 'bg-gray-400' : 'bg-blue-500'} rounded-full p-2`}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white transition-transform duration-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{
                            transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={openFaq === index ? "M18 12H6" : "M12 6v6m0 0v6m0-6h6m-6 0H6"}
                            />
                        </svg>
                    </span>
                </button>

                {openFaq === index && (
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-300 animate-fadeIn duration-50000">
                {faq.answer}
                    </p>
                )}
            </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQ;