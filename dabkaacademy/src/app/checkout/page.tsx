"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  // Mock user data - in real app this would come from auth context
  const user = {
    email: "student@example.com",
    isLoggedIn: true,
  };

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

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Course Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#1a1a1a] transition-colors text-xs sm:text-sm font-medium mb-5 sm:mb-8 group min-h-[44px] uppercase tracking-wide"
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
            Back to Home
          </Link>

          {/* Page Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] mb-2">
            Checkout
          </h1>
          <p className="text-sm sm:text-base text-[#6b7280] mb-5 sm:mb-8">
            Complete your purchase to get instant access
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Order Summary */}
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              {/* Order Summary Card */}
              <div className="bg-[#ffffff] border-2 border-[#e5e7eb] p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#1a1a1a] mb-3 sm:mb-4">
                  Order Summary
                </h2>

                {/* Course Info */}
                <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#CE1126]/10 flex items-center justify-center flex-shrink-0 border border-[#CE1126]/20">
                    <span className="text-[#CE1126] text-xl sm:text-2xl font-black">DA</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a]">
                      Dabka Academy - Full Course Access
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b7280] mt-1">
                      Master Palestinian Dabka from beginner to performance ready
                    </p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="border-t border-[#e5e7eb] pt-3 sm:pt-4 mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wide text-[#6b7280] mb-2 sm:mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]">
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
                      <span>15 video lessons</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]">
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
                      <span>3 chapters (Foundations, Building Blocks, Performance Ready)</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]">
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
                      <span>Lifetime access</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]">
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
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#1a1a1a]">
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
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                </div>

                {/* Price */}
                <div className="border-t border-[#e5e7eb] pt-3 sm:pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base text-[#6b7280]">Subtotal</span>
                    <span className="text-sm sm:text-base text-[#1a1a1a]">$29.99</span>
                  </div>
                  <div className="flex justify-between items-center text-base sm:text-lg font-black">
                    <span className="text-[#1a1a1a]">Total</span>
                    <span className="text-[#1a1a1a]">$29.99</span>
                  </div>
                  <p className="text-xs text-[#6b7280] mt-2">One-time payment</p>
                </div>
              </div>

              {/* Money Back Guarantee Badge */}
              <div className="bg-[#007A3D]/10 border-2 border-[#007A3D]/30 p-3 sm:p-4 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#007A3D]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-black text-[#1a1a1a]">30-Day Money Back Guarantee</p>
                  <p className="text-xs sm:text-sm text-[#6b7280]">
                    Not satisfied? Get a full refund, no questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Section */}
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              {/* User Info Summary */}
              {user.isLoggedIn && (
                <div className="bg-[#ffffff] border-2 border-[#e5e7eb] p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#CE1126]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#CE1126] font-black text-xs sm:text-sm">
                          {user.email.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-[#6b7280]">Purchasing as</p>
                        <p className="text-sm sm:text-base text-[#1a1a1a] font-medium truncate">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/login"
                      className="text-xs sm:text-sm text-[#CE1126] hover:text-[#a80d1e] transition-colors whitespace-nowrap font-bold uppercase"
                    >
                      Not you? Sign out
                    </Link>
                  </div>
                </div>
              )}

              {/* Payment Form Card */}
              <div className="bg-[#ffffff] border-2 border-[#e5e7eb] p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#1a1a1a] mb-3 sm:mb-4">
                  Payment Details
                </h2>

                {/* Stripe Payment Form Placeholder */}
                <div className="border-2 border-dashed border-[#e5e7eb] p-5 sm:p-8 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#635BFF]/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[#635BFF]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-[#1a1a1a] font-bold mb-1">Stripe Payment Form</p>
                    <p className="text-xs sm:text-sm text-[#6b7280]">
                      Secure payment processing will appear here
                    </p>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="button"
                  className="w-full bg-[#CE1126] hover:bg-[#a80d1e] text-white text-sm sm:text-base font-black py-4 px-6 uppercase tracking-wide transition-all hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2 min-h-[52px]"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
                  Pay $29.99
                </button>
              </div>

              {/* Security Badges */}
              <div className="bg-[#ffffff] border-2 border-[#e5e7eb] p-3 sm:p-4">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  {/* Secure Checkout */}
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007A3D]"
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
                    <span className="text-xs sm:text-sm">Secure checkout</span>
                  </div>

                  {/* SSL Encrypted */}
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007A3D]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm">SSL encrypted</span>
                  </div>
                </div>

                {/* Payment Method Icons */}
                <div className="border-t border-[#e5e7eb] pt-3 sm:pt-4">
                  <p className="text-xs text-[#6b7280] text-center mb-2 sm:mb-3 uppercase tracking-wide">Accepted payment methods</p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                    {/* Visa */}
                    <div className="bg-[#fafafa] px-2 sm:px-3 py-1 sm:py-1.5 border border-[#e5e7eb]">
                      <span className="text-[10px] sm:text-xs font-black text-[#1A1F71]">VISA</span>
                    </div>
                    {/* Mastercard */}
                    <div className="bg-[#fafafa] px-2 sm:px-3 py-1 sm:py-1.5 border border-[#e5e7eb]">
                      <span className="text-[10px] sm:text-xs font-black text-[#EB001B]">MC</span>
                    </div>
                    {/* Amex */}
                    <div className="bg-[#fafafa] px-2 sm:px-3 py-1 sm:py-1.5 border border-[#e5e7eb]">
                      <span className="text-[10px] sm:text-xs font-black text-[#006FCF]">AMEX</span>
                    </div>
                    {/* Apple Pay */}
                    <div className="bg-[#fafafa] px-2 sm:px-3 py-1 sm:py-1.5 border border-[#e5e7eb] hidden sm:block">
                      <span className="text-[10px] sm:text-xs font-black text-[#1a1a1a]">Apple Pay</span>
                    </div>
                    {/* Google Pay */}
                    <div className="bg-[#fafafa] px-2 sm:px-3 py-1 sm:py-1.5 border border-[#e5e7eb] hidden sm:block">
                      <span className="text-[10px] sm:text-xs font-black text-[#1a1a1a]">G Pay</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-[#6b7280] text-center px-2">
                By completing this purchase, you agree to our{" "}
                <Link href="/terms" className="text-[#1a1a1a] hover:text-[#CE1126] transition-colors font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#1a1a1a] hover:text-[#CE1126] transition-colors font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
