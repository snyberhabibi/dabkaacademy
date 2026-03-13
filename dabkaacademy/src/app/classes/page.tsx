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
    Beginner: "bg-[#2a9d8f]/20 text-[#2a9d8f] border-[#2a9d8f]/30",
    Advanced: "bg-[#e63946]/20 text-[#e63946] border-[#e63946]/30",
    "All Levels": "bg-[#fafafa]/10 text-[#fafafa] border-[#fafafa]/20",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-bold uppercase tracking-wide border ${colors[level]}`}
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
    <div className="bg-[#141414] border border-[#27272a] p-6 hover:border-[#e63946]/50 transition-all duration-300 group">
      {/* City Name */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#fafafa] group-hover:text-[#e63946] transition-colors">
          {classData.city}
        </h3>
        <SkillBadge level={classData.skillLevel} />
      </div>

      {/* Date & Time */}
      <div className="mb-4">
        <p className="text-[#fafafa] font-semibold">{classData.date}</p>
        <p className="text-[#71717a] text-sm">{classData.time}</p>
      </div>

      {/* Venue */}
      <div className="mb-6">
        <p className="text-[#71717a] text-sm">{classData.venue}</p>
        <p className="text-[#71717a] text-xs">{classData.address}</p>
      </div>

      {/* Spots Remaining */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-sm font-medium ${isLowSpots ? "text-[#e63946]" : "text-[#71717a]"}`}
          >
            {classData.spotsRemaining} spots left
          </span>
          <span className="text-[#71717a] text-xs">
            of {classData.totalSpots}
          </span>
        </div>
        <div className="h-1 bg-[#27272a] rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${isLowSpots ? "bg-[#e63946]" : "bg-[#2a9d8f]"}`}
            style={{ width: `${spotsPercentage}%` }}
          />
        </div>
      </div>

      {/* Price & Book Button */}
      <div className="flex items-center justify-between pt-4 border-t border-[#27272a]">
        <span className="text-2xl font-black text-[#fafafa]">
          ${classData.price}
        </span>
        <button className="bg-[#e63946] hover:bg-[#d62839] text-[#fafafa] px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors">
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-[#fafafa] mb-6">
            LEARN IN PERSON
          </h1>
          <p className="text-[#71717a] text-lg md:text-xl max-w-2xl mx-auto">
            Our pop-up dabka classes bring authentic Palestinian dance to cities
            nationwide. Join us for an unforgettable cultural experience.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141414] border border-[#27272a] p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              {/* City Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="appearance-none bg-[#0a0a0a] border border-[#27272a] text-[#fafafa] px-4 py-3 pr-10 text-sm font-medium uppercase tracking-wide focus:outline-none focus:border-[#e63946] cursor-pointer min-w-[180px]"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] pointer-events-none"
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
                <button className="flex items-center gap-2 bg-[#0a0a0a] border border-[#27272a] text-[#71717a] px-4 py-3 text-sm font-medium uppercase tracking-wide hover:border-[#e63946] hover:text-[#fafafa] transition-colors">
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
              <div className="flex border border-[#27272a]">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                    activeTab === "all"
                      ? "bg-[#e63946] text-[#fafafa]"
                      : "bg-transparent text-[#71717a] hover:text-[#fafafa]"
                  }`}
                >
                  All Classes
                </button>
                <button
                  onClick={() => setActiveTab("beginner")}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors border-l border-[#27272a] ${
                    activeTab === "beginner"
                      ? "bg-[#2a9d8f] text-[#fafafa]"
                      : "bg-transparent text-[#71717a] hover:text-[#fafafa]"
                  }`}
                >
                  Beginner
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors border-l border-[#27272a] ${
                    activeTab === "advanced"
                      ? "bg-[#e63946] text-[#fafafa]"
                      : "bg-transparent text-[#71717a] hover:text-[#fafafa]"
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
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classData) => (
                <ClassCard key={classData.id} classData={classData} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#71717a] text-lg">
                No classes found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCity("All Cities");
                  setActiveTab("all");
                }}
                className="mt-4 text-[#e63946] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Private Events Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#e63946] text-sm font-bold uppercase tracking-widest">
                Private Events
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#fafafa] mt-4 mb-6">
                BRING DABKA TO YOUR EVENT
              </h2>
              <p className="text-[#71717a] text-lg mb-8">
                Make your wedding, graduation, or cultural celebration
                unforgettable with a private dabka class. Our instructors travel
                nationwide to bring authentic Palestinian dance to your special
                occasion.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Weddings & engagement parties",
                  "Corporate team building events",
                  "Cultural festivals & celebrations",
                  "School & university programs",
                  "Community gatherings",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#fafafa]"
                  >
                    <svg
                      className="w-5 h-5 text-[#2a9d8f]"
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
                className="inline-block bg-[#e63946] hover:bg-[#d62839] text-[#fafafa] px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-[#27272a] mx-auto mb-4"
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
                  <p className="text-[#71717a] text-sm uppercase tracking-wide">
                    Private Event Image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#fafafa] mb-4">
            GET NOTIFIED ABOUT CLASSES IN YOUR CITY
          </h2>
          <p className="text-[#71717a] mb-8">
            Be the first to know when we announce new pop-up classes near you.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-[#141414] border border-[#27272a] text-[#fafafa] px-4 py-3 text-sm focus:outline-none focus:border-[#e63946] min-w-[250px] placeholder:text-[#71717a]"
            />
            <div className="relative">
              <select
                value={notifyCity}
                onChange={(e) => setNotifyCity(e.target.value)}
                className="appearance-none bg-[#141414] border border-[#27272a] text-[#fafafa] px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#e63946] cursor-pointer min-w-[180px]"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a] pointer-events-none"
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
              className="bg-[#e63946] hover:bg-[#d62839] text-[#fafafa] px-8 py-3 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap"
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
