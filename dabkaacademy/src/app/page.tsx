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

// Feature icons
const FootstepsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
  </svg>
);

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15.19a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
  </svg>
);

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
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

// Features Data
const features = [
  {
    icon: <FootstepsIcon />,
    title: "Basic Steps",
    description: "Master the foundational steps and rhythms that form the backbone of dabka dance."
  },
  {
    icon: <UsersIcon />,
    title: "Traditional Formations",
    description: "Learn the iconic line formations and synchronized group movements."
  },
  {
    icon: <TrophyIcon />,
    title: "Performance Ready",
    description: "Build the skills and confidence to perform at weddings and cultural events."
  },
  {
    icon: <BookIcon />,
    title: "Cultural Context",
    description: "Understand the rich history and meaning behind every movement."
  },
  {
    icon: <MusicIcon />,
    title: "Music & Rhythm",
    description: "Develop your ear for traditional dabka music and timing."
  },
  {
    icon: <HeartIcon />,
    title: "Community",
    description: "Join a global community of dancers keeping the tradition alive."
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
    <div className="border-b border-[#27272a]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#e63946] transition-colors"
      >
        <span className="text-lg font-semibold pr-4">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-[#71717a]">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #27272a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Accent Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e63946] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2a9d8f] rounded-full blur-[150px] opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#27272a] rounded-full mb-8">
            <span className="w-2 h-2 bg-[#2a9d8f] rounded-full animate-pulse" />
            <span className="text-sm text-[#71717a] uppercase tracking-wider">New Course Available</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6">
            Master the Art of
            <span className="block text-[#e63946]">Dabka</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#71717a] max-w-2xl mx-auto mb-12">
            Learn the iconic Palestinian traditional dance from anywhere in the world.
            From beginner to performance-ready in just 15 lessons.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/checkout"
              className="w-full sm:w-auto px-8 py-4 bg-[#e63946] text-white font-bold uppercase tracking-wider rounded-none hover:bg-[#d62839] transition-colors flex items-center justify-center gap-2"
            >
              Start Learning - $29.99
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#27272a] text-white font-bold uppercase tracking-wider rounded-none hover:border-[#fafafa] transition-colors flex items-center justify-center gap-2">
              <PlayIcon />
              Watch Preview
            </button>
          </div>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-[#141414] border border-[#27272a] flex items-center justify-center group cursor-pointer hover:border-[#e63946] transition-colors">
              <div className="w-20 h-20 bg-[#e63946] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayIcon />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute bottom-6 left-6 text-sm text-[#71717a] uppercase tracking-wider">Preview Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[#71717a] uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#71717a] to-transparent" />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 border-y border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#e63946] mb-2">500+</div>
              <div className="text-[#71717a] uppercase tracking-wider">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#2a9d8f] mb-2">15</div>
              <div className="text-[#71717a] uppercase tracking-wider">HD Lessons</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-5xl md:text-6xl font-black text-[#fafafa] mb-2">
                4.9 <StarIcon />
              </div>
              <div className="text-[#71717a] uppercase tracking-wider">Average Rating</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Finally learned to dance at my cousin's wedding without embarrassing myself. The lessons are clear and easy to follow.", author: "Ahmed K.", location: "Chicago, IL" },
              { quote: "As a diaspora Palestinian, this course helped me reconnect with my culture in a meaningful way. Highly recommend!", author: "Leila M.", location: "Toronto, CA" },
              { quote: "The instructor breaks down every move perfectly. I went from zero to leading the dabka line in two months.", author: "Omar S.", location: "London, UK" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#141414] border border-[#27272a] p-6 hover:border-[#e63946] transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#e63946]"><StarIcon /></span>
                  ))}
                </div>
                <p className="text-[#fafafa] mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="text-sm">
                  <span className="text-[#fafafa] font-semibold">{testimonial.author}</span>
                  <span className="text-[#71717a]"> - {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-xl text-[#71717a] max-w-2xl mx-auto">
              A comprehensive curriculum designed to take you from complete beginner to confident performer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#27272a] p-8 hover:border-[#e63946] transition-all group"
              >
                <div className="text-[#e63946] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2">{feature.title}</h3>
                <p className="text-[#71717a]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-24 bg-[#141414] border-y border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Course Curriculum
            </h2>
            <p className="text-xl text-[#71717a] max-w-2xl mx-auto">
              Three chapters, fifteen lessons, unlimited replays. Your journey to mastering dabka starts here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-[#0a0a0a] border border-[#27272a] overflow-hidden hover:border-[#2a9d8f] transition-colors"
              >
                <div className="p-6 border-b border-[#27272a]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#71717a] uppercase tracking-wider">Chapter {chapter.number}</span>
                    <span className="text-sm text-[#2a9d8f]">{chapter.lessons} Lessons</span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase">{chapter.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {chapter.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#71717a]">
                      <span className="text-[#2a9d8f]"><CheckIcon /></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-[#141414] border border-[#27272a]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#71717a] uppercase tracking-wider">Instructor Photo</span>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#e63946] -z-10" />
            </div>

            {/* Instructor Info */}
            <div>
              <span className="text-sm text-[#e63946] uppercase tracking-wider mb-4 block">Meet Your Instructor</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
                Khalil Nassar
              </h2>
              <div className="space-y-4 text-[#71717a] text-lg">
                <p>
                  With over 15 years of experience performing and teaching dabka, Khalil has dedicated his life to preserving and sharing Palestinian cultural traditions.
                </p>
                <p>
                  Born in Ramallah and now based in the United States, he has performed at hundreds of events and taught thousands of students both in-person and online.
                </p>
                <p>
                  His teaching style combines traditional techniques with modern pedagogy, making the art of dabka accessible to everyone regardless of their background or experience level.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-black text-[#e63946]">15+</div>
                  <div className="text-sm text-[#71717a] uppercase">Years Teaching</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#2a9d8f]">1000+</div>
                  <div className="text-sm text-[#71717a] uppercase">Students Taught</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#fafafa]">50+</div>
                  <div className="text-sm text-[#71717a] uppercase">Events Performed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#141414] border-y border-[#27272a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-[#71717a] max-w-2xl mx-auto">
              One-time payment, lifetime access. No subscriptions, no hidden fees.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-[#0a0a0a] border-2 border-[#e63946] p-8 relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e63946] px-4 py-1">
                <span className="text-sm font-bold uppercase tracking-wider">Best Value</span>
              </div>

              <div className="text-center mb-8">
                <div className="text-sm text-[#71717a] uppercase tracking-wider mb-2">Complete Course</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black">$29.99</span>
                </div>
                <div className="text-[#71717a] mt-2">One-time payment</div>
              </div>

              <ul className="space-y-4 mb-8">
                {pricingIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#2a9d8f]"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/checkout"
                className="block w-full py-4 bg-[#e63946] text-white font-bold uppercase tracking-wider text-center hover:bg-[#d62839] transition-colors"
              >
                Enroll Now
              </Link>

              <p className="text-center text-sm text-[#71717a] mt-4">
                30-day money-back guarantee. Risk-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-Up Classes Teaser */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#e63946]/20 to-[#2a9d8f]/20 border border-[#27272a] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="text-[#e63946]">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
                  In-Person Pop-Up Classes
                </h3>
                <p className="text-[#71717a] text-lg">
                  Join us for live workshops in cities across the nation. Experience dabka with a community.
                </p>
              </div>
            </div>
            <Link
              href="/classes"
              className="shrink-0 px-8 py-4 bg-transparent border-2 border-[#fafafa] text-white font-bold uppercase tracking-wider hover:bg-[#fafafa] hover:text-[#0a0a0a] transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#141414] border-t border-[#27272a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#71717a]">
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="divide-y divide-[#27272a] border-t border-[#27272a]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#71717a] mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="text-[#e63946] font-bold uppercase tracking-wider hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-[#27272a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Ready to Start Your
            <span className="block text-[#e63946]">Dabka Journey?</span>
          </h2>
          <p className="text-xl text-[#71717a] mb-12 max-w-2xl mx-auto">
            Join hundreds of students who have already mastered the art of Palestinian traditional dance.
          </p>
          <Link
            href="/checkout"
            className="inline-block px-12 py-5 bg-[#e63946] text-white text-xl font-bold uppercase tracking-wider hover:bg-[#d62839] transition-colors"
          >
            Enroll Now - $29.99
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
