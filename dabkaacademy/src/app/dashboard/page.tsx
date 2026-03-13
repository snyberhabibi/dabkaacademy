"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Course data structure
const courseData = {
  chapters: [
    {
      id: 1,
      title: "Foundations",
      lessons: [
        { id: 1, title: "Introduction to Dabka", duration: "8 min", completed: true },
        { id: 2, title: "Basic Stance & Posture", duration: "12 min", completed: true },
        { id: 3, title: "The Basic Step (Dabke)", duration: "15 min", completed: true },
        { id: 4, title: "Arm Positions", duration: "10 min", completed: false },
        { id: 5, title: "Rhythm & Counting", duration: "8 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Building Blocks",
      lessons: [
        { id: 6, title: "The Hop Step", duration: "14 min", completed: false },
        { id: 7, title: "Cross Steps", duration: "16 min", completed: false },
        { id: 8, title: "Stamp Variations", duration: "12 min", completed: false },
        { id: 9, title: "Turn Techniques", duration: "18 min", completed: false },
        { id: 10, title: "Combining Movements", duration: "20 min", completed: false },
      ],
    },
    {
      id: 3,
      title: "Performance Ready",
      lessons: [
        { id: 11, title: "Group Formations", duration: "15 min", completed: false },
        { id: 12, title: "Leader Techniques", duration: "22 min", completed: false },
        { id: 13, title: "Traditional Songs", duration: "18 min", completed: false },
        { id: 14, title: "Full Routine Practice", duration: "25 min", completed: false },
        { id: 15, title: "Performance Tips", duration: "12 min", completed: false },
      ],
    },
  ],
};

// Calculate progress
const totalLessons = courseData.chapters.reduce(
  (acc, chapter) => acc + chapter.lessons.length,
  0
);
const completedLessons = courseData.chapters.reduce(
  (acc, chapter) => acc + chapter.lessons.filter((l) => l.completed).length,
  0
);
const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

// Find next incomplete lesson
const findNextLesson = () => {
  for (const chapter of courseData.chapters) {
    for (const lesson of chapter.lessons) {
      if (!lesson.completed) {
        return lesson;
      }
    }
  }
  return null;
};

const nextLesson = findNextLesson();

export default function DashboardPage() {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-1 text-sm font-medium uppercase tracking-widest text-[#e63946]">
                  Welcome back
                </p>
                <h1 className="text-3xl font-black uppercase tracking-tight text-[#fafafa] sm:text-4xl">
                  Yusuf
                </h1>
              </div>

              <Link
                href={nextLesson ? `/lesson/${nextLesson.id}` : "#"}
                className="group inline-flex items-center gap-3 rounded-none bg-[#e63946] px-6 py-4 font-bold uppercase tracking-wide text-[#fafafa] transition-all hover:bg-[#c62f3b] hover:gap-4"
              >
                <span>Continue Learning</span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-[#71717a]">
                  Overall Progress
                </span>
                <span className="text-sm font-bold text-[#fafafa]">
                  {completedLessons}/{totalLessons} lessons ({progressPercentage}%)
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden bg-[#27272a]">
                <div
                  className="h-full bg-gradient-to-r from-[#e63946] to-[#ff6b6b] transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Course Chapters */}
            <div className="space-y-4">
              {courseData.chapters.map((chapter) => {
                const chapterCompleted = chapter.lessons.filter(
                  (l) => l.completed
                ).length;
                const isExpanded = expandedChapters.includes(chapter.id);

                return (
                  <div
                    key={chapter.id}
                    className="border border-[#27272a] bg-[#141414]"
                  >
                    {/* Chapter Header */}
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#1a1a1a]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center border border-[#27272a] bg-[#0a0a0a] font-black text-[#fafafa]">
                          {chapter.id}
                        </div>
                        <div>
                          <h2 className="text-lg font-bold uppercase tracking-wide text-[#fafafa]">
                            Chapter {chapter.id}: {chapter.title}
                          </h2>
                          <p className="text-sm text-[#71717a]">
                            {chapterCompleted}/{chapter.lessons.length} lessons
                            completed
                          </p>
                        </div>
                      </div>
                      <svg
                        className={`h-6 w-6 text-[#71717a] transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Lessons List */}
                    {isExpanded && (
                      <div className="border-t border-[#27272a]">
                        {chapter.lessons.map((lesson, index) => (
                          <Link
                            key={lesson.id}
                            href={`/lesson/${lesson.id}`}
                            className={`flex items-center gap-4 border-b border-[#27272a] p-4 transition-colors last:border-b-0 hover:bg-[#1a1a1a] ${
                              lesson.completed ? "opacity-75" : ""
                            }`}
                          >
                            {/* Completion Status */}
                            <div
                              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                lesson.completed
                                  ? "bg-[#2a9d8f]"
                                  : "border-2 border-[#27272a]"
                              }`}
                            >
                              {lesson.completed ? (
                                <svg
                                  className="h-4 w-4 text-[#fafafa]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : (
                                <span className="text-xs font-bold text-[#71717a]">
                                  {lesson.id}
                                </span>
                              )}
                            </div>

                            {/* Lesson Info */}
                            <div className="flex-1">
                              <h3
                                className={`font-semibold ${
                                  lesson.completed
                                    ? "text-[#71717a] line-through"
                                    : "text-[#fafafa]"
                                }`}
                              >
                                Lesson {lesson.id}: {lesson.title}
                              </h3>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-2">
                              <svg
                                className="h-4 w-4 text-[#71717a]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-sm text-[#71717a]">
                                {lesson.duration}
                              </span>
                            </div>

                            {/* Play Icon */}
                            <div className="flex h-8 w-8 items-center justify-center text-[#e63946]">
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="border border-[#27272a] bg-[#141414] p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#71717a]">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717a]">Lessons Completed</span>
                    <span className="font-bold text-[#fafafa]">
                      {completedLessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717a]">Lessons Remaining</span>
                    <span className="font-bold text-[#fafafa]">
                      {totalLessons - completedLessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717a]">Total Duration</span>
                    <span className="font-bold text-[#fafafa]">3h 45min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717a]">Current Streak</span>
                    <span className="font-bold text-[#e63946]">5 days</span>
                  </div>
                </div>
              </div>

              {/* Certificate Status */}
              <div className="border border-[#27272a] bg-[#141414] p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#71717a]">
                  Certificate
                </h3>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#27272a]">
                    <svg
                      className="h-10 w-10 text-[#27272a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <p className="mb-1 font-semibold text-[#fafafa]">
                    Certificate Locked
                  </p>
                  <p className="text-sm text-[#71717a]">
                    Complete all 15 lessons to unlock your Dabka Academy
                    certificate
                  </p>
                  <div className="mt-4 w-full">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-[#71717a]">Progress</span>
                      <span className="text-[#fafafa]">{progressPercentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden bg-[#27272a]">
                      <div
                        className="h-full bg-[#2a9d8f] transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Lesson Card */}
              {nextLesson && (
                <div className="border-2 border-[#e63946] bg-[#141414] p-6">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e63946]">
                    Up Next
                  </h3>
                  <p className="mb-2 font-bold text-[#fafafa]">
                    Lesson {nextLesson.id}: {nextLesson.title}
                  </p>
                  <p className="mb-4 text-sm text-[#71717a]">
                    {nextLesson.duration}
                  </p>
                  <Link
                    href={`/lesson/${nextLesson.id}`}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#e63946] px-4 py-3 font-bold uppercase tracking-wide text-[#fafafa] transition-colors hover:bg-[#c62f3b]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Start Lesson
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
