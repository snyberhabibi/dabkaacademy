"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SkillLevel = "All Levels" | "Beginner" | "Advanced";
type FilterTab = "all" | "beginner" | "advanced";

interface DabkaClass {
  id: number;
  city: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  price: number;
  spotsRemaining: number;
  totalSpots: number;
  skillLevel: SkillLevel;
}

const mockClasses: DabkaClass[] = [
  {
    id: 1,
    city: "CHICAGO",
    date: "March 25, 2024",
    time: "2:00 PM - 4:00 PM",
    venue: "The Movement Studio",
    address: "1847 W Division St, Chicago, IL",
    price: 45,
    spotsRemaining: 8,
    totalSpots: 25,
    skillLevel: "Beginner",
  },
  {
    id: 2,
    city: "NEW YORK",
    date: "April 2, 2024",
    time: "6:00 PM - 8:00 PM",
    venue: "Brooklyn Dance Center",
    address: "345 Atlantic Ave, Brooklyn, NY",
    price: 55,
    spotsRemaining: 3,
    totalSpots: 30,
    skillLevel: "All Levels",
  },
  {
    id: 3,
    city: "LOS ANGELES",
    date: "April 10, 2024",
    time: "7:00 PM - 9:00 PM",
    venue: "Cultural Arts Space",
    address: "2901 W Sunset Blvd, Los Angeles, CA",
    price: 50,
    spotsRemaining: 12,
    totalSpots: 20,
    skillLevel: "Advanced",
  },
  {
    id: 4,
    city: "DETROIT",
    date: "April 18, 2024",
    time: "3:00 PM - 5:00 PM",
    venue: "Dearborn Community Hall",
    address: "13624 Michigan Ave, Dearborn, MI",
    price: 40,
    spotsRemaining: 15,
    totalSpots: 35,
    skillLevel: "Beginner",
  },
  {
    id: 5,
    city: "HOUSTON",
    date: "April 25, 2024",
    time: "5:00 PM - 7:00 PM",
    venue: "Third Ward Dance Studio",
    address: "4101 San Jacinto St, Houston, TX",
    price: 45,
    spotsRemaining: 6,
    totalSpots: 25,
    skillLevel: "All Levels",
  },
  {
    id: 6,
    city: "BAY AREA",
    date: "May 5, 2024",
    time: "1:00 PM - 3:00 PM",
    venue: "Oakland Arts Collective",
    address: "1428 Alice St, Oakland, CA",
    price: 50,
    spotsRemaining: 20,
    totalSpots: 30,
    skillLevel: "Beginner",
  },
];

const cities = [
  "All Cities",
  "Chicago",
  "New York",
  "Los Angeles",
  "Detroit",
  "Houston",
  "Bay Area",
];

function SkillBadge({ level }: { level: SkillLevel }) {
  const colors = {
    Beginner: "bg-[#007A3D]/10 text-[#007A3D] border-[#007A3D]/30",
    Advanced: "bg-[#CE1126]/10 text-[#CE1126] border-[#CE1126]/30",
    "All Levels": "bg-[#1a1a1a]/10 text-[#1a1a1a] border-[#1a1a1a]/20",
  };

  return (
    <span
      className={`px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wide border whitespace-nowrap ${colors[level]}`}
    >
      {level}
    </span>
  );
}

