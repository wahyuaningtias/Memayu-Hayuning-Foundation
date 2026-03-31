import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Heart, Leaf, Briefcase, Users, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clear organizational structure with visual icons
 * - Asymmetric grid layouts
 * - Emphasis on programs and impact
 */

export default function WhatWeDo() {
  const divisions = [
    {
      title: "Executive Leadership",
      description:
        "Founders, managing directors, and advisors who define and guide the foundation's mission.",
      icon: Briefcase,
    },
    {
      title: "Operations",
      description:
        "Manages HR, administration, finance, and IT to support internal systems.",
      icon: Zap,
    },
    {
      title: "Business Development",
      description:
        "Leads growth strategies, partnerships, CRM, and communications.",
      icon: Users,
    },
    {
      title: "Project Management",
      description:
        "Oversees program planning and agile execution with dedicated project teams.",
      icon: BookOpen,
    },
  ];

  const businessUnits = [
    {
      number: "1",
      title: "Rumahayu Literation Community",
      description:
        "Learning and building skills through participative learning and going beyond. Literacy and intergenerational learning programs.",
      icon: BookOpen,
    },
    {
      number: "2",
      title: "Aswasa Wellness",
      description:
        "Holistic health and senior care in an intergenerational concept. Mental health support through retreat events, yoga classes, and sharing sessions.",
      icon: Heart,
    },
    {
      number: "3",
      title: "Asrama Abhilasa",
      description:
        "Mental health support and shelter. Community support and advocacy for mental wellness.",
      icon: Heart,
    },
    {
      number: "4",
      title: "Amboja Krama",
      description:
        "Food resilience and waste management. Focuses on hazardous disposal and keeping residual useful as biofertilizer or ecomaterials.",
      icon: Leaf,
    },
    {
      number: "5",
      title: "Hamemayu",
      description:
        "Collaboration and partnership to build international standard social and learning spaces.",
      icon: Users,
    },
    {
      number: "6",
      title: "Nawasena Health",
      description:
        "Health consulting and innovations. Robust support for entrepreneurs and startups with our flagship incubator service.",
      icon: Zap,
    },
    {
      number: "7",
      title: "ABC Entrepreneurship & Investment",
      description:
        "Social entrepreneurship and impact investing. Supporting sustainable business models and social enterprises.",
      icon: Briefcase,
    },
  ];

  const partners: any[] = [];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/hero-programs-fX3mHGNfUvxUJtsMVjr2Ue.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">What We Do?</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Organisational Structure
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Memayu Hayuning Foundation is structured to support effective
              collaboration, innovation, and service delivery across all its programs.
              Our organisation is built on four core divisions and seven business
              units, with strong partnerships at its foundation.
            </p>
          </div>

          {/* Core Divisions */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Core Divisions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {divisions.map((division, index) => {
                const Icon = division.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg p-8 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-100" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {division.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {division.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our 7 Business Units
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each unit focuses on a specific area of impact, working together to
              create sustainable solutions and empower communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((unit, index) => {
              const Icon = unit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8 space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {unit.number}
                    </div>
                    <Icon className="w-6 h-6 text-green-900" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {unit.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {unit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-gray-700">
              We collaborate with leading organizations to amplify our impact
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-12">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Our Impact Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Literacy */}
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-green-900 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Rumahayu Literation Community
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Learning and building skills through participative learning and going
                beyond. We provide intergenerational literacy programs that empower
                individuals and strengthen communities.
              </p>
            </div>

            {/* Wellness */}
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-green-900 flex items-center justify-center">
                <Heart className="w-8 h-8 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Aswasa Wellness
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlock the skills needed to create a livelihood and embrace a better
                quality of life in a supportive learning environment in intergenerational
                concept.
              </p>
            </div>

            {/* Mental Health */}
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-green-900 flex items-center justify-center">
                <Heart className="w-8 h-8 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Asrama Abhilasa
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mental health support by providing a retreat event, yoga class, and a
                sharing session, including community support for holistic wellness.
              </p>
            </div>

            {/* Waste Management */}
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-lg bg-green-900 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Amboja Krama
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Waste management focuses on hazardous disposal and how to keep the
                residual useful as biofertilizer or ecomaterials by continuous research
                and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Join Our Programs?
          </h2>
          <p className="text-lg text-amber-100">
            Explore our initiatives and find the perfect opportunity to grow, learn,
            and make a difference.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-gray-100 font-semibold"
            onClick={() => window.location.href = '/contact-us'}
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
