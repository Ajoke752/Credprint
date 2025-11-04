// ==========================================
// src/components/homepage/Navbar.tsx
// ==========================================
"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/src/components/ui/Button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">CredPrint</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-primary"
            >
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-primary">
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Get Started</Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="#features" className="block text-gray-600">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-gray-600">
              How It Works
            </Link>
            <Link href="#pricing" className="block text-gray-600">
              Pricing
            </Link>
            <Link href="#faq" className="block text-gray-600">
              FAQ
            </Link>
            <div className="pt-4 space-y-2">
              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button className="w-full">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="w-full">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full">Get Started</Button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
