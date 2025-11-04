// src/app/(onboarding)/step5/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import OnboardingLayout from "@/src/components/onboarding/OnboardingLayout";
import FileUpload from "@/src/components/forms/FileUpload";
import { Button } from "@/src/components/ui/Button";
import { useOnboarding } from "@/src/hooks/useOnboarding";

const schema = z.object({
  id: z
    .string()
    .min(1, "Please upload your ID")
    .refine(
      (val) => /^data:(application\/pdf|image\/(jpeg|png));base64,/.test(val),
      "Only PDF, JPG or PNG files are allowed"
    ),
});

export const dynamic = "force-dynamic";

export default function Step5() {
  const { goNext } = useOnboarding();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { id: undefined },
  });

  const file = watch("id");

  const onSubmit = () => {
    if (file) goNext();
  };

  return (
    <OnboardingLayout currentStep={5}>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">Upload Your ID</h1>
          <p className="text-gray-600 text-base">
            NIN, Driver's License, or International Passport
          </p>
        </div>

        {/* File Upload */}
        <FileUpload
          name="id"
          control={control}
          setValue={setValue}
          label="Take photo or upload"
          accept="image/*,.pdf"
        />

        {/* Error Message */}
        {errors.id && (
          <p className="text-sm text-red-600 text-center">
            {errors.id.message}
          </p>
        )}

        {/* Continue Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={!file}
          size="lg"
          className="w-full"
        >
          Continue
        </Button>
      </div>
    </OnboardingLayout>
  );
}
