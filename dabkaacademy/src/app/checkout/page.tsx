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
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Course Link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm font-medium mb-8 group"
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
            Back to Course
          </Link>

          {/* Page Header */}
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-2">
            Checkout
          </h1>
          <p className="text-muted mb-8">
            Complete your purchase to get instant access
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div className="space-y-6">
              {/* Order Summary Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4">
                  Order Summary
                </h2>

                {/* Course Info */}
                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-2xl font-black">DA</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      Dabka Academy - Full Course Access
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      Master Palestinian Dabka from beginner to performance ready
                    </p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="border-t border-border pt-4 mb-6">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-muted mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
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
                    <li className="flex items-center gap-3 text-foreground">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
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
                    <li className="flex items-center gap-3 text-foreground">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
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
                    <li className="flex items-center gap-3 text-foreground">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
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
                    <li className="flex items-center gap-3 text-foreground">
                      <svg
                        className="w-5 h-5 text-accent-green flex-shrink-0"
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
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span className="text-foreground">$29.99</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">$29.99</span>
                  </div>
                  <p className="text-xs text-muted mt-2">One-time payment</p>
                </div>
              </div>

              {/* Money Back Guarantee Badge */}
              <div className="bg-accent-green/10 border border-accent-green/30 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent-green"
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
                  <p className="font-bold text-foreground">30-Day Money Back Guarantee</p>
                  <p className="text-sm text-muted">
                    Not satisfied? Get a full refund, no questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Section */}
            <div className="space-y-6">
              {/* User Info Summary */}
              {user.isLoggedIn && (
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">
                          {user.email.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-muted">Purchasing as</p>
                        <p className="text-foreground font-medium">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/login"
                      className="text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      Not you? Sign out
                    </Link>
                  </div>
                </div>
              )}

              {/* Payment Form Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4">
                  Payment Details
                </h2>

                {/* Stripe Payment Form Placeholder */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#635BFF]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-[#635BFF]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
                      </svg>
                    </div>
                    <p className="text-foreground font-medium mb-1">Stripe Payment Form</p>
                    <p className="text-sm text-muted">
                      Secure payment processing will appear here
                    </p>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="button"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
                >
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Pay $29.99
                </button>
              </div>

              {/* Security Badges */}
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-center gap-6 mb-4">
                  {/* Secure Checkout */}
                  <div className="flex items-center gap-2 text-muted">
                    <svg
                      className="w-4 h-4 text-accent-green"
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
                    <span className="text-sm">Secure checkout</span>
                  </div>

                  {/* SSL Encrypted */}
                  <div className="flex items-center gap-2 text-muted">
                    <svg
                      className="w-4 h-4 text-accent-green"
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
                    <span className="text-sm">SSL encrypted</span>
                  </div>
                </div>

                {/* Payment Method Icons */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted text-center mb-3">Accepted payment methods</p>
                  <div className="flex items-center justify-center gap-4">
                    {/* Visa */}
                    <div className="bg-background px-3 py-1.5 rounded border border-border">
                      <span className="text-xs font-bold text-[#1A1F71]">VISA</span>
                    </div>
                    {/* Mastercard */}
                    <div className="bg-background px-3 py-1.5 rounded border border-border">
                      <span className="text-xs font-bold text-[#EB001B]">MC</span>
                    </div>
                    {/* Amex */}
                    <div className="bg-background px-3 py-1.5 rounded border border-border">
                      <span className="text-xs font-bold text-[#006FCF]">AMEX</span>
                    </div>
                    {/* Apple Pay */}
                    <div className="bg-background px-3 py-1.5 rounded border border-border">
                      <span className="text-xs font-bold text-foreground">Apple Pay</span>
                    </div>
                    {/* Google Pay */}
                    <div className="bg-background px-3 py-1.5 rounded border border-border">
                      <span className="text-xs font-bold text-foreground">G Pay</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-muted text-center">
                By completing this purchase, you agree to our{" "}
                <Link href="/terms" className="text-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-foreground hover:text-accent transition-colors">
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
