import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Sustainable Modernism
 * - Emphasis on team and human connection
 * - Clear hierarchy and visual organization
 * - Warm, inviting aesthetic
 */

export default function WhoWeAre() {
  const boardMembers = [
    {
      name: "Wahyu Aning Tias",
      role: "Founder & Board Member",
      bio: "Dedicated public health strategist and community engagement specialist passionate about creating a healthier, more equitable world. Founder of a social business startup committed to addressing systemic issues through innovative, sustainable solutions.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/77e8d850-87d2-49b2-b952-8f8aa8d66085_a3499461.png",
    },
  ];

  const iaMembers = [
    {
      name: "Stefanus Satrio",
      role: "IA Member - Business & Operations",
      bio: "Dynamic entrepreneur and creative professional with diverse background spanning business ownership, design, and music production. Founder of BYAKKO Production House and CRM specialist for key partners in medical technology, waste management, and agriculture.",
      image: "placeholder",
    },
    {
      name: "Novika Sari Dwi Cahyani",
      role: "IA Member - Financial & Operations",
      bio: "Financial Project Planner, Virtual Assistant, and CRM specialist. Manages strategic projects in partnership with Ma Chung University and runs several small businesses in fashion, digital media, web development, and cloud services.",
      image: "placeholder",
    },
    {
      name: "Yuliani",
      role: "IA Member - SMEs Specialist",
      bio: "SMEs specialist focused on impact-driven collaboration. Manages strategic projects in partnership with local stakeholders in Greater Malang region.",
      image: "placeholder",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/hero-team-KF9Xa8CZ7gMZusEubh22sg.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Who We Are?</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Vision, Mission, Goals */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center">
                <Target className="w-10 h-10 text-amber-100" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empowering individuals, promoting more inclusive and sustainable
                societies where everyone has the opportunity to thrive and contribute
                to a better world.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower communities by creating sustainable income opportunities
                and fostering innovative solutions for sustainable living through
                education, entrepreneurship, and community-driven initiatives.
              </p>
            </div>
            <div className="flex items-center justify-center md:order-1">
              <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center">
                <Users className="w-10 h-10 text-amber-100" />
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-green-900 flex items-center justify-center">
                <Award className="w-10 h-10 text-amber-100" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Our Goals</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We strive to build a more equitable society while contributing to the
                achievement of the Sustainable Development Goals (SDGs) and creating
                lasting positive impact across all communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Management */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Board of Management
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  {member.image !== "placeholder" ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <p className="text-lg font-semibold">Team Photo</p>
                      <p className="text-sm">Placeholder</p>
                    </div>
                  )}
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-green-900 font-semibold">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Members */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our IA Members
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {iaMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-amber-50 rounded-lg p-8 space-y-4"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-900 font-semibold">{member.role}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Want to Work With Us?
          </h2>
          <p className="text-lg text-amber-100">
            We're always looking for passionate individuals and organizations to join
            our mission of creating sustainable change.
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
