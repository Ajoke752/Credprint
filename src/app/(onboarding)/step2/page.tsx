"use client";

import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import StepHeader from "@/src/components/onboarding/StepHeader";
import { Button } from "@/src/components/ui/Button";
import { useOnboarding } from "@/src/hooks/useOnboarding";
import Image from "next/image";

export default function Step2() {
  const { goNext } = useOnboarding();

  return (
    <OnboardingLayout currentStep={2}>
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Illustration */}
        <div className="w-full max-w-xs mb-4">
          <Image
            src="/images/Onstep2.png"
            alt="Get verified in 3 minutes"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Title and Subtitle */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900 px-4">
            Use your BVN & ID to create your credit profile
          </h1>
          <p className="text-gray-600 text-base px-6">
            No paperwork, no branch visit
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full pt-4">
          <Button onClick={goNext} size="lg" className="w-full">
            Continue
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
