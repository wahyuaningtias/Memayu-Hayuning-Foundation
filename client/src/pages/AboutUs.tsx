import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Sustainable Modernism
 * - Asymmetric layouts with organic elements
 * - Generous whitespace and clear visual hierarchy
 * - Warm color palette with cultural touches
 */

export default function AboutUs() {
  const benefits = [
    "Sustainable income generation practices",
    "Community-driven innovation and solutions",
    "Inclusive economic development",
    "Environmental responsibility",
    "Equitable resource management",
    "Quality of life enhancement",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/hero-about-4PeapevpmEd9XRZJftQ6oX.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                We Promote Sustainability for a Better Life
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In pursuing a better life, we champion sustainability as an integral
                aspect of income generation. We recognize that how we earn a living
                has profound implications for our well-being, the health of our
                planet, and the prosperity of future generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Embracing this ethos, we integrate sustainability into every facet of
                our economic endeavors. From ethical investments that prioritize
                social and environmental impact alongside financial returns to
                fostering a culture of eco-conscious entrepreneurship, we seek to
                redefine success in terms that extend beyond mere profit margins.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Commitment
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-900 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-green-900 text-white rounded-lg p-12 text-center space-y-4">
            <h3 className="text-3xl font-bold">
              Through innovative business practices, responsible resource management,
              and a commitment to equitable and inclusive economic development, we
              strive to create a world where financial prosperity coexists harmoniously
              with ecological integrity.
            </h3>
            <p className="text-amber-100 text-lg">
              By promoting sustainability in income generation, we enhance our quality
              of life and contribute to building a more resilient, equitable, and
              sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Upgrade Skills Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-semibold">Program Image</p>
                  <p className="text-sm">Placeholder for program showcase</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Upgrade Your Skillset for Better Income
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive training programs are designed to equip individuals
                with the skills and knowledge needed to create sustainable livelihoods
                and achieve financial independence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Hands-on skill development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Mentorship from industry experts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Job placement assistance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Entrepreneurship support
                  </span>
                </li>
              </ul>
              <Button
                size="lg"
                className="bg-green-900 hover:bg-green-800 text-white font-semibold"
                onClick={() => window.location.href = '/what-we-do'}
              >
                Explore Our Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Join Us in Creating Sustainable Change
          </h2>
          <p className="text-lg text-amber-100">
            Whether you want to learn, contribute, or partner with us, there are many
            ways to be part of our mission.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-gray-100 font-semibold"
            onClick={() => window.location.href = '/contact-us'}
          >
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
