"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-hack-black text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-hack-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="https://academyconsult.de/studierende/" target="_blank" rel="noopener noreferrer">
            <img src="./academy-consult-logo.png" alt="Academy Consult" className="h-8 w-auto hover:opacity-80 transition-opacity" />
          </a>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-8 items-center">
              <a href="#home" className="hover:text-hack-red transition-colors">Home</a>
              <a href="#about" className="hover:text-hack-red transition-colors">What to expect</a>
              <a href="#sponsors" className="hover:text-hack-red transition-colors">Sponsors</a>
              <a href="#agenda" className="hover:text-hack-red transition-colors">Agenda</a>
              <a href="#faq" className="hover:text-hack-red transition-colors">FAQ</a>
              <a href="#organizers" className="hover:text-hack-red transition-colors">Organisers</a>
            </div>
            <motion.a
              href="https://luma.com/k3fc75dg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 lg:px-6 lg:py-2 rounded-full border text-white bg-hack-red/30 border-hack-red/50 transition-all duration-300 hover:bg-hack-red/60 hover:shadow-[0_20px_80px_rgba(163,73,73,0.6)] hover:-translate-y-0.5 text-sm lg:text-base whitespace-nowrap"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(163,73,73,0.2) 0%, rgba(0,0,0,0) 70%)'
          }}
        />
        <div className="text-center px-6">
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-8">
            h<span className="text-hack-red">AC</span>k the case
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white max-w-3xl mx-auto">Solving real business cases with <span className="text-hack-red">innovative tech</span> solutions</p>
          <motion.div
            className="mb-6 flex items-center justify-center gap-4 text-lg md:text-2xl font-semibold"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.25 } },
            }}
          >
            {[
              { label: 'hack' },
              { label: 'case' },
              { label: 'connect' },
            ].map((w, i, arr) => (
              <div key={w.label} className="flex items-center gap-4">
                <motion.span
                  className="relative inline-block tracking-wide"
                  variants={{
                    hidden: { y: 8, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                    {w.label}
                  </span>
                  <span className="absolute left-0 right-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-hack-red to-transparent" />
                </motion.span>
                {i < arr.length - 1 && (
                  <motion.span
                    aria-hidden
                    className="w-2 h-2 rounded-full bg-hack-red"
                    initial={{ scale: 0.7, opacity: 0.7 }}
                    animate={{
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </div>
            ))}
          </motion.div>
          <p className="text-3xl mb-1">October 23, 2025</p>
          <p className="text-lg text-white/80">Celonis Office, Munich</p>
          <motion.a
            href="https://luma.com/k3fc75dg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-6 py-2 rounded-full border text-white bg-hack-red/30 border-hack-red/50 transition-all duration-300 hover:bg-hack-red/60 hover:shadow-[0_20px_80px_rgba(163,73,73,0.6)] hover:-translate-y-0.5 cursor-pointer relative z-10"
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="about" className="bg-hack-red py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 text-white">What to Expect</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto">A full day to create, connect, and solve real problems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '50+ participants', subtitle: 'Connect with fellow students from Munich. Open to all backgrounds — no coding required (nice to have). Come curious, leave connected.' },
              { title: '2 exciting real business cases', subtitle: 'Tackle real world challenges that combine consulting with tech. Build solutions with guidance from expert mentors and fellow students.' },
              { title: 'Full‑day of building & exchange', subtitle: 'A fun, hands‑on day to ideate, prototype and share. Get to know industry professionals and student initiatives during the day.' },
            ].map((item) => (
              <motion.div 
                key={item.title} 
                className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 text-left md:text-center"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-white/80">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section (replaces Cases) */}
      <section id="sponsors" className="bg-black py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold mb-4">Sponsors</h2>
            <p className="text-gray-300 text-lg md:text-xl">Our partners supporting the challenge and the event.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto">
            <motion.div 
              className="bg-white/25 backdrop-blur rounded-2xl p-8 border border-white/40 shadow-[0_10px_40px_rgba(255,255,255,0.25)] h-40 flex items-center justify-center hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a href="https://www.celonis.com/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                <img src="./Celonis_Full_Logo_Black_png.webp" alt="Celonis" className="h-24 md:h-28 object-contain max-h-full" />
              </a>
            </motion.div>
            <motion.div 
              className="bg-white/25 backdrop-blur rounded-2xl p-8 border border-white/40 shadow-[0_10px_40px_rgba(255,255,255,0.25)] h-40 flex items-center justify-center hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a href="https://www.corbado.com/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                <img src="./corbado-logo.png" alt="Corbado" className="h-16 md:h-20 object-contain max-h-full" />
              </a>
            </motion.div>
            <motion.div 
              className="bg-white/25 backdrop-blur rounded-2xl p-8 border border-white/40 shadow-[0_10px_40px_rgba(255,255,255,0.25)] h-40 flex items-center justify-center hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                <img src="./lovable-logo.png" alt="Lovable" className="h-16 md:h-20 object-contain max-h-full" />
              </a>
            </motion.div>
            <motion.div 
              className="bg-white/25 backdrop-blur rounded-2xl p-8 border border-white/40 shadow-[0_10px_40px_rgba(255,255,255,0.25)] h-40 flex items-center justify-center hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <a href="https://vestigas.com/" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                <img src="./vestigas-logo.png" alt="Vestigas" className="h-16 md:h-20 object-contain max-h-full" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="bg-hack-red py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-white mb-4">Agenda</h2>
            <p className="text-white/80 text-lg md:text-xl">A full day of learning, building, and connecting</p>
          </div>
          <div className="relative max-w-3xl mx-auto pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/60" />

            {[
              { time: '9:45', title: 'Welcome, Briefing and Kickoff', desc: 'Check-In, building teams and getting to know the people as well as the cases' },
              { time: '11:30', title: 'Start building on your idea', desc: 'Start working on the case with your team' },
              { time: '14:30', title: 'Keynote from Celonis', desc: 'Keynote', keynote: true, logo: './Celonis_Full_Logo_Black_png.webp' },
              { time: '14:45', title: 'Continue building and prepare your pitch', desc: 'Continue building your solution and create a short slide deck' },
              { time: '19:15', title: 'Keynote from Celonis', desc: 'Keynote', keynote: true, logo: './Celonis_Full_Logo_Black_png.webp' },
              { time: '19:30', title: 'Final Pitches and Prizes', desc: 'Present to the jury, winners announced' },
              { time: '21:00', title: 'Connecting, Snacks and Celebration', desc: 'Networking and celebration' },
            ].map((e) => (
              <div key={`${e.time}-${e.title}`} className="relative mb-6">
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white" />
                <div
                  className={`min-h-[104px] rounded-2xl p-5 border text-white transition-all duration-300 flex gap-3 items-start ${
                    e.keynote
                      ? 'bg-transparent border-white/40 hover:bg-white/10 hover:shadow-[0_12px_45px_rgba(255,255,255,0.2)]'
                      : 'bg-white/15 backdrop-blur border-white/25 hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)]'
                  }`}
                >
                  <div className="text-white/80 text-sm mt-0.5 min-w-[90px] flex flex-col items-center">
                    <span>{e.time}</span>
                    {e.logo && <img src={e.logo} alt="logo" className="h-4 mt-1" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold mb-1">
                      {e.title}
                    </div>
                    <div className="text-white/80">{e.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-black py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold mb-4">FAQ</h2>
            <p className="text-white/80 text-lg md:text-xl">Answers to common questions</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
            {[
              {
                q: 'What is "hACk the case"?',
                a: '"hACk the case" is a full-day hackathon for students interested in tech and/or consulting. You can learn, connect, and win prizes alongside like-minded students.'
              },
              {
                q: 'Who can participate?',
                a: 'The event is open to students from Munich with diverse backgrounds. You don\'t need to know how to code; you just need to be curious and genuinely interested in the field.'
              },
              {
                q: 'Do I need a team?',
                a: 'No, you don\'t need a team prior to the event. You can apply as a team or find one at the event. We will help form teams at the beginning.'
              },
              {
                q: 'What should I bring?',
                a: 'Bring your laptop and charger. We provide workspace, Wi-Fi, and snacks.'
              },
              {
                q: 'How do I register?',
                a: 'You can register via Luma using the "Register Now" button.'
              },
              {
                q: 'How much does it cost?',
                a: 'The event is completely free for participants. We provide the space, food, and beverages for the event.'
              },
              {
                q: 'What\'s in it for me?',
                a: 'You get the opportunity to learn and connect with like-minded students from Munich and with industry professionals who will support you during the event. You can also win great prizes!'
              },
            ].map((item, index) => (
              <motion.div 
                key={item.q} 
                className="bg-white/15 backdrop-blur rounded-2xl border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold pr-4">{item.q}</div>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-xl"
                    >
                      ▼
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedFAQ === index ? 'auto' : 0,
                      opacity: expandedFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="text-white/80 mt-3 pt-3 border-t border-white/20">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisers Section */}
      <section id="organizers" className="bg-hack-red py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-5xl font-extrabold mb-4 text-white">Organisers</h2>
              <p className="text-white/90 text-lg md:text-xl">
                At Academy Consult, students from Munich’s universities come together to put theory into practice and bring fresh ideas to companies. Our interdisciplinary team enables us to view challenges from many angles and craft innovative solutions. Founded on 09.09.1999, we draw on a unique network and more than two decades of experience.
              </p>
              <motion.a
                href="https://academyconsult.de/studierende/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-6 px-8 py-3 rounded-full border text-white bg-white/15 border-white/25 transition-all duration-300 hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] hover:-translate-y-0.5"
              >
                Find out more
              </motion.a>
            </div>
            <motion.div 
              className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">25 years of impact in numbers</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-extrabold text-white">2x</div>
                  <p className="text-white/80">faster into leadership roles than the TUM average</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white">12</div>
                  <p className="text-white/80">of the top 15 DAX companies advised</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white">27 million</div>
                  <p className="text-white/80">average startup funding</p>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white">9</div>
                  <p className="text-white/80">startups valued at 100M+</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-14 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Partner Companies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./bain-logo.png" alt="Bain" className="h-8 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./simon-kucher-logo.png" alt="Simon-Kucher" className="h-8 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./Celonis_Full_Logo_Black_png.webp" alt="Celonis" className="h-8 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./deloitte-logo.png" alt="Deloitte" className="h-8 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./pwc-logo.png" alt="PwC" className="h-7 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./capgemini-logo.png" alt="Capgemini" className="h-7 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./eversheds-sutherland-logo.png" alt="Eversheds Sutherland" className="h-7 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./oliver-wyman-logo.png" alt="Oliver Wyman" className="h-8 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./rsm-logo.png" alt="RSM" className="h-8 object-contain" /></motion.div>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-10 mb-6">Competence Partner</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./mckinsey-logo.png" alt="McKinsey & Company" className="h-9 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./bcg-logo.png" alt="BCG" className="h-9 object-contain" /></motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white/15 backdrop-blur rounded-2xl p-4 border border-white/25 shadow-[0_10px_40px_rgba(255,255,255,0.16)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.22)] transition-all duration-300 flex items-center justify-center h-20"><img src="./systemiq-logo.png" alt="Systemiq" className="h-8 object-contain" /></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="./academy-consult-logo.png" alt="Academy Consult" className="h-8 w-auto opacity-90" />
              <div className="text-white/60 text-sm">
                © 2025 Academy Consult München e.V.
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/60 text-sm">Contact:</span>
                <a 
                  href="mailto:tobias.glatz@academyconsult.de" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  tobias.glatz@academyconsult.de
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/company/academy-consult" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/academy.consult" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <a 
                  href="https://academyconsult.de/studierende/datenschutz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://academyconsult.de/studierende/impressum/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Impressum
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
