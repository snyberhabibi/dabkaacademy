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
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-6 sm:mb-10">
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-1 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#CE1126]">
                  Welcome back
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a]">
                  Yusuf
                </h1>
              </div>

              <Link
                href={nextLesson ? `/lesson/${nextLesson.id}` : "#"}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-none bg-[#CE1126] px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide text-[#fafafa] transition-all hover:bg-[#a80d1e] hover:gap-4 min-h-[48px] w-full sm:w-auto"
              >
                <span>Continue Learning</span>
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1"
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
            <div className="mt-5 sm:mt-8">
              <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
                <span className="text-xs sm:text-sm font-medium text-[#6b7280]">
                  Overall Progress
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#1a1a1a]">
                  {completedLessons}/{totalLessons} lessons ({progressPercentage}%)
                </span>
              </div>
              <div className="h-2 sm:h-3 w-full overflow-hidden bg-[#e5e7eb]">
                <div
                  className="h-full bg-gradient-to-r from-[#CE1126] to-[#ff4d5a] transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_320px]">
            {/* Course Chapters */}
            <div className="space-y-3 sm:space-y-4">
              {courseData.chapters.map((chapter) => {
                const chapterCompleted = chapter.lessons.filter(
                  (l) => l.completed
                ).length;
                const isExpanded = expandedChapters.includes(chapter.id);

                return (
                  <div
                    key={chapter.id}
                    className="border border-[#e5e7eb] bg-[#ffffff]"
                  >
                    {/* Chapter Header */}
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="flex w-full items-center justify-between p-3 sm:p-5 text-left transition-colors hover:bg-[#f9fafb] min-h-[56px]"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border border-[#e5e7eb] bg-[#fafafa] font-black text-sm sm:text-base text-[#1a1a1a] flex-shrink-0">
                          {chapter.id}
                        </div>
                        <div>
                          <h2 className="text-sm sm:text-lg font-bold uppercase tracking-wide text-[#1a1a1a]">
                            Chapter {chapter.id}: {chapter.title}
                          </h2>
                          <p className="text-xs sm:text-sm text-[#6b7280]">
                            {chapterCompleted}/{chapter.lessons.length} lessons
                            completed
                          </p>
                        </div>
                      </div>
                      <svg
                        className={`h-5 w-5 sm:h-6 sm:w-6 text-[#6b7280] transition-transform flex-shrink-0 ml-2 ${
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
                      <div className="border-t border-[#e5e7eb]">
                        {chapter.lessons.map((lesson, index) => (
                          <Link
                            key={lesson.id}
                            href={`/lesson/${lesson.id}`}
                            className={`flex items-center gap-2 sm:gap-4 border-b border-[#e5e7eb] p-3 sm:p-4 transition-colors last:border-b-0 hover:bg-[#f9fafb] min-h-[56px] ${
                              lesson.completed ? "opacity-75" : ""
                            }`}
                          >
                            {/* Completion Status */}
                            <div
                              className={`flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full ${
                                lesson.completed
                                  ? "bg-[#007A3D]"
                                  : "border-2 border-[#e5e7eb]"
                              }`}
                            >
                              {lesson.completed ? (
                                <svg
                                  className="h-3 w-3 sm:h-4 sm:w-4 text-[#fafafa]"
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
                                <span className="text-xs font-bold text-[#6b7280]">
                                  {lesson.id}
                                </span>
                              )}
                            </div>

                            {/* Lesson Info */}
                            <div className="flex-1 min-w-0">
                              <h3
                                className={`text-sm sm:text-base font-semibold truncate ${
                                  lesson.completed
                                    ? "text-[#6b7280] line-through"
                                    : "text-[#1a1a1a]"
                                }`}
                              >
                                <span className="hidden sm:inline">Lesson {lesson.id}: </span>
                                {lesson.title}
                              </h3>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                              <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 text-[#6b7280] hidden sm:block"
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
                              <span className="text-xs sm:text-sm text-[#6b7280]">
                                {lesson.duration}
                              </span>
                            </div>

                            {/* Play Icon */}
                            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center text-[#CE1126] flex-shrink-0">
                              <svg
                                className="h-4 w-4 sm:h-5 sm:w-5"
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
            <div className="space-y-4 sm:space-y-6">
              {/* Quick Stats */}
              <div className="border border-[#e5e7eb] bg-[#ffffff] p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6b7280]">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#6b7280]">Lessons Completed</span>
                    <span className="text-sm sm:text-base font-bold text-[#1a1a1a]">
                      {completedLessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#6b7280]">Lessons Remaining</span>
                    <span className="text-sm sm:text-base font-bold text-[#1a1a1a]">
                      {totalLessons - completedLessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#6b7280]">Total Duration</span>
                    <span className="text-sm sm:text-base font-bold text-[#1a1a1a]">3h 45min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#6b7280]">Current Streak</span>
                    <span className="text-sm sm:text-base font-bold text-[#CE1126]">5 days</span>
                  </div>
                </div>
              </div>

              {/* Certificate Status */}
              <div className="border border-[#e5e7eb] bg-[#ffffff] p-4 sm:p-6">
                <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6b7280]">
                  Certificate
                </h3>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 sm:mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-dashed border-[#e5e7eb]">
                    <svg
                      className="h-8 w-8 sm:h-10 sm:w-10 text-[#e5e7eb]"
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
                  <p className="mb-1 text-sm sm:text-base font-semibold text-[#1a1a1a]">
                    Certificate Locked
                  </p>
                  <p className="text-xs sm:text-sm text-[#6b7280]">
                    Complete all 15 lessons to unlock your Dabka Academy
                    certificate
                  </p>
                  <div className="mt-3 sm:mt-4 w-full">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-[#6b7280]">Progress</span>
                      <span className="text-[#1a1a1a]">{progressPercentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden bg-[#e5e7eb]">
                      <div
                        className="h-full bg-[#007A3D] transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Lesson Card */}
              {nextLesson && (
                <div className="border-2 border-[#CE1126] bg-[#ffffff] p-4 sm:p-6">
                  <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#CE1126]">
                    Up Next
                  </h3>
                  <p className="mb-1 sm:mb-2 text-sm sm:text-base font-bold text-[#1a1a1a]">
                    Lesson {nextLesson.id}: {nextLesson.title}
                  </p>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-[#6b7280]">
                    {nextLesson.duration}
                  </p>
                  <Link
                    href={`/lesson/${nextLesson.id}`}
                    className="inline-flex w-full items-center justify-center gap-2 bg-[#CE1126] px-4 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-[#fafafa] transition-colors hover:bg-[#a80d1e] min-h-[48px]"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
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
