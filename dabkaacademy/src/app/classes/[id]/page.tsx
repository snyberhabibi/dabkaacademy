"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for classes
const classesData: Record<string, ClassData> = {
  "chicago-march-2024": {
    id: "chicago-march-2024",
    city: "CHICAGO",
    date: "Saturday, March 25, 2024",
    time: "2:00 PM - 5:00 PM",
    skillLevel: "Beginner Friendly",
    price: 45,
    spotsRemaining: 8,
    totalSpots: 20,
    venue: {
      name: "Chicago Cultural Center - Dance Studio B",
      address: "78 E Washington St",
      city: "Chicago, IL 60602",
      fullAddress: "78 E Washington St, Chicago, IL 60602",
    },
    description: {
      whatToExpect:
        "Join us for an immersive 3-hour dabka workshop where you'll learn the foundational steps, rhythms, and cultural significance of this powerful Palestinian folk dance. We'll start with a warm-up, move through basic footwork patterns, and by the end, you'll be dancing in formation with the group.",
      whatToBring: [
        "Comfortable clothes you can move in",
        "Water bottle",
        "Light snacks (optional)",
        "Positive energy and willingness to learn",
      ],
      skillLevelDetails:
        "No prior dance experience required. This workshop is designed for complete beginners, though dancers of all levels are welcome. We focus on building confidence and community alongside technique.",
    },
    instructor: {
      name: "Ahmad Khalil",
      bio: "Ahmad has been teaching dabka for over 15 years, learning from masters in Ramallah and Nablus. He founded Dabka Academy to preserve and share Palestinian dance traditions with the diaspora and beyond.",
      photoPlaceholder: "AK",
    },
    policies: {
      cancellation:
        "Full refund if cancelled 48+ hours before class. 50% refund within 48 hours. No refunds for no-shows, but you may transfer your spot to another person.",
      whatToWear:
        "Wear comfortable, breathable clothing that allows freedom of movement. Flat-soled shoes or clean socks recommended. Traditional dabka is often danced in boots, but any comfortable flat shoe works for beginners.",
    },
  },
  "nyc-april-2024": {
    id: "nyc-april-2024",
    city: "NEW YORK",
    date: "Saturday, April 6, 2024",
    time: "1:00 PM - 4:00 PM",
    skillLevel: "All Levels",
    price: 55,
    spotsRemaining: 3,
    totalSpots: 25,
    venue: {
      name: "Brooklyn Arts Exchange",
      address: "421 5th Ave",
      city: "Brooklyn, NY 11215",
      fullAddress: "421 5th Ave, Brooklyn, NY 11215",
    },
    description: {
      whatToExpect:
        "Experience the energy of dabka in the heart of Brooklyn. This intensive workshop covers traditional formations, the role of the lawweeh (leader), and the connection between movement and music.",
      whatToBring: [
        "Comfortable athletic wear",
        "Water bottle",
        "Towel",
        "Open mind and ready feet",
      ],
      skillLevelDetails:
        "Open to all skill levels. Beginners will learn fundamentals while experienced dancers can refine technique and learn new variations.",
    },
    instructor: {
      name: "Layla Mansour",
      bio: "Layla is a Brooklyn-based dancer and choreographer specializing in Palestinian folk dance. She has performed internationally and is passionate about making dabka accessible to new generations.",
      photoPlaceholder: "LM",
    },
    policies: {
      cancellation:
        "Full refund available up to 72 hours before the workshop. Transfers welcome anytime.",
      whatToWear:
        "Athletic or comfortable casual clothing. Avoid restrictive jeans. Flat shoes or socks preferred.",
    },
  },
};

interface ClassData {
  id: string;
  city: string;
  date: string;
  time: string;
  skillLevel: string;
  price: number;
  spotsRemaining: number;
  totalSpots: number;
  venue: {
    name: string;
    address: string;
    city: string;
    fullAddress: string;
  };
  description: {
    whatToExpect: string;
    whatToBring: string[];
    skillLevelDetails: string;
  };
  instructor: {
    name: string;
    bio: string;
    photoPlaceholder: string;
  };
  policies: {
    cancellation: string;
    whatToWear: string;
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ClassBookingPage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resolve params
  if (!resolvedParams) {
    params.then(setResolvedParams);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted">Loading...</div>
      </div>
    );
  }

