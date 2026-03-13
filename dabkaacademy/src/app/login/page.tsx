"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-[#ffffff] border border-[#e5e7eb] rounded-2xl p-8 shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-[#1a1a1a] uppercase">
            Dabka<span className="text-[#CE1126]">.</span>Academy
          </h1>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Welcome Back</h2>
          <p className="text-[#6b7280] text-sm">
            Continue your dabka journey
          </p>
        </div>

        {/* Google Sign-In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-[#1a1a1a] hover:bg-[#333333] text-[#fafafa] font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
        >
          {/* Google Icon SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-[#e5e7eb]"></div>
          <span className="text-[#6b7280] text-sm uppercase tracking-wider font-medium">or</span>
          <div className="flex-1 h-px bg-[#e5e7eb]"></div>
        </div>

        {/* Email Input (Disabled) */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6b7280] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              disabled
              className="w-full bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#6b7280] placeholder-[#9ca3af] cursor-not-allowed opacity-50 focus:outline-none"
            />
          </div>

          {/* Password Input (Disabled) */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#6b7280] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              disabled
              className="w-full bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#6b7280] placeholder-[#9ca3af] cursor-not-allowed opacity-50 focus:outline-none"
            />
          </div>
        </div>

        {/* Sign In Button (Disabled) */}
        <button
          type="button"
          disabled
          className="w-full bg-[#CE1126] text-[#fafafa] font-semibold py-4 px-6 rounded-xl opacity-50 cursor-not-allowed"
        >
          Sign In
        </button>

        {/* Get Started Link */}
        <p className="text-center mt-6 text-[#6b7280] text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#CE1126] font-semibold hover:underline transition-all"
          >
            Get Started
          </Link>
        </p>

        {/* Back to Home */}
        <div className="text-center mt-6 pt-6 border-t border-[#e5e7eb]">
          <Link
            href="/"
            className="text-[#6b7280] text-sm hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
