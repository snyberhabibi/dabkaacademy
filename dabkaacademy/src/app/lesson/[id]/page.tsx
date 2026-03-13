"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Mock data for lessons
const mockLessons = [
  {
    id: "1",
    title: "Introduction to Dabka",
    duration: "8:24",
    description:
      "Welcome to Dabka Academy! In this lesson, you'll learn about the rich history and cultural significance of Palestinian dabka dance. We'll cover the basic stance, posture, and the spirit that drives this powerful folk tradition.",
    completed: false,
    chapter: 1,
    chapterTitle: "Getting Started",
    keyTakeaways: [
      "Understanding dabka's roots in Palestinian culture",
      "Proper standing posture and weight distribution",
      "The importance of community in dabka performance",
      "Basic rhythm patterns to listen for",
    ],
    practiceTips: [
      "Practice in front of a mirror to check your posture",
      "Listen to traditional dabka music daily to internalize the rhythm",
      "Start with 10-minute practice sessions and build up",
    ],
  },
  {
    id: "2",
    title: "Basic Footwork - The Foundation",
    duration: "12:15",
    description:
      "Master the foundational footwork patterns that form the backbone of all dabka styles. We'll break down each step slowly and build up speed gradually.",
    completed: false,
    chapter: 1,
    chapterTitle: "Getting Started",
    keyTakeaways: [
      "The basic 3-step pattern",
      "Heel-toe transitions",
      "Keeping time with the beat",
    ],
    practiceTips: [
      "Count out loud while practicing",
      "Use a metronome set to 80 BPM to start",
    ],
  },
  {
    id: "3",
    title: "Arm Positions & Hand Holds",
    duration: "9:45",
    description:
      "Learn the traditional arm positions and how to properly connect with other dancers through the shoulder hold and hand clasp.",
    completed: false,
    chapter: 1,
    chapterTitle: "Getting Started",
    keyTakeaways: [
      "Traditional shoulder hold technique",
      "Arm height and tension",
      "Synchronizing arm movements with footwork",
    ],
    practiceTips: [
      "Practice arm positions while watching TV",
      "Hold the positions for 30 seconds to build endurance",
    ],
  },
  {
    id: "4",
    title: "The Dabke Line Formation",
    duration: "7:30",
    description:
      "Understand how the dabka line works, the role of the leader (lawweeh), and how to move as one unified group.",
    completed: false,
    chapter: 2,
    chapterTitle: "Group Dynamics",
    keyTakeaways: [
      "Role of the lawweeh (leader)",
      "Maintaining line formation",
      "Reading cues from other dancers",
    ],
    practiceTips: [
      "Watch videos of professional dabka groups",
      "Practice with family members or friends",
    ],
  },
  {
    id: "5",
    title: "Rhythm & Timing Deep Dive",
    duration: "11:00",
    description:
      "A detailed exploration of dabka rhythms, understanding the tabla patterns, and how to stay perfectly in sync with the music.",
    completed: false,
    chapter: 2,
    chapterTitle: "Group Dynamics",
    keyTakeaways: [
      "Common dabka rhythm patterns",
      "Listening for the tabla cues",
      "Recovering when you lose the beat",
    ],
    practiceTips: [
      "Clap along to dabka music before dancing",
      "Record yourself and compare to the beat",
    ],
  },
];

