// src/app/(onboarding)/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OnboardingEntry() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to step1 after mount
    router.replace("/step1");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="text-center space-y-6 px-4">
        {/* Logo or Brand Icon */}
        <div className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
          <span className="text-3xl text-white font-bold">C</span>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to CrediMe
          </h1>
          <p className="text-gray-600 text-base">
            Building your digital credit identity
          </p>
        </div>

        {/* Loading Indicator */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Preparing your onboarding experience...
        </p>
      </div>
    </div>
  );
}
