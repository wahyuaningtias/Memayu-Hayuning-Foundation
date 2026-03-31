import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clean, minimal navigation
 * - Responsive mobile menu
 * - Subtle hover effects
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/who-we-are", label: "Who We Are?" },
    { href: "/what-we-do", label: "What We Do?" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    return location === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-900 hover:text-green-800 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-green-900 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-amber-100" />
            </div>
            <span className="hidden sm:inline">MHF</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-green-100 text-green-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-green-900 hover:bg-green-800 text-white font-semibold"
              onClick={() => window.location.href = '/contact-us'}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-green-100 text-green-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold"
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/contact-us';
              }}
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
