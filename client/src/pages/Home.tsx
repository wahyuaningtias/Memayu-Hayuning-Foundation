import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clean, spacious layouts with organic elements
 * - Forest green primary color (#1B4D3E) representing growth and sustainability
 * - Warm cream backgrounds (#F5F1E8) suggesting natural materials
 * - Burnt orange accents (#C85A3A) echoing cultural heritage
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/hero-home-8AyJcvZ3vyUPc3ySv4LaL4.webp')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 md:px-8 max-w-4xl">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Established 2022</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Memayu Hayuning
            <br />
            <span className="text-amber-100">Foundation</span>
          </h1>

          {/* Red Accent Line */}
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>

          <p className="text-lg md:text-xl mb-4 text-gray-100 font-medium">
            Beautifying the Beauty of Life
          </p>

          <p className="text-base md:text-lg mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Sharing Javanese wisdom with the world through sustainable initiatives
            that create a better life and prosperity for all communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-900 hover:bg-gray-100 font-semibold"
              onClick={() => window.location.href = '/about-us'}
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/contact-us'}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering individuals and promoting inclusive, sustainable societies
                where everyone can thrive.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating sustainable income opportunities and fostering innovative
                solutions through education and entrepreneurship.
              </p>
            </div>

            {/* Impact */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Goals</h3>
              <p className="text-gray-700 leading-relaxed">
                Building an equitable society while contributing to the UN Sustainable
                Development Goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            No One Left Behind
          </h2>
          <p className="text-lg md:text-xl text-amber-100 font-medium">
            Placemaking • Inclusivity • Shared Experiences • Make a Living
          </p>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Established in November 2022, we seek to share Javanese wisdom with the
            world through various initiatives that create a better life and
            sustainability for all.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join us in our mission to create sustainable solutions and empower
            communities across Indonesia and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-900 hover:bg-green-800 text-white font-semibold"
              onClick={() => window.location.href = '/who-we-are'}
            >
              Meet Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-900 text-green-900 hover:bg-green-50"
              onClick={() => window.location.href = '/what-we-do'}
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
