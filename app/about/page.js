

import React from 'react'

import Link from 'next/link'

import './about.css'

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="hero" aria-label="SPARC hero">
          <div className="hero-top">
            <div className="left-card" aria-hidden="false">
              <div className="left-date">FEB 1</div>
              <div className="left-year">2026</div>
            </div>

            <div className="right-col">
              <div className="quote">&ldquo;Where Curiosity Meets Action&rdquo;</div>
              <div className="tagline">Join India&apos;s Biggest<br /> <strong> Sustainability Challenge.</strong></div>
              <div className="sub">Be part of SPARC 2026 — innovation, sustainability and collaborative experimentation across India. Teams, ideas and prototypes welcome.</div>
            </div>
          </div>
          <div className="tiles" role="list" aria-label="Feature tiles">
            <div className="tile t-theme" role="listitem">
              <div className="icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="3" width="8" height="8" rx="1.2" stroke="white" strokeWidth="1.6" />
                  <rect x="14" y="3" width="8" height="8" rx="1.2" stroke="white" strokeWidth="1.6" />
                  <rect x="2" y="13" width="8" height="8" rx="1.2" stroke="white" strokeWidth="1.6" />
                  <path d="M19 19l3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>THEME</h3>
                <p>Learn what we&apos;re exploring</p>
              </div>
            </div>
            <div className="tile t-timeline" role="listitem">
              <div className="icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
                  <path d="M16 3v4M8 3v4M3 11h18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>TIMELINE</h3>
                <p>Important dates & milestones</p>
              </div>
            </div>
            <div className="tile t-rules" role="listitem">
              <div className="icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7 10l3 3 7-7" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="3" width="12" height="18" rx="2" stroke="white" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <h3>RULES</h3>
                <p>Competition guidelines</p>
              </div>
            </div>
            <div className="tile t-prizes" role="listitem">
              <div className="icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 3v3a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 21h10M12 11v10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>PRIZES</h3>
                <p>Rewards & grants</p>
              </div>
            </div>
          </div>
          <div className="register-row">
         
            <Link className="register-cta" href="https://docs.google.com/forms/d/1PY7QgEMA7rlmEVCHJxs5qTf6qJGqOQ6n-ADw64e5Q4s/prefill" target="_blank" rel="noopener">REGISTER NOW</Link>
          </div>
          <div className="icons-strip" aria-hidden="true">
            <div className="row">
       
            </div>
          </div>
        </section>
      </main>
      <main>
        <section className="about-sparc">
          <div className="container">
            <h2>About SPARC</h2>
            <p>
              The SPARC Innovation Award is a platform designed to recognize and celebrate creativity,
              problem-solving, and innovative thinking among young students. It encourages the
              development of ideas, projects, and solutions that address real-life challenges through
              science, technology, and inventive approaches. Beyond individual recognition, schools also
              benefit, with standout institutions having the chance to win a fully-equipped STEM Lab and
              other resources that promote hands-on learning. More than just a competition, SPARC serves
              as a space for students to experiment, innovate, and showcase their potential — inspiring
              the next generation of thinkers, creators, and problem-solvers.
            </p>
          
          </div>
        </section>
        <section className="why-sparc">
          <div className="container">
            <h2>Why SPARC Matters?</h2>
            <p>
              SPARC is more than just a competition — it&apos;s a movement to nurture young innovators.
              By giving students the space to explore real-world challenges and design creative
              solutions, SPARC builds critical thinking, problem-solving, and leadership skills
              that go beyond the classroom. For students, it&apos;s the start of a journey — from
              showcasing ideas to gaining mentorship, exposure, and inspiration from leading
              scientists, entrepreneurs, and changemakers.
              <br /><br />
              SPARC is where curiosity meets impact, empowering the next generation to imagine, invent,
              and inspire.
            </p>
          
          </div>
        </section>
        <section className="themes">
          <div className="container">
            <h2>SPARC <span>2026</span> – Themes</h2>
            <p>
              SPARC stands for Sustainable Project And Research Challenge, and at its heart lies one key
              message: sustainability. The themes for SPARC 2026 have been carefully chosen to connect
              with issues faced in modern society, while still being relatable and inspiring.
              <br /><br />
              <strong>We have a total of four themes to choose from.</strong> These themes are not
              isolated—they are deeply interconnected. Each theme highlights a different part of life—
              cities, health, energy, and equality—but all point back to sustainability.
            </p>
            <div className="theme-cards">
              <div className="theme-card orange">
                <h3>Sustainable Cities and Mobility</h3>
                <div className="theme-icon"></div>
              </div>
              <div className="theme-card green">
                <h3>Health and Wellbeing for All</h3>
                <div className="theme-icon"></div>
              </div>
              <div className="theme-card red">
                <h3>Clean Energy and Climate Action</h3>
                <div className="theme-icon"></div>
              </div>
              <div className="theme-card blue">
                <h3>Inclusive Growth and Social Equity</h3>
                <div className="theme-icon"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline">
          <div className="container">
            <h2>Timeline</h2>
            <div className="timeline-row">
              <div className="time-circle red"><span>22</span><small>Sep</small></div>
              <div className="time-circle blue"><span>01</span><small>Nov</small></div>
              <div className="time-circle orange"><span>15</span><small>Nov</small></div>
              <div className="time-circle green"><span>13</span><small>Dec</small></div>
              <div className="time-circle green"><span>27</span><small>Dec</small></div>
              <div className="time-circle orange"><span>10</span><small>Jan</small></div>
              <div className="time-circle blue"><span>24</span><small>Jan</small></div>
              <div className="time-circle red"><span>01</span><small>Feb</small></div>
            </div>
          </div>
        </section>
        <section className="prizes">
          <div className="container">
            <h2>Prizes</h2>
            <p>Details about the amazing prizes will go here. (Placeholder text until assets are added)</p>
            <div className="prize-assets">
            </div>
          </div>
        </section>
        <section className="registration" id="registration" aria-label="SPARC 2026 Registration">
          <h2>Registration</h2>
          <p>Ready to join SPARC 2026? Click the button below to fill out the registration form.</p>
          <Link className="register-link" href="https://docs.google.com/forms/d/e/1FAIpQLSc_pX7axYQfB9c1uhKeHJ4i2xWJXhOXPEF0pKnfUfRUWnqmrA/viewform?usp=preview" target="_blank" rel="noopener">Register Now</Link>
        </section>
      </main>
    </>
  )
}