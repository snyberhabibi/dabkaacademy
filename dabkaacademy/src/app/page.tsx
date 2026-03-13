"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Icons as simple SVG components
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

// FAQ Data
const faqs = [
  {
    question: "Do I need any prior dance experience?",
    answer: "No prior experience needed! Our course is designed for complete beginners and takes you step-by-step through the fundamentals before progressing to more advanced techniques."
  },
  {
    question: "How long do I have access to the course?",
    answer: "You get lifetime access to all course content. Once you purchase, you can learn at your own pace and revisit lessons anytime you want."
  },
  {
    question: "Can I download the videos for offline viewing?",
    answer: "Yes! All lessons can be downloaded for offline viewing through our mobile app, perfect for practicing anywhere without an internet connection."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Absolutely. We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, we'll give you a full refund, no questions asked."
  },
  {
    question: "Will there be live sessions or is it all pre-recorded?",
    answer: "The main course content is pre-recorded for flexibility, but we also host monthly live Q&A sessions where you can interact with the instructor and other students."
  }
];

// Chapters Data
const chapters = [
  {
    number: 1,
    title: "Foundations",
    lessons: 5,
    topics: ["Basic stance & posture", "Essential footwork patterns", "Introduction to rhythms", "Hand & arm positions", "Your first routine"]
  },
  {
    number: 2,
    title: "Intermediate",
    lessons: 5,
    topics: ["Complex step combinations", "Line formation basics", "Syncing with partners", "Traditional variations", "Building stamina"]
  },
  {
    number: 3,
    title: "Advanced",
    lessons: 5,
    topics: ["Leader techniques", "Advanced formations", "Performance polish", "Regional styles", "Full choreography"]
  }
];

// Pricing Includes
const pricingIncludes = [
  "15 HD video lessons",
  "Lifetime access",
  "Downloadable content",
  "Practice music tracks",
  "Monthly live Q&A sessions",
  "Private community access",
  "Certificate of completion",
  "30-day money-back guarantee"
];

