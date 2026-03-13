"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* Palestinian Flag Stripe - Top */}
      <div className="fixed top-0 left-0 right-0 h-1 flex z-[60]">
        <div className="flex-1 bg-[#1a1a1a]"></div>
        <div className="flex-1 bg-[#fafafa]"></div>
        <div className="flex-1 bg-[#007A3D]"></div>
        <div className="flex-1 bg-[#CE1126]"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 5h-10l5-5zM0 30l5-5v10l-5-5zM60 30l-5 5v-10l5 5zM30 60l-5-5h10l-5 5zM15 15l5 5h-10l5-5zM45 15l5 5h-10l5-5zM15 45l5 5h-10l5-5zM45 45l5 5h-10l5-5z' fill='%23CE1126' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      {/* Login Card */}
      <div className="relative w-full max-w-md bg-[#ffffff] border-2 border-[#1a1a1a] p-5 sm:p-8 shadow-[8px_8px_0_0_#1a1a1a]">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#1a1a1a] uppercase">
              DABKA<span className="text-[#CE1126]"> ACADEMY</span>
            </h1>
          </Link>
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-2">Welcome Back</h2>
          <p className="text-[#6b7280] text-xs sm:text-sm">
            Continue your dabka journey
          </p>
        </div>

        {/* Google Sign-In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#1a1a1a] hover:bg-[#333333] text-[#fafafa] text-sm sm:text-base font-bold uppercase tracking-wide py-4 px-4 sm:px-6 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 min-h-[52px]"
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
        <div className="flex items-center gap-3 sm:gap-4 my-6 sm:my-8">
          <div className="flex-1 h-px bg-[#e5e7eb]"></div>
          <span className="text-[#6b7280] text-xs sm:text-sm uppercase tracking-wider font-bold">or</span>
          <div className="flex-1 h-px bg-[#e5e7eb]"></div>
        </div>

        {/* Email Input (Disabled) */}
        <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              disabled
              className="w-full bg-[#f3f4f6] border-2 border-[#e5e7eb] px-4 py-3 text-sm sm:text-base text-[#6b7280] placeholder-[#9ca3af] cursor-not-allowed opacity-50 focus:outline-none min-h-[48px]"
            />
          </div>

          {/* Password Input (Disabled) */}
          <div>
            <label htmlFor="password" className="block text-xs sm:text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              disabled
              className="w-full bg-[#f3f4f6] border-2 border-[#e5e7eb] px-4 py-3 text-sm sm:text-base text-[#6b7280] placeholder-[#9ca3af] cursor-not-allowed opacity-50 focus:outline-none min-h-[48px]"
            />
          </div>
        </div>

        {/* Sign In Button (Disabled) */}
        <button
          type="button"
          disabled
          className="w-full bg-[#CE1126] text-[#fafafa] text-sm sm:text-base font-bold uppercase tracking-wide py-4 px-6 opacity-50 cursor-not-allowed min-h-[52px]"
        >
          Sign In
        </button>

        {/* Get Started Link */}
        <p className="text-center mt-5 sm:mt-6 text-[#6b7280] text-xs sm:text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/checkout"
            className="text-[#CE1126] font-bold hover:underline transition-all uppercase"
          >
            Get Started
          </Link>
        </p>

        {/* Back to Home */}
        <div className="text-center mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#e5e7eb]">
          <Link
            href="/"
            className="text-[#6b7280] text-xs sm:text-sm hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-2 min-h-[44px] font-medium uppercase tracking-wide"
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
