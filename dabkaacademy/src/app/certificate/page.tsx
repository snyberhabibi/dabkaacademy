"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Social media icons as SVG components
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Palestinian embroidery-inspired decorative pattern
const DecorativePattern = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 20" fill="none">
    <pattern id="tatreez" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M10 0L15 5L10 10L5 5Z" fill="currentColor" fillOpacity="0.3"/>
      <path d="M0 10L5 15L0 20" fill="currentColor" fillOpacity="0.2"/>
      <path d="M20 10L15 15L20 20" fill="currentColor" fillOpacity="0.2"/>
    </pattern>
    <rect width="100" height="20" fill="url(#tatreez)"/>
  </svg>
);

export default function CertificatePage() {
  // Placeholder data - in a real app, this would come from user data/API
  const studentName = "[Student Name]";
  const completionDate = "March 12, 2026";
  const totalWatchTime = "4.5";
  const certificateId = "DA-2026-0312-XXXX";

  const handleDownload = () => {
    // Placeholder for PDF download functionality
    alert("PDF download functionality coming soon!");
  };

  const handleShare = (platform: string) => {
    // Placeholder for social sharing
    const shareText = encodeURIComponent("I just completed the Palestinian Dabka Course at Dabka Academy! #DabkaAcademy #PalestinianDance #Dabka");
    const shareUrl = encodeURIComponent("https://dabka.academy/certificate");

    const urls: Record<string, string> = {
      instagram: "https://instagram.com",
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    };

    window.open(urls[platform], "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Celebration Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#007A3D]/10 border border-[#007A3D]/30 rounded-full mb-4 sm:mb-6">
              <CheckIcon />
              <span className="text-[#007A3D] text-xs sm:text-sm font-medium uppercase tracking-wide">
                Course Completed
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3 sm:mb-4">
              Congratulations!
            </h1>
            <p className="text-sm sm:text-lg text-[#6b7280] max-w-2xl mx-auto px-2">
              You&apos;ve mastered the art of Palestinian dabka! Your dedication to preserving
              this beautiful cultural tradition is truly inspiring.
            </p>
          </div>

          {/* Certificate Display */}
          <div className="relative mb-8 sm:mb-12">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#CE1126]/10 to-[#007A3D]/10 rounded-2xl blur-3xl" />

            {/* Certificate Card */}
            <div className="relative bg-gradient-to-br from-[#f5f5f5] to-[#ffffff] rounded-xl sm:rounded-2xl border border-[#e5e7eb] p-1.5 sm:p-2 md:p-3 shadow-xl">
              {/* Certificate Inner - Premium Design */}
              <div
                id="certificate"
                className="relative bg-[#fafafa] rounded-xl overflow-hidden"
                style={{ aspectRatio: "1.414/1" }}
              >
                {/* Decorative border */}
                <div className="absolute inset-4 sm:inset-6 border-2 border-[#1a1a1a]/20 rounded-lg" />
                <div className="absolute inset-6 sm:inset-8 border border-[#1a1a1a]/10 rounded" />

                {/* Corner decorations - Palestinian embroidery inspired */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full text-[#CE1126]">
                    <path d="M0 0L16 16L0 32" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M0 0L32 0L16 16" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rotate-90">
                  <svg viewBox="0 0 64 64" className="w-full h-full text-[#CE1126]">
                    <path d="M0 0L16 16L0 32" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M0 0L32 0L16 16" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 -rotate-90">
                  <svg viewBox="0 0 64 64" className="w-full h-full text-[#CE1126]">
                    <path d="M0 0L16 16L0 32" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M0 0L32 0L16 16" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rotate-180">
                  <svg viewBox="0 0 64 64" className="w-full h-full text-[#CE1126]">
                    <path d="M0 0L16 16L0 32" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M0 0L32 0L16 16" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="3" fill="currentColor"/>
                  </svg>
                </div>

                {/* Certificate Content */}
                <div className="relative h-full flex flex-col items-center justify-center px-8 sm:px-16 py-8 sm:py-12 text-center">
                  {/* Top decorative pattern */}
                  <DecorativePattern className="w-48 sm:w-64 h-5 text-[#CE1126] mb-4 sm:mb-6" />

                  {/* Header */}
                  <h2 className="text-2xl sm:text-4xl font-black text-[#1a1a1a] tracking-[0.2em] uppercase mb-2">
                    DABKA ACADEMY
                  </h2>

                  {/* Subtitle line */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                    <div className="w-8 sm:w-16 h-px bg-[#1a1a1a]/30" />
                    <span className="text-[#CE1126] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">Est. 2024</span>
                    <div className="w-8 sm:w-16 h-px bg-[#1a1a1a]/30" />
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-lg sm:text-2xl font-light text-[#1a1a1a]/80 tracking-wide mb-4 sm:mb-8">
                    Certificate of Completion
                  </h3>

                  {/* Presented to */}
                  <p className="text-xs sm:text-sm text-[#1a1a1a]/60 uppercase tracking-widest mb-2">
                    This certifies that
                  </p>

                  {/* Student Name */}
                  <div className="mb-4 sm:mb-6">
                    <p className="text-2xl sm:text-4xl font-bold text-[#1a1a1a] border-b-2 border-[#CE1126] pb-2 px-4 sm:px-8">
                      {studentName}
                    </p>
                  </div>

                  {/* Course completion text */}
                  <p className="text-sm sm:text-lg text-[#1a1a1a]/80 max-w-md mb-4 sm:mb-8">
                    Has successfully completed the<br />
                    <span className="font-semibold text-[#1a1a1a]">Palestinian Dabka Course</span>
                  </p>

                  {/* Date and signature area */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mt-2 sm:mt-4">
                    <div className="text-center">
                      <p className="text-xs text-[#1a1a1a]/50 uppercase tracking-wider mb-1">Date of Completion</p>
                      <p className="text-sm sm:text-base font-medium text-[#1a1a1a]">{completionDate}</p>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-[#1a1a1a]/20" />
                    <div className="text-center">
                      <p className="text-xs text-[#1a1a1a]/50 uppercase tracking-wider mb-1">Certificate ID</p>
                      <p className="text-sm sm:text-base font-mono text-[#1a1a1a]/70">{certificateId}</p>
                    </div>
                  </div>

                  {/* Bottom decorative pattern */}
                  <DecorativePattern className="w-48 sm:w-64 h-5 text-[#007A3D] mt-4 sm:mt-6 rotate-180" />
                </div>

                {/* Watermark */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#CE1126] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-lg sm:text-2xl">DA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 bg-[#CE1126] hover:bg-[#a80d1e] text-white text-sm sm:text-base font-bold uppercase tracking-wide rounded-lg transition-all hover:scale-105 min-h-[52px]"
            >
              <DownloadIcon />
              Download Certificate
            </button>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#6b7280] text-xs sm:text-sm hidden sm:inline">Share:</span>
              <button
                onClick={() => handleShare("instagram")}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ffffff] hover:bg-[#f5f5f5] border border-[#e5e7eb] text-[#1a1a1a] rounded-lg transition-colors"
                aria-label="Share on Instagram"
              >
                <InstagramIcon />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ffffff] hover:bg-[#f5f5f5] border border-[#e5e7eb] text-[#1a1a1a] rounded-lg transition-colors"
                aria-label="Share on Twitter"
              >
                <TwitterIcon />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#ffffff] hover:bg-[#f5f5f5] border border-[#e5e7eb] text-[#1a1a1a] rounded-lg transition-colors"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon />
              </button>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16">
            <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-xl p-4 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#007A3D] mb-1 sm:mb-2">15</p>
              <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Lessons Completed</p>
            </div>
            <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-xl p-4 sm:p-6 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#CE1126] mb-1 sm:mb-2">{totalWatchTime}</p>
              <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Hours Watch Time</p>
            </div>
            <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-xl p-4 sm:p-6 text-center">
              <p className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1 sm:mb-2">{completionDate}</p>
              <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">Completed On</p>
            </div>
          </div>

          {/* Pop-up Classes CTA */}
          <div className="bg-gradient-to-r from-[#CE1126]/5 via-[#ffffff] to-[#007A3D]/5 border border-[#e5e7eb] rounded-2xl p-5 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3 sm:mb-4">
              Keep the Momentum Going
            </h3>
            <p className="text-sm sm:text-lg text-[#6b7280] max-w-2xl mx-auto mb-6 sm:mb-8">
              Now that you&apos;ve completed the online course, join our pop-up classes to practice
              in person with other dancers! Experience the energy of dancing dabka together
              and connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/pop-up-classes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-[#1a1a1a] hover:bg-[#333333] text-[#fafafa] text-sm sm:text-base font-bold uppercase tracking-wide rounded-lg transition-all hover:scale-105 min-h-[52px]"
              >
                Find Pop-Up Classes
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 border border-[#e5e7eb] hover:border-[#1a1a1a]/30 text-[#1a1a1a] text-sm sm:text-base font-medium uppercase tracking-wide rounded-lg transition-colors min-h-[52px]"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
