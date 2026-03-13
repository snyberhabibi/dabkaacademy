import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #CE1126 0px,
              #CE1126 1px,
              transparent 1px,
              transparent 20px
            )`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-[#CE1126] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] border border-[#CE1126] px-3 sm:px-4 py-1.5 sm:py-2">
              Est. 2024
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] uppercase tracking-tighter leading-none mb-5 sm:mb-8">
            Preserving
            <br />
            <span className="text-[#CE1126]">Culture</span>
            <br />
            Through Movement
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-[#6b7280] leading-relaxed px-2">
            We believe that Palestinian dabka is more than a dance. It is resistance,
            celebration, and connection to our roots. Our mission is to make this
            powerful art form accessible to Palestinians and supporters worldwide.
          </p>

          {/* Decorative Line */}
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-10 sm:w-16 h-[2px] bg-[#CE1126]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#CE1126] rotate-45" />
            <div className="w-10 sm:w-16 h-[2px] bg-[#CE1126]" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#007A3D] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight mb-5 sm:mb-8">
                Born From
                <br />
                <span className="text-[#CE1126]">Heritage</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#6b7280] leading-relaxed">
                <p>
                  Dabka Academy was founded with a simple but powerful vision: to ensure
                  that Palestinian dabka continues to thrive across generations and borders.
                  In a world where our culture faces constant erasure, we chose to amplify
                  it through the universal language of movement.
                </p>
                <p>
                  Growing up in the diaspora, many of us felt disconnected from our traditions.
                  We watched dabka at weddings and celebrations, feeling the pull of our
                  ancestors' footsteps, but rarely had the opportunity to learn properly.
                  That changes now.
                </p>
                <p>
                  Our academy bridges the gap between tradition and accessibility. Whether
                  you are in Ramallah, London, or Chicago, you can now learn authentic
                  Palestinian dabka from master instructors who carry decades of knowledge
                  and passion.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                <div className="w-1 h-12 sm:h-16 bg-[#CE1126] flex-shrink-0" />
                <p className="text-sm sm:text-base text-[#1a1a1a] font-medium italic">
                  "Every step we take is a statement. Every stomp is a declaration
                  that we exist, we remember, and we celebrate."
                </p>
              </div>
            </div>

            {/* Founder Photo Placeholder */}
            <div className="relative mx-4 sm:mx-0 order-first lg:order-last">
              <div className="aspect-[4/5] bg-[#ffffff] border border-[#e5e7eb] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full bg-[#e5e7eb] flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-12 sm:h-12 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Founder Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[#CE1126] rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Dabka Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Cultural Image Placeholder */}
            <div className="relative order-2 lg:order-1 mx-4 sm:mx-0">
              <div className="aspect-video bg-[#fafafa] border border-[#e5e7eb] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-sm bg-[#e5e7eb] flex items-center justify-center">
                      <svg className="w-7 h-7 sm:w-10 sm:h-10 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Cultural Image</p>
                  </div>
                </div>
              </div>
              {/* Decorative Corner */}
              <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#007A3D]" />
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#007A3D]" />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[#007A3D] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
                The Art Form
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight mb-5 sm:mb-8">
                What Is
                <br />
                <span className="text-[#CE1126]">Dabka?</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[#6b7280] leading-relaxed">
                <p>
                  Dabka (also spelled Dabke or Dabkeh) is a traditional Levantine folk
                  dance that has been performed by Palestinians for centuries. It originated
                  in the villages of Palestine, where communities would come together to
                  build homes and celebrate harvests.
                </p>
                <p>
                  The dance is characterized by synchronized footwork, linked arms, and
                  the powerful stomping that symbolizes our connection to the land. The
                  leader (lawweeh) guides the line of dancers, improvising movements while
                  the group maintains rhythmic unity.
                </p>
                <p>
                  Today, dabka is performed at weddings, cultural festivals, and gatherings
                  worldwide. It serves as a powerful expression of Palestinian identity,
                  resilience, and joy. When we dance dabka, we carry forward the spirit
                  of generations who danced before us.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center p-2 sm:p-4 bg-[#fafafa] border border-[#e5e7eb] rounded-sm">
                  <p className="text-lg sm:text-2xl font-black text-[#CE1126]">100+</p>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] uppercase tracking-wide mt-1">Years of History</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-[#fafafa] border border-[#e5e7eb] rounded-sm">
                  <p className="text-lg sm:text-2xl font-black text-[#CE1126]">6+</p>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] uppercase tracking-wide mt-1">Regional Styles</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-[#fafafa] border border-[#e5e7eb] rounded-sm">
                  <p className="text-lg sm:text-2xl font-black text-[#CE1126]">1</p>
                  <p className="text-[10px] sm:text-xs text-[#6b7280] uppercase tracking-wide mt-1">United People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Instructor Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#007A3D] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
              Meet Your Guide
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">
              The <span className="text-[#CE1126]">Instructor</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-start">
            {/* Instructor Photo */}
            <div className="lg:col-span-2 mx-auto max-w-xs sm:max-w-none w-full">
              <div className="relative">
                <div className="aspect-square bg-[#ffffff] border border-[#e5e7eb] rounded-sm overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 rounded-full bg-[#e5e7eb] flex items-center justify-center">
                        <svg className="w-10 h-10 sm:w-16 sm:h-16 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Instructor Photo</p>
                    </div>
                  </div>
                </div>
                {/* Name Tag */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-[#CE1126] px-4 sm:px-6 py-2 sm:py-3">
                  <p className="text-[#fafafa] font-black uppercase tracking-wide text-xs sm:text-sm whitespace-nowrap">
                    Master Instructor
                  </p>
                </div>
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="lg:col-span-3 space-y-5 sm:space-y-8 mt-6 sm:mt-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase mb-2">
                  [Instructor Name]
                </h3>
                <p className="text-[#CE1126] font-medium uppercase tracking-wide text-xs sm:text-sm">
                  Founder & Lead Instructor
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#6b7280] leading-relaxed">
                <p>
                  With over 15 years of experience teaching and performing dabka, our
                  lead instructor has dedicated their life to preserving and sharing
                  Palestinian folk dance traditions. Trained by master dancers in
                  Palestine and across the diaspora, they bring authenticity and
                  passion to every lesson.
                </p>
                <p>
                  Their teaching philosophy centers on accessibility without compromise.
                  Every student, regardless of background or skill level, deserves to
                  experience the power of dabka. Through patience, cultural context,
                  and structured progression, they guide students from their first
                  steps to confident performance.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-sm">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#CE1126]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#CE1126]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base text-[#1a1a1a] font-bold">15+ Years</p>
                    <p className="text-[#6b7280] text-xs sm:text-sm truncate">Teaching Experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-sm">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#007A3D]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#007A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base text-[#1a1a1a] font-bold">International</p>
                    <p className="text-[#6b7280] text-xs sm:text-sm truncate">Performance Background</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-sm">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#CE1126]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#CE1126]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base text-[#1a1a1a] font-bold">5,000+</p>
                    <p className="text-[#6b7280] text-xs sm:text-sm truncate">Students Trained</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 p-2.5 sm:p-4 bg-[#ffffff] border border-[#e5e7eb] rounded-sm">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-[#007A3D]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#007A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base text-[#1a1a1a] font-bold">Certified</p>
                    <p className="text-[#6b7280] text-xs sm:text-sm truncate">Traditional Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff] border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#007A3D] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
              The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Our <span className="text-[#CE1126]">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Students Taught */}
            <div className="relative group">
              <div className="bg-[#fafafa] border border-[#e5e7eb] p-4 sm:p-8 text-center rounded-sm transition-all duration-300 hover:border-[#CE1126]">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter mb-1 sm:mb-2">
                  5K<span className="text-[#CE1126]">+</span>
                </div>
                <p className="text-[#6b7280] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-sm font-medium">
                  Students Taught
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CE1126] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Cities Visited */}
            <div className="relative group">
              <div className="bg-[#fafafa] border border-[#e5e7eb] p-4 sm:p-8 text-center rounded-sm transition-all duration-300 hover:border-[#007A3D]">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter mb-1 sm:mb-2">
                  50<span className="text-[#007A3D]">+</span>
                </div>
                <p className="text-[#6b7280] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-sm font-medium">
                  Cities Visited
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#007A3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Countries Reached */}
            <div className="relative group">
              <div className="bg-[#fafafa] border border-[#e5e7eb] p-4 sm:p-8 text-center rounded-sm transition-all duration-300 hover:border-[#CE1126]">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter mb-1 sm:mb-2">
                  25<span className="text-[#CE1126]">+</span>
                </div>
                <p className="text-[#6b7280] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-sm font-medium">
                  Countries Reached
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#CE1126] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Events Performed */}
            <div className="relative group">
              <div className="bg-[#fafafa] border border-[#e5e7eb] p-4 sm:p-8 text-center rounded-sm transition-all duration-300 hover:border-[#007A3D]">
                <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1a1a1a] tracking-tighter mb-1 sm:mb-2">
                  200<span className="text-[#007A3D]">+</span>
                </div>
                <p className="text-[#6b7280] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[10px] sm:text-sm font-medium">
                  Events Performed
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#007A3D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #CE1126 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-[#007A3D] text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 block">
            Take Action
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4 sm:mb-6">
            Join The
            <br />
            <span className="text-[#CE1126]">Movement</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#6b7280] mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Whether you are a complete beginner or looking to refine your skills,
            there is a place for you in our community. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
            <Link
              href="/courses"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#CE1126] text-[#fafafa] font-bold uppercase tracking-wide text-sm hover:bg-[#a80d1e] transition-colors rounded-sm min-h-[52px] flex items-center justify-center"
            >
              Start the Course
            </Link>
            <Link
              href="/events"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold uppercase tracking-wide text-sm hover:bg-[#1a1a1a] hover:text-[#fafafa] transition-colors rounded-sm min-h-[52px] flex items-center justify-center"
            >
              Attend a Pop-Up Class
            </Link>
          </div>

          {/* Social Links */}
          <div className="border-t border-[#e5e7eb] pt-8 sm:pt-12">
            <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">
              Follow the Journey
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ffffff] border border-[#e5e7eb] rounded-sm flex items-center justify-center text-[#6b7280] hover:text-[#CE1126] hover:border-[#CE1126] transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ffffff] border border-[#e5e7eb] rounded-sm flex items-center justify-center text-[#6b7280] hover:text-[#CE1126] hover:border-[#CE1126] transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ffffff] border border-[#e5e7eb] rounded-sm flex items-center justify-center text-[#6b7280] hover:text-[#CE1126] hover:border-[#CE1126] transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-[#ffffff] border border-[#e5e7eb] rounded-sm flex items-center justify-center text-[#6b7280] hover:text-[#CE1126] hover:border-[#CE1126] transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
