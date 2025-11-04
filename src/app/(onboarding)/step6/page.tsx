// src/app/(onboarding)/step6/page.tsx
"use client";

import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import PhoneInput from "@/src/components/forms/PhoneInput";
import { Button } from "@/src/components/ui/Button";
import { useOnboarding } from "@/src/hooks/useOnboarding";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  phone: z.string().regex(/^\+234\d{10}$/, "Enter valid Nigerian number"),
});

export default function Step6() {
  const { goNext } = useOnboarding();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = () => {
    goNext();
  };

  return (
    <OnboardingLayout currentStep={6}>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">
            Verify Your Phone Number
          </h1>
          <p className="text-gray-600 text-base">We'll send a 6-digit code</p>
        </div>

        {/* Phone Input */}
        <div className="space-y-4">
          <PhoneInput control={control} />
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          size="lg"
          className="w-full"
        >
          Send Code
        </Button>
      </div>
    </OnboardingLayout>
  );
}
