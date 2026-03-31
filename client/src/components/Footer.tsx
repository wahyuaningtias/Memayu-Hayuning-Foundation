import { Link } from "wouter";
import { Mail, Phone, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clean footer with clear information hierarchy
 * - Warm color palette
 * - Easy access to key links and contact info
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/who-we-are", label: "Who We Are?" },
    { href: "/what-we-do", label: "What We Do?" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-900" />
                </div>
                <h3 className="text-xl font-bold">MHF</h3>
              </div>
              <p className="text-amber-100 text-sm leading-relaxed">
                Memayu Hayuning Foundation - Beautifying the beauty of life through
                sustainable initiatives and community empowerment.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-100 group-hover:w-2 transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Our Programs</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-100 group-hover:w-2 transition-all"></span>
                    Rumahayu Literation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-100 group-hover:w-2 transition-all"></span>
                    Aswasa Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-100 group-hover:w-2 transition-all"></span>
                    Hamemayu Social Spaces
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-amber-100 group-hover:w-2 transition-all"></span>
                    Amboja Krama
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:+6285236169486"
                  className="flex items-start gap-3 text-amber-100 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+62 852 3616 9486</span>
                </a>
                <a
                  href="mailto:hello@memayuhayuning.asia"
                  className="flex items-start gap-3 text-amber-100 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">
                    hello@memayuhayuning.asia
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-amber-100">
                  Get the latest news about our programs and initiatives.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-100"
                />
                <Button className="bg-amber-100 text-green-900 hover:bg-white font-semibold">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-800"></div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-green-950 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-amber-100">
            <p>
              © {currentYear} Memayu Hayuning Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