// FAQ Accordion Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e7eb]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left hover:text-[#CE1126] transition-colors min-h-[56px]"
      >
        <span className="text-base sm:text-lg font-bold pr-4">{question}</span>
        <span className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 sm:pb-6' : 'max-h-0'}`}>
        <p className="text-sm sm:text-base text-[#6b7280]">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] overflow-x-hidden">
      {/* Palestinian Flag Stripe - Top */}
      <div className="fixed top-0 left-0 right-0 h-1 flex z-[60]">
        <div className="flex-1 bg-[#1a1a1a]"></div>
        <div className="flex-1 bg-[#fafafa]"></div>
        <div className="flex-1 bg-[#007A3D]"></div>
        <div className="flex-1 bg-[#CE1126]"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Tatreez Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 5h-10l5-5zM0 30l5-5v10l-5-5zM60 30l-5 5v-10l5 5zM30 60l-5-5h10l-5 5zM15 15l5 5h-10l5-5zM45 15l5 5h-10l5-5zM15 45l5 5h-10l5-5zM45 45l5 5h-10l5-5z' fill='%23CE1126' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">

            {/* Text Content */}
            <div className="lg:w-7/12 w-full">
              {/* Badge */}
              <div className="inline-block bg-[#007A3D] text-white px-3 py-1.5 mb-6">
                <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase">New Course Available</p>
              </div>

              {/* Massive Headline */}
              <h1 className="mb-6 sm:mb-8">
                <span className="block text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] font-black uppercase text-[#1a1a1a] tracking-tighter">
                  Master
                </span>
                <span className="block text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] font-black uppercase text-[#1a1a1a] tracking-tighter">
                  The Art
                </span>
                <span className="block text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] font-black uppercase tracking-tighter">
                  Of <span className="text-[#CE1126]">Dabka</span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-[#6b7280] max-w-xl mb-8 sm:mb-10 font-medium leading-relaxed">
                Learn the iconic Palestinian traditional dance from anywhere. 15 intensive lessons to take you from first stomp to performance-ready mastery.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16">
                <Link
                  href="/checkout"
                  className="bg-[#CE1126] text-white px-6 sm:px-8 py-4 sm:py-5 text-sm font-black tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_20px_-10px_rgba(206,17,38,0.4)] min-h-[52px]"
                >
                  Start Learning — $29.99
                  <ArrowRightIcon />
                </Link>
                <button className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 sm:px-8 py-4 sm:py-5 text-sm font-black tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-all hover:bg-[#1a1a1a] hover:text-white min-h-[52px]">
                  Watch Preview
                  <PlayIcon />
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 sm:gap-12 border-t border-[#e5e7eb] pt-8">
                <div>
                  <p className="text-2xl sm:text-3xl font-black">1.2k+</p>
                  <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#6b7280] uppercase">Students Enrolled</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black">15</p>
                  <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#6b7280] uppercase">Master Modules</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black">4.9/5</p>
                  <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#6b7280] uppercase">Course Rating</p>
                </div>
              </div>
            </div>

            {/* Video Preview */}
            <div className="lg:w-5/12 w-full">
              <div className="relative aspect-[4/5] sm:aspect-[4/5] bg-[#1a1a1a] group overflow-hidden border-4 sm:border-8 border-white shadow-2xl cursor-pointer">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#CE1126] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayIcon />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#CE1126] flex items-center justify-center">
                      <PlayIcon />
                    </div>
                    <div>
                      <p className="text-white font-black uppercase tracking-widest text-xs">Intro Teaser</p>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">02:45 MINS</p>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-white/20">
                    <div className="w-1/3 h-full bg-[#CE1126]"></div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex flex-col gap-2 z-20">
                  <span className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter">4K Ultra HD</span>
                  <span className="bg-[#CE1126] text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter">Heritage Series</span>
                </div>

                {/* Flag Corner */}
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 flex z-20">
                  <div className="w-1/4 h-full bg-[#1a1a1a]"></div>
                  <div className="w-1/4 h-full bg-[#fafafa]"></div>
                  <div className="w-1/4 h-full bg-[#007A3D]"></div>
                  <div className="w-1/4 h-full bg-[#CE1126]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-[#1a1a1a] py-4 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 sm:space-x-12">
              <span className="text-white/20 font-black text-xl sm:text-3xl uppercase tracking-tighter pl-8 sm:pl-12">Learn the stomp</span>
              <span className="text-[#CE1126] text-xl sm:text-3xl">●</span>
              <span className="text-white/20 font-black text-xl sm:text-3xl uppercase tracking-tighter">Connect with roots</span>
              <span className="text-[#CE1126] text-xl sm:text-3xl">●</span>
              <span className="text-white/20 font-black text-xl sm:text-3xl uppercase tracking-tighter">Master the rhythm</span>
              <span className="text-[#CE1126] text-xl sm:text-3xl">●</span>
              <span className="text-white/20 font-black text-xl sm:text-3xl uppercase tracking-tighter">Heritage in motion</span>
              <span className="text-[#CE1126] text-xl sm:text-3xl">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-24 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#007A3D] mb-4">What Students Say</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              Real Results
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "Finally learned to dance at my cousin's wedding without embarrassing myself. The lessons are clear and easy to follow.", author: "Ahmed K.", location: "Chicago, IL" },
              { quote: "As a diaspora Palestinian, this course helped me reconnect with my culture in a meaningful way. Highly recommend!", author: "Leila M.", location: "Toronto, CA" },
              { quote: "The instructor breaks down every move perfectly. I went from zero to leading the dabka line in two months.", author: "Omar S.", location: "London, UK" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border-2 border-[#e5e7eb] p-6 sm:p-8 hover:border-[#CE1126] transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#CE1126]"><StarIcon /></span>
                  ))}
                </div>
                <p className="text-[#1a1a1a] mb-6 text-sm sm:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="text-sm">
                  <span className="text-[#1a1a1a] font-black uppercase tracking-wide">{testimonial.author}</span>
                  <span className="text-[#6b7280]"> — {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#007A3D] mb-4">The Curriculum</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              15 Lessons. 3 Chapters.
            </h2>
            <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl mx-auto">
              Your journey to mastering dabka starts here. Structured progression from basics to performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-[#fafafa] border-2 border-[#e5e7eb] overflow-hidden hover:border-[#CE1126] transition-colors group"
              >
                <div className="p-6 border-b-2 border-[#e5e7eb] bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#6b7280]">Chapter {chapter.number}</span>
                    <span className="text-[10px] sm:text-xs font-black text-[#007A3D]">{chapter.lessons} Lessons</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-[#CE1126] transition-colors">{chapter.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {chapter.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-[#6b7280]">
                      <span className="text-[#007A3D] flex-shrink-0"><CheckIcon /></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#007A3D] mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              One Price. Lifetime Access.
            </h2>
            <p className="text-base sm:text-lg text-[#6b7280]">
              No subscriptions. No hidden fees. Just pure dabka mastery.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white border-4 border-[#1a1a1a] p-6 sm:p-10 relative">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#CE1126] px-4 py-1">
                <span className="text-xs font-black uppercase tracking-wider text-white">Best Value</span>
              </div>

              <div className="text-center mb-8">
                <p className="text-xs font-black tracking-[0.2em] uppercase text-[#6b7280] mb-2">Complete Course</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black">$29.99</span>
                </div>
                <p className="text-[#6b7280] mt-2 text-sm">One-time payment</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pricingIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="text-[#007A3D] flex-shrink-0"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/checkout"
                className="block w-full py-4 sm:py-5 bg-[#CE1126] text-white font-black uppercase tracking-wider text-center text-sm hover:bg-[#a30d1e] transition-colors"
              >
                Enroll Now
              </Link>

              <p className="text-center text-xs text-[#6b7280] mt-4">
                30-day money-back guarantee. Risk-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-Up Classes Teaser */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#1a1a1a] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-[#CE1126] flex-shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  In-Person Pop-Up Classes
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Join us for live workshops in cities across the nation. Experience dabka with a community.
                </p>
              </div>
            </div>
            <Link
              href="/classes"
              className="shrink-0 w-full md:w-auto px-8 py-4 bg-white text-[#1a1a1a] font-black uppercase tracking-wider text-sm text-center hover:bg-[#CE1126] hover:text-white transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#007A3D] mb-4">Questions?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              FAQ
            </h2>
          </div>

          <div className="divide-y divide-[#e5e7eb] border-t border-b border-[#e5e7eb]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <p className="text-[#6b7280] mb-4 text-sm">Still have questions?</p>
            <Link
              href="/contact"
              className="text-[#CE1126] font-black uppercase tracking-wider hover:underline text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Ready to Start Your
            <span className="block text-[#CE1126]">Dabka Journey?</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-10 sm:mb-12 max-w-2xl mx-auto">
            Join hundreds of students who have already mastered the art of Palestinian traditional dance.
          </p>
          <Link
            href="/checkout"
            className="inline-block px-10 sm:px-12 py-4 sm:py-5 bg-[#CE1126] text-white text-sm sm:text-base font-black uppercase tracking-wider hover:bg-[#a30d1e] transition-colors"
          >
            Enroll Now — $29.99
          </Link>
        </div>
      </section>

      <Footer />

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