  const classData = classesData[resolvedParams.id] || classesData["chicago-march-2024"];
  const totalPrice = classData.price * quantity;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(`Booking confirmed for ${quantity} spot(s)! Total: $${totalPrice}`);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 text-sm uppercase tracking-wide"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Classes
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Class Details Header */}
              <section className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground mb-2">
                      {classData.city}
                    </h1>
                    <p className="text-muted text-lg">
                      {classData.date} <span className="text-accent">•</span> {classData.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-foreground">
                      ${classData.price}
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-accent-green/20 text-accent-green text-xs font-bold uppercase tracking-wide rounded">
                      {classData.skillLevel}
                    </span>
                  </div>
                </div>

                {/* Spots Remaining */}
                <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      classData.spotsRemaining <= 5
                        ? "bg-accent animate-pulse"
                        : "bg-accent-green"
                    }`}
                  />
                  <span
                    className={`font-bold uppercase tracking-wide text-sm ${
                      classData.spotsRemaining <= 5 ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {classData.spotsRemaining} spots remaining
                  </span>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-green transition-all"
                      style={{
                        width: `${
                          ((classData.totalSpots - classData.spotsRemaining) /
                            classData.totalSpots) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </section>

              {/* Venue Information */}
              <section className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold uppercase tracking-tight text-foreground mb-4">
                  Venue
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {classData.venue.name}
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {classData.venue.address}
                      <br />
                      {classData.venue.city}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        classData.venue.fullAddress
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                  <div className="bg-border/50 rounded-lg h-40 flex items-center justify-center">
                    <span className="text-muted uppercase tracking-wide text-sm font-medium">
                      Map
                    </span>
                  </div>
                </div>
              </section>

              {/* Class Description */}
              <section className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold uppercase tracking-tight text-foreground mb-6">
                  About This Class
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-2">
                      What to Expect
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {classData.description.whatToExpect}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-2">
                      What to Bring
                    </h3>
                    <ul className="space-y-2">
                      {classData.description.whatToBring.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted"
                        >
                          <span className="text-accent-green mt-1">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-2">
                      Skill Level
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {classData.description.skillLevelDetails}
                    </p>
                  </div>
                </div>
              </section>

              {/* Instructor Info */}
              <section className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold uppercase tracking-tight text-foreground mb-6">
                  Your Instructor
                </h2>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-lg">
                      {classData.instructor.photoPlaceholder}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">
                      {classData.instructor.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {classData.instructor.bio}
                    </p>
                  </div>
                </div>
              </section>

              {/* Policies */}
              <section className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-xl font-bold uppercase tracking-tight text-foreground mb-6">
                  Policies
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-muted mb-2">
                      Cancellation Policy
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {classData.policies.cancellation}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-muted mb-2">
                      What to Wear
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {classData.policies.whatToWear}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h2 className="text-xl font-bold uppercase tracking-tight text-foreground mb-6">
                    Book Your Spot
                  </h2>

                  <div className="space-y-4">
                    {/* Quantity */}
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-muted mb-2 uppercase tracking-wide"
                      >
                        Number of Spots
                      </label>
                      <select
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num} disabled={num > classData.spotsRemaining}>
                            {num} {num === 1 ? "spot" : "spots"} - ${classData.price * num}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted mb-2 uppercase tracking-wide"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted mb-2 uppercase tracking-wide"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-muted mb-2 uppercase tracking-wide"
                      >
                        Phone <span className="text-muted/50">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-medium text-muted mb-2 uppercase tracking-wide"
                      >
                        Special Requests <span className="text-muted/50">(optional)</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                        placeholder="Any allergies, accessibility needs, or questions..."
                      />
                    </div>

                    {/* Price Summary */}
                    <div className="border-t border-border pt-4 mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted">
                          ${classData.price} x {quantity} {quantity === 1 ? "spot" : "spots"}
                        </span>
                        <span className="text-foreground font-medium">
                          ${totalPrice}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-bold">Total</span>
                        <span className="text-2xl font-black text-foreground">
                          ${totalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || classData.spotsRemaining === 0}
                      className="w-full bg-accent hover:bg-accent/90 disabled:bg-muted disabled:cursor-not-allowed text-white font-bold uppercase tracking-wide py-4 rounded-lg transition-colors mt-4"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Processing...
                        </span>
                      ) : classData.spotsRemaining === 0 ? (
                        "Sold Out"
                      ) : (
                        `Book Now - $${totalPrice}`
                      )}
                    </button>
                  </div>
                </form>

                {/* Trust Badges */}
                <div className="mt-4 p-4 bg-card border border-border rounded-lg">
                  <div className="flex items-center justify-center gap-6 text-muted text-xs uppercase tracking-wide">
                    <div className="flex items-center gap-2">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Secure
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Instant Confirm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
