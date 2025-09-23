"use client"

import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaSearch } from 'react-icons/fa'

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is SPARC 2026?",
          answer: "SPARC 2026 (Sustainable Project And Research Challenge) is India&apos;s biggest sustainability challenge for students. It&apos;s a platform designed to recognize and celebrate creativity, problem-solving, and innovative thinking among young students, encouraging the development of ideas, projects, and solutions that address real-life challenges through science, technology, and inventive approaches. Beyond individual recognition, schools also benefit, with standout institutions having the chance to win a fully-equipped STEM Lab and other resources that promote hands-on learning."
        },
        {
          question: "Who can participate in SPARC 2026?",
          answer: "SPARC 2026 is open to students from schools across India. The competition welcomes individual students and teams who are passionate about sustainability, innovation, and creating solutions for real-world challenges. Students in Classes 6-10 are eligible to participate."
        },
        {
          question: "What are the main themes for SPARC 2026?",
          answer: "SPARC 2026 focuses on four interconnected themes: 1) Sustainable Cities and Mobility, 2) Health and Wellbeing for All, 3) Clean Energy and Climate Action, and 4) Inclusive Growth and Social Equity. These themes are not isolated—they are deeply interconnected and all point back to sustainability. Each theme highlights a different part of life but connects to create a comprehensive approach to sustainable living."
        },
        {
          question: "Is there a registration fee?",
          answer: "Yes, there is a nominal registration fee of INR 100 per entry. This fee helps cover the costs of organizing the competition and providing resources to participants."
        }
      ]
    },
    {
      category: "Registration & Participation",
      questions: [
        {
          question: "How do I register for SPARC 2026?",
          answer: "You can register for SPARC 2026 by filling out the online form and paying the registration fee of INR 100. Click the &apos;Register Now&apos; button on our website to access the official registration form."
        },
        {
          question: "What is the registration deadline?",
          answer: "Round 1 (registration) closes on November 1, 2025. We encourage early registration to ensure you have enough time to prepare your project and meet all requirements."
        },
        {
          question: "How many students per entry/team?",
          answer: "Each entry can have up to 2 students. One student alone is okay; two students can form a team. Three students are not permitted for one idea."
        },
        {
          question: "Can I submit multiple ideas?",
          answer: "Yes, you can submit multiple ideas. However, each idea requires its own registration fee of INR 100."
        },
        {
          question: "What information do I need for registration?",
          answer: "You&apos;ll need basic personal information, school details, contact information, and a brief description of your project idea or area of interest. Make sure to have all your details ready before starting the registration process."
        }
      ]
    },
    {
      category: "Project Guidelines",
      questions: [
        {
          question: "What kind of projects are accepted?",
          answer: "We accept innovative projects that address real-world challenges related to our four themes: Sustainable Cities and Mobility, Health and Wellbeing for All, Clean Energy and Climate Action, and Inclusive Growth and Social Equity. Projects should demonstrate creativity, scientific thinking, and practical solutions."
        },
        {
          question: "Are there any specific requirements for project submissions?",
          answer: "Projects should be original, well-researched, and demonstrate clear understanding of the chosen theme. You&apos;ll need to provide project documentation, prototypes (if applicable), and present your work during the evaluation phase. Detailed guidelines will be provided after registration."
        },
        {
          question: "Can I change my project theme after registration?",
          answer: "Yes, you can modify your project theme during the initial development phase. However, we recommend finalizing your theme choice early to allow sufficient time for thorough research and development."
        },
        {
          question: "What resources are available to help with project development?",
          answer: "We provide mentorship opportunities, access to expert guidance, and various resources to support your project development. Additionally, we offer workshops and webinars to help participants understand the themes and develop their ideas."
        }
      ]
    },
    {
      category: "Timeline & Important Dates",
      questions: [
        {
          question: "What is the complete timeline for SPARC 2026?",
          answer: "Key dates include: Call for Applications (September 22, 2025), Round 1 deadline (November 1, 2025), Longlist announcement (November 15, 2025), Round 2 deadline (December 13, 2025), Shortlist announcement (December 27, 2025), Optional regional finals (January 10, 2026), Dry run for final participants (January 24, 2026), and the main event (February 1, 2026)."
        },
        {
          question: "What happens after I submit in Round 1?",
          answer: "You&apos;ll hear whether you have qualified for Round 2. The longlist (Round 2 qualifiers) will be announced on November 15, 2025."
        },
        {
          question: "What is expected in Round 2 / Finale?",
          answer: "Round 2 requires building a working prototype of your idea. You&apos;ll need to submit a video showing how the model works and how it solves the problem chosen. For the Finale: scheduled for February 1, 2026 at a centrally located venue. Details will be shared by December 2025."
        },
        {
          question: "If I didn&apos;t make past Round 1 or 2, can I still attend?",
          answer: "Yes. Everyone is welcome to attend SPARC 2026 (including family & friends). The event is open to all interested participants and supporters."
        }
      ]
    },
    {
      category: "Prizes & Recognition",
      questions: [
        {
          question: "What prizes are available for winners?",
          answer: "SPARC 2026 offers exciting prizes including recognition awards, mentorship opportunities, and for standout schools, a fully-equipped STEM Lab and other resources that promote hands-on learning. Detailed prize information will be announced closer to the event."
        },
        {
          question: "How are projects evaluated?",
          answer: "Projects are evaluated based on innovation, scientific rigor, practical applicability, presentation quality, and alignment with sustainability themes. A panel of experts from various fields will assess all submissions fairly and comprehensively."
        },
        {
          question: "Will all participants receive certificates?",
          answer: "Yes, all participants who complete the competition will receive participation certificates. Winners and special mentions will receive additional recognition and awards."
        }
      ]
    },
    {
      category: "Theme Details",
      questions: [
        {
          question: "What is Theme 1: Sustainable Cities and Mobility?",
          answer: "This theme focuses on creating clean, safe, and inclusive cities. With growing populations, cities face challenges like traffic, pollution, waste, and lack of safe spaces. Sustainable mobility means safer, affordable, and eco-friendly transport options. Imagine a city as a big playground that stays clean, safe, and fun for everyone."
        },
        {
          question: "What is Theme 2: Health and Wellbeing for All?",
          answer: "This theme is about making sure everyone can live happy, safe, and healthy lives. It includes access to affordable healthcare, safe food, exercise, hygiene, and support for mental health. It&apos;s also about creating tools that help those with disabilities or limited access to healthcare. Being healthy means eating clean food, playing and exercising, staying calm, and helping everyone live happily and safely."
        },
        {
          question: "What is Theme 3: Clean Energy and Climate Action?",
          answer: "This theme is about using renewable energy, reducing waste, and protecting the Earth so it stays safe for future generations. Our planet is like a giant house we all share, and we need to keep it cool, clean, and safe. Clean energy and climate action help us make energy use smarter and solve environmental problems at the root."
        },
        {
          question: "What is Theme 4: Inclusive Growth and Social Equity?",
          answer: "This theme ensures that innovations are useful for everyone, no matter their background, gender, or abilities. True sustainability is about fairness and equality. Inclusive growth means making sure every person—kids, grandparents, people with disabilities, boys and girls, rich and poor—gets the same chance to live, learn, and play happily."
        }
      ]
    },
    {
      category: "SPARC 2025 Highlights",
      questions: [
        {
          question: "What were the highlights of SPARC 2025?",
          answer: "SPARC 2025 was a huge success with 750+ entries from 85 schools across Bengaluru. Student projects tackled challenges like water scarcity and microplastic detection. The event featured final presentations before industry experts, educators, and innovators, with projects aligned with UN Sustainable Development Goals."
        },
        {
          question: "What activities were available at SPARC 2025?",
          answer: "Beyond the competition, SPARC 2025 featured a Fun-Filled Activity Zone with Robo Soccer, Robo Race, live lab experiments, telescope viewing, and more. There were inspiring sessions with talks by Dr. V. Veerappan (Co-Founder, Tessolve) and Mrs. Kumari Shibulal, live demonstrations of Bernoulli&apos;s Principle, and an entrepreneur panel."
        },
        {
          question: "Who were some of the young innovators at SPARC 2025?",
          answer: "SPARC 2025 showcased students already recognized at platforms like INSPIRE MANAK and the Young Kalam Science Fair, proving that the future of innovation is already here. These young minds demonstrated exceptional creativity and problem-solving skills."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Who can I contact for technical support?",
          answer: "For technical support, registration issues, or general inquiries, please contact us at: Email: hello@tan-ninety.com • Phone: +91 9538244577. We&apos;re here to help ensure your SPARC 2026 experience is smooth and successful."
        },
        {
          question: "What if I have questions not covered in this FAQ?",
          answer: "If you have specific questions not addressed in our FAQ, please don&apos;t hesitate to reach out to our support team. We&apos;re committed to providing clear and helpful responses to all participant inquiries."
        },
        {
          question: "How can I stay updated about SPARC 2026?",
          answer: "Stay connected with us through our official website, social media channels, and email updates. We regularly share important announcements, tips, and resources to help you succeed in the competition."
        }
      ]
    }
  ]

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-[var(--main-color)] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <FaQuestionCircle className="text-6xl text-[var(--sec-main-color)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[var(--white-color)] max-w-2xl mx-auto">
            Find answers to common questions about SPARC 2026. Can&apos;t  find what you&apos;re looking for? 
            Contact our support team for assistance.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--sec-main-color)]" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[var(--sec-main-color)] bg-white text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--sec-main-color)] focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {filteredData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[var(--sec-main-color)] px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`
                  const isOpen = openItems[globalIndex]
                  
                  return (
                    <div key={itemIndex} className="transition-all duration-300">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-[var(--text-color)] pr-4">
                          {item.question}
                        </span>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <FaChevronUp className="text-[var(--sec-main-color)] text-xl" />
                          ) : (
                            <FaChevronDown className="text-[var(--sec-main-color)] text-xl" />
                          )}
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4">
                          <p className="text-[var(--text-color)] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredData.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <FaQuestionCircle className="text-4xl text-[var(--sec-main-color)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
            <p className="text-[var(--white-color)]">
              Try searching with different keywords or contact our support team for assistance.
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
            Still have questions?
          </h3>
          <p className="text-[var(--text-color)] mb-6">
            Our support team is here to help you with any questions about SPARC 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@tan-ninety.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--sec-main-color)] text-white font-semibold rounded-lg hover:bg-[var(--sec-main-color)]/90 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="/registration"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--sec-main-color)] text-[var(--sec-main-color)] font-semibold rounded-lg hover:bg-[var(--sec-main-color)] hover:text-white transition-colors duration-200"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
