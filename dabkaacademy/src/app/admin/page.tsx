"use client";

import { useState } from "react";

// Mock data
const recentEnrollments = [
  { id: 1, name: "Ahmad Khalil", email: "ahmad.k@email.com", date: "Mar 11, 2026", status: "Active" },
  { id: 2, name: "Layla Hassan", email: "layla.h@email.com", date: "Mar 10, 2026", status: "Active" },
  { id: 3, name: "Omar Nasser", email: "omar.n@email.com", date: "Mar 9, 2026", status: "Pending" },
  { id: 4, name: "Sara Mahmoud", email: "sara.m@email.com", date: "Mar 8, 2026", status: "Active" },
  { id: 5, name: "Khaled Yousef", email: "khaled.y@email.com", date: "Mar 7, 2026", status: "Active" },
  { id: 6, name: "Noor Ibrahim", email: "noor.i@email.com", date: "Mar 6, 2026", status: "Inactive" },
];

const popUpClasses = [
  { id: 1, city: "Chicago", date: "Mar 20, 2026", spotsBooked: 18, totalSpots: 25 },
  { id: 2, city: "Detroit", date: "Mar 27, 2026", spotsBooked: 22, totalSpots: 30 },
  { id: 3, city: "New York", date: "Apr 3, 2026", spotsBooked: 45, totalSpots: 50 },
  { id: 4, city: "Los Angeles", date: "Apr 10, 2026", spotsBooked: 12, totalSpots: 40 },
];

const videoLessons = [
  { id: 1, title: "Basic Dabka Steps", chapter: "Chapter 1: Foundations", views: 2341 },
  { id: 2, title: "The Dal'ouna Rhythm", chapter: "Chapter 1: Foundations", views: 1892 },
  { id: 3, title: "Shoulder Lock Technique", chapter: "Chapter 2: Group Dynamics", views: 1654 },
  { id: 4, title: "Advanced Footwork Patterns", chapter: "Chapter 3: Advanced Moves", views: 987 },
  { id: 5, title: "Performance Energy", chapter: "Chapter 4: Stage Presence", views: 756 },
];