// Group lessons by chapter
const chapters = mockLessons.reduce(
  (acc, lesson) => {
    const existing = acc.find((c) => c.number === lesson.chapter);
    if (existing) {
      existing.lessons.push(lesson);
    } else {
      acc.push({
        number: lesson.chapter,
        title: lesson.chapterTitle,
        lessons: [lesson],
      });
    }
    return acc;
  },
  [] as { number: number; title: string; lessons: typeof mockLessons }[]
);

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [chapterOpen, setChapterOpen] = useState<number | null>(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // In a real app, we'd use React.use() or await params
  // For now, we'll extract the ID from the URL on the client side
  const lessonId =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").pop()
      : "1";

  const currentLesson =
    mockLessons.find((l) => l.id === lessonId) || mockLessons[0];
  const currentIndex = mockLessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? mockLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < mockLessons.length - 1
      ? mockLessons[currentIndex + 1]
      : null;
  const totalLessons = mockLessons.length;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Palestinian Flag Stripe - Top */}
      <div className="fixed top-0 left-0 right-0 h-1 flex z-[60]">
        <div className="flex-1 bg-[#1a1a1a]"></div>
        <div className="flex-1 bg-[#fafafa]"></div>
        <div className="flex-1 bg-[#007A3D]"></div>
        <div className="flex-1 bg-[#CE1126]"></div>
      </div>

      <Navbar />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to Dashboard */}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#1a1a1a] transition-colors mb-6 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
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
            <span className="text-sm font-medium uppercase tracking-wide">
              Back to Dashboard
            </span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                    Lesson {currentLesson.id}: {currentLesson.title}
                  </h1>
                  <span className="text-[#6b7280] text-sm font-medium bg-[#ffffff] px-3 py-1  border border-[#e5e7eb]">
                    {currentLesson.duration}
                  </span>
                </div>

                {/* Video Placeholder */}
                <div className="relative aspect-video bg-[#ffffff]  border border-[#e5e7eb] overflow-hidden group cursor-pointer hover:border-accent transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Play Button */}
                    <div className="w-20 h-20  bg-[#CE1126]/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#CE1126]  animate-pulse" />
                      <span className="text-xs text-white/80 font-medium uppercase tracking-wide">
                        Ready to Play
                      </span>
                    </div>
                    <span className="text-xs text-white/60">HD Quality</span>
                  </div>
                </div>
              </div>

              {/* Lesson Navigation */}
              <div className="flex items-center justify-between bg-[#ffffff]  border border-[#e5e7eb] p-4">
                <Link
                  href={prevLesson ? `/lesson/${prevLesson.id}` : "#"}
                  className={`flex items-center gap-2 px-4 py-2  transition-all ${
                    prevLesson
                      ? "bg-[#fafafa] hover:bg-[#ffffff]-hover text-[#1a1a1a] border border-[#e5e7eb]"
                      : "bg-[#fafafa]/50 text-[#6b7280] cursor-not-allowed border border-[#e5e7eb]/50"
                  }`}
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
                  <span className="text-sm font-medium">Previous</span>
                </Link>

                <span className="text-[#6b7280] text-sm font-medium">
                  Lesson {currentIndex + 1} of {totalLessons}
                </span>

                <Link
                  href={nextLesson ? `/lesson/${nextLesson.id}` : "#"}
                  className={`flex items-center gap-2 px-4 py-2  transition-all ${
                    nextLesson
                      ? "bg-[#fafafa] hover:bg-[#ffffff]-hover text-[#1a1a1a] border border-[#e5e7eb]"
                      : "bg-[#fafafa]/50 text-[#6b7280] cursor-not-allowed border border-[#e5e7eb]/50"
                  }`}
                >
                  <span className="text-sm font-medium">Next</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Mark as Complete Button */}
              <button
                onClick={() => setIsCompleted(!isCompleted)}
                className={`w-full py-4  font-bold text-sm uppercase tracking-wide transition-all ${
                  isCompleted
                    ? "bg-[#CE1126]-green text-white"
                    : "bg-[#CE1126] hover:bg-[#CE1126]/90 text-white"
                }`}
              >
                {isCompleted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
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
                    Completed
                  </span>
                ) : (
                  "Mark as Complete"
                )}
              </button>

              {/* Lesson Info Panel */}
              <div className="bg-[#ffffff]  border border-[#e5e7eb] p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 uppercase tracking-wide">
                    About This Lesson
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    {currentLesson.description}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CE1126] " />
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2">
                    {currentLesson.keyTakeaways.map((takeaway, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#6b7280]"
                      >
                        <svg
                          className="w-5 h-5 text-[#CE1126]-green mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practice Tips */}
                <div className="bg-[#fafafa]  p-4 border border-[#e5e7eb]">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#CE1126]-green " />
                    Practice Tips
                  </h3>
                  <ul className="space-y-2">
                    {currentLesson.practiceTips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#6b7280]"
                      >
                        <span className="text-[#CE1126] font-bold text-sm">
                          {index + 1}.
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Chapter Overview */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-[#ffffff]  border border-[#e5e7eb] overflow-hidden">
                  <div className="p-4 border-b border-[#e5e7eb]">
                    <h2 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide">
                      Course Content
                    </h2>
                    <p className="text-sm text-[#6b7280] mt-1">
                      {totalLessons} lessons
                    </p>
                  </div>

                  <div className="divide-y divide-border">
                    {chapters.map((chapter) => (
                      <div key={chapter.number}>
                        {/* Chapter Header */}
                        <button
                          onClick={() =>
                            setChapterOpen(
                              chapterOpen === chapter.number
                                ? null
                                : chapter.number
                            )
                          }
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#ffffff]-hover transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded bg-[#CE1126]/20 text-[#CE1126] text-xs font-bold flex items-center justify-center">
                              {chapter.number}
                            </span>
                            <span className="font-semibold text-[#1a1a1a] text-sm">
                              {chapter.title}
                            </span>
                          </div>
                          <svg
                            className={`w-4 h-4 text-[#6b7280] transition-transform ${
                              chapterOpen === chapter.number ? "rotate-180" : ""
                            }`}
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
                        </button>

                        {/* Chapter Lessons */}
                        {chapterOpen === chapter.number && (
                          <div className="bg-[#fafafa]">
                            {chapter.lessons.map((lesson) => {
                              const isCurrent = lesson.id === currentLesson.id;
                              const lessonCompleted =
                                lesson.id === currentLesson.id
                                  ? isCompleted
                                  : lesson.completed;

                              return (
                                <Link
                                  key={lesson.id}
                                  href={`/lesson/${lesson.id}`}
                                  className={`flex items-center gap-3 px-4 py-3 border-l-2 transition-colors ${
                                    isCurrent
                                      ? "border-l-accent bg-[#CE1126]/10"
                                      : "border-l-transparent hover:bg-[#ffffff]-hover"
                                  }`}
                                >
                                  {/* Completion Status */}
                                  <div
                                    className={`w-5 h-5  flex items-center justify-center flex-shrink-0 ${
                                      lessonCompleted
                                        ? "bg-[#CE1126]-green"
                                        : "border border-[#e5e7eb]"
                                    }`}
                                  >
                                    {lessonCompleted && (
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={3}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    )}
                                  </div>

                                  {/* Lesson Info */}
                                  <div className="flex-1 min-w-0">
                                    <p
                                      className={`text-sm truncate ${
                                        isCurrent
                                          ? "text-[#1a1a1a] font-medium"
                                          : "text-[#6b7280]"
                                      }`}
                                    >
                                      {lesson.title}
                                    </p>
                                    <p className="text-xs text-[#6b7280]/60">
                                      {lesson.duration}
                                    </p>
                                  </div>

                                  {/* Current Indicator */}
                                  {isCurrent && (
                                    <div className="w-2 h-2  bg-[#CE1126] animate-pulse" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