function ClassCard({ classData }: { classData: DabkaClass }) {
  const spotsPercentage =
    (classData.spotsRemaining / classData.totalSpots) * 100;
  const isLowSpots = classData.spotsRemaining <= 5;

  return (
    <div className="bg-[#ffffff] border border-[#e5e7eb] p-4 sm:p-6 hover:border-[#CE1126]/50 transition-all duration-300 group">
      {/* City Name */}
      <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1a1a1a] group-hover:text-[#CE1126] transition-colors">
          {classData.city}
        </h3>
        <SkillBadge level={classData.skillLevel} />
      </div>

      {/* Date & Time */}
      <div className="mb-3 sm:mb-4">
        <p className="text-sm sm:text-base text-[#1a1a1a] font-semibold">{classData.date}</p>
        <p className="text-[#6b7280] text-xs sm:text-sm">{classData.time}</p>
      </div>

      {/* Venue */}
      <div className="mb-4 sm:mb-6">
        <p className="text-[#6b7280] text-xs sm:text-sm">{classData.venue}</p>
        <p className="text-[#6b7280] text-xs">{classData.address}</p>
      </div>

      {/* Spots Remaining */}
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs sm:text-sm font-medium ${isLowSpots ? "text-[#CE1126]" : "text-[#6b7280]"}`}
          >
            {classData.spotsRemaining} spots left
          </span>
          <span className="text-[#6b7280] text-xs">
            of {classData.totalSpots}
          </span>
        </div>
        <div className="h-1 bg-[#e5e7eb] rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${isLowSpots ? "bg-[#CE1126]" : "bg-[#007A3D]"}`}
            style={{ width: `${spotsPercentage}%` }}
          />
        </div>
      </div>

      {/* Price & Book Button */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#e5e7eb]">
        <span className="text-xl sm:text-2xl font-black text-[#1a1a1a]">
          ${classData.price}
        </span>
        <button className="bg-[#CE1126] hover:bg-[#a80d1e] text-[#fafafa] px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors min-h-[44px]">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default function ClassesPage() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [email, setEmail] = useState("");
  const [notifyCity, setNotifyCity] = useState("");

  const filteredClasses = mockClasses.filter((c) => {
    const cityMatch =
      selectedCity === "All Cities" ||
      c.city.toLowerCase() === selectedCity.toLowerCase();

    const levelMatch =
      activeTab === "all" ||
      (activeTab === "beginner" && c.skillLevel === "Beginner") ||
      (activeTab === "advanced" && c.skillLevel === "Advanced");

    return cityMatch && levelMatch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thanks! We'll notify you about classes in ${notifyCity || "your area"}.`);
    setEmail("");
    setNotifyCity("");
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#1a1a1a] mb-4 sm:mb-6">
            LEARN IN PERSON
          </h1>
          <p className="text-[#6b7280] text-sm sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
            Our pop-up dabka classes bring authentic Palestinian dance to cities
            nationwide. Join us for an unforgettable cultural experience.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#ffffff] border border-[#e5e7eb] p-3 sm:p-4 md:p-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
              {/* City Filter */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none bg-[#fafafa] border border-[#e5e7eb] text-[#1a1a1a] px-3 sm:px-4 py-3 pr-10 text-xs sm:text-sm font-medium uppercase tracking-wide focus:outline-none focus:border-[#CE1126] cursor-pointer w-full sm:min-w-[180px] min-h-[48px]"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Date Range (placeholder) */}
                <button className="flex items-center justify-center gap-2 bg-[#fafafa] border border-[#e5e7eb] text-[#6b7280] px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium uppercase tracking-wide hover:border-[#CE1126] hover:text-[#1a1a1a] transition-colors min-h-[48px]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Select Dates
                </button>
              </div>

              {/* Level Tabs */}
              <div className="flex border border-[#e5e7eb] overflow-x-auto">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap min-h-[44px] ${
                    activeTab === "all"
                      ? "bg-[#CE1126] text-[#fafafa]"
                      : "bg-transparent text-[#6b7280] hover:text-[#1a1a1a]"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("beginner")}
                  className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors border-l border-[#e5e7eb] whitespace-nowrap min-h-[44px] ${
                    activeTab === "beginner"
                      ? "bg-[#007A3D] text-[#fafafa]"
                      : "bg-transparent text-[#6b7280] hover:text-[#1a1a1a]"
                  }`}
                >
                  Beginner
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors border-l border-[#e5e7eb] whitespace-nowrap min-h-[44px] ${
                    activeTab === "advanced"
                      ? "bg-[#CE1126] text-[#fafafa]"
                      : "bg-transparent text-[#6b7280] hover:text-[#1a1a1a]"
                  }`}
                >
                  Advanced
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredClasses.map((classData) => (
                <ClassCard key={classData.id} classData={classData} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 sm:py-16">
              <p className="text-[#6b7280] text-sm sm:text-lg">
                No classes found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCity("All Cities");
                  setActiveTab("all");
                }}
                className="mt-4 text-[#CE1126] text-sm sm:text-base font-semibold hover:underline min-h-[44px]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Private Events Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-[#CE1126] text-xs sm:text-sm font-bold uppercase tracking-widest">
                Private Events
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] mt-3 sm:mt-4 mb-4 sm:mb-6">
                BRING DABKA TO YOUR EVENT
              </h2>
              <p className="text-[#6b7280] text-sm sm:text-lg mb-6 sm:mb-8">
                Make your wedding, graduation, or cultural celebration
                unforgettable with a private dabka class. Our instructors travel
                nationwide to bring authentic Palestinian dance to your special
                occasion.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Weddings & engagement parties",
                  "Corporate team building events",
                  "Cultural festivals & celebrations",
                  "School & university programs",
                  "Community gatherings",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:events@dabkaacademy.com"
                className="inline-block w-full sm:w-auto bg-[#CE1126] hover:bg-[#a80d1e] text-[#fafafa] px-6 sm:px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors text-center min-h-[52px]"
              >
                Contact Us
              </a>
            </div>
            <div className="relative order-first md:order-last">
              <div className="aspect-square bg-[#fafafa] border border-[#e5e7eb] flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 sm:w-24 sm:h-24 text-[#e5e7eb] mx-auto mb-3 sm:mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <p className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wide">
                    Private Event Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] mb-3 sm:mb-4">
            GET NOTIFIED ABOUT CLASSES IN YOUR CITY
          </h2>
          <p className="text-sm sm:text-base text-[#6b7280] mb-6 sm:mb-8">
            Be the first to know when we announce new pop-up classes near you.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:flex-wrap justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-[#ffffff] border border-[#e5e7eb] text-[#1a1a1a] px-4 py-3 text-sm focus:outline-none focus:border-[#CE1126] w-full sm:min-w-[250px] sm:w-auto placeholder:text-[#6b7280] min-h-[48px]"
            />
            <div className="relative w-full sm:w-auto">
              <select
                value={notifyCity}
                onChange={(e) => setNotifyCity(e.target.value)}
                className="appearance-none bg-[#ffffff] border border-[#e5e7eb] text-[#1a1a1a] px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#CE1126] cursor-pointer w-full sm:min-w-[180px] min-h-[48px]"
              >
                <option value="">Select your city</option>
                {cities.slice(1).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="bg-[#CE1126] hover:bg-[#a80d1e] text-[#fafafa] px-6 sm:px-8 py-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap w-full sm:w-auto min-h-[48px]"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