const navItems = ["Dashboard", "Students", "Classes", "Content", "Settings"];

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Admin Navigation */}
      <nav className="border-b border-[#27272a] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <span className="text-xl font-bold text-[#fafafa]">
                Dabka<span className="text-[#e63946]">Admin</span>
              </span>
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveNav(item)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeNav === item
                        ? "bg-[#27272a] text-[#fafafa]"
                        : "text-[#71717a] hover:text-[#fafafa] hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-[#e63946] hover:bg-[#e63946]/10 rounded-md transition-colors">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Stats Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Students"
                value="523"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
              />
              <StatCard
                title="Revenue"
                value="$15,234"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                accent="green"
              />
              <StatCard
                title="Active Sessions"
                value="12"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              />
              <StatCard
                title="Completion Rate"
                value="67%"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                accent="green"
              />
            </div>

            {/* Recent Enrollments Table */}
            <div className="bg-[#141414] rounded-lg border border-[#27272a]">
              <div className="px-6 py-4 border-b border-[#27272a] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#fafafa]">Recent Enrollments</h2>
                <button className="text-sm text-[#e63946] hover:text-[#e63946]/80 transition-colors">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#27272a]">
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                        Student Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27272a]">
                    {recentEnrollments.map((student) => (
                      <tr key={student.id} className="hover:bg-[#1a1a1a] transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#fafafa]">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#71717a]">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#71717a]">
                          {student.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={student.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pop-Up Classes Management */}
            <div className="bg-[#141414] rounded-lg border border-[#27272a]">
              <div className="px-6 py-4 border-b border-[#27272a] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#fafafa]">Pop-Up Classes</h2>
                <button className="px-4 py-2 bg-[#e63946] text-white text-sm font-medium rounded-md hover:bg-[#e63946]/90 transition-colors">
                  Add New Class
                </button>
              </div>
              <div className="p-6 space-y-4">
                {popUpClasses.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-[#27272a]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#27272a] rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#71717a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#fafafa]">{classItem.city}</p>
                        <p className="text-sm text-[#71717a]">{classItem.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#fafafa]">
                          {classItem.spotsBooked}/{classItem.totalSpots}
                        </p>
                        <p className="text-xs text-[#71717a]">spots booked</p>
                      </div>
                      <div className="w-24 h-2 bg-[#27272a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2a9d8f] rounded-full"
                          style={{ width: `${(classItem.spotsBooked / classItem.totalSpots) * 100}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-[#71717a] hover:text-[#fafafa] hover:bg-[#27272a] rounded-md transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-2 text-[#71717a] hover:text-[#e63946] hover:bg-[#e63946]/10 rounded-md transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Management Section */}
            <div className="bg-[#141414] rounded-lg border border-[#27272a]">
              <div className="px-6 py-4 border-b border-[#27272a] flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#fafafa]">Video Lessons</h2>
                <button className="px-4 py-2 bg-[#27272a] text-[#fafafa] text-sm font-medium rounded-md hover:bg-[#3f3f46] transition-colors">
                  Add New Lesson
                </button>
              </div>
              <div className="divide-y divide-[#27272a]">
                {videoLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="px-6 py-4 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#e63946]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#fafafa]">{lesson.title}</p>
                        <p className="text-sm text-[#71717a]">{lesson.chapter}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-[#71717a]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-sm">{lesson.views.toLocaleString()}</span>
                      </div>
                      <button className="p-2 text-[#71717a] hover:text-[#fafafa] hover:bg-[#27272a] rounded-md transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="hidden lg:block w-64 space-y-4">
            <div className="bg-[#141414] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-semibold text-[#fafafa] mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <QuickActionButton
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  }
                  label="Export Student List"
                />
                <QuickActionButton
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                  label="View Analytics"
                />
                <QuickActionButton
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  }
                  label="Send Announcement"
                />
                <QuickActionButton
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  }
                  label="Manage Payments"
                />
              </div>
            </div>

            {/* System Status */}
            <div className="bg-[#141414] rounded-lg border border-[#27272a] p-4">
              <h3 className="text-sm font-semibold text-[#fafafa] mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#71717a]">API Status</span>
                  <span className="flex items-center gap-2 text-sm text-[#2a9d8f]">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full"></span>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#71717a]">Video CDN</span>
                  <span className="flex items-center gap-2 text-sm text-[#2a9d8f]">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full"></span>
                    Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#71717a]">Payments</span>
                  <span className="flex items-center gap-2 text-sm text-[#2a9d8f]">
                    <span className="w-2 h-2 bg-[#2a9d8f] rounded-full"></span>
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({
  title,
  value,
  icon,
  accent = "default",
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  accent?: "default" | "green";
}) {
  return (
    <div className="bg-[#141414] rounded-lg border border-[#27272a] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[#71717a]">{title}</p>
          <p className={`text-2xl font-bold mt-1 ${accent === "green" ? "text-[#2a9d8f]" : "text-[#fafafa]"}`}>
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${accent === "green" ? "bg-[#2a9d8f]/10 text-[#2a9d8f]" : "bg-[#27272a] text-[#71717a]"}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const styles = {
    Active: "bg-[#2a9d8f]/10 text-[#2a9d8f]",
    Pending: "bg-[#f59e0b]/10 text-[#f59e0b]",
    Inactive: "bg-[#71717a]/10 text-[#71717a]",
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles] || styles.Inactive}`}>
      {status}
    </span>
  );
}

// Quick Action Button Component
function QuickActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#71717a] hover:text-[#fafafa] hover:bg-[#27272a] rounded-md transition-colors">
      {icon}
      {label}
    </button>
  );
}
