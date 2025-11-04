// src/app/(onboarding)/step7/page.tsx
"use client";

import { useState } from "react";
import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import OTPInput from "@/src/components/forms/OTPInput";
import { Button } from "@/src/components/ui/Button";
import { useOnboarding } from "@/src/hooks/useOnboarding";

export default function Step7() {
  const { goNext } = useOnboarding();
  const [isResending, setIsResending] = useState(false);

  const handleComplete = (code: string) => {
    console.log("OTP:", code);
    setTimeout(goNext, 1000);
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      console.log("Code resent");
    }, 1000);
  };

  return (
    <OnboardingLayout currentStep={7}>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">
            Enter Verification Code
          </h1>
          <p className="text-gray-600 text-base">
            Check your SMS for the 6-digit code
          </p>
        </div>

        {/* OTP Input */}
        <div className="flex flex-col items-center space-y-6">
          <OTPInput onComplete={handleComplete} />

          {/* Resend Code */}
          <button
            onClick={handleResend}
            disabled={isResending}
            className="text-green-600 font-medium text-sm hover:underline disabled:opacity-50"
          >
            {isResending ? "Resending..." : "Didn't receive code? Resend"}
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
