import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Design Philosophy: Sustainable Modernism
 * - Visual showcase of events and programs
 * - Warm, inviting image gallery
 * - Clear narrative structure
 */

export default function Gallery() {
  const galleryEvents = [
    {
      title: "Building MHF 2022-2023",
      description:
        "A comprehensive series of activities designed to achieve our project objectives. From detailed planning and blueprint development to construction, quality assurance, and optimization phases.",
      image: "placeholder",
    },
    {
      title: "Bringharjo Event with Nawadya",
      description:
        "A dynamic and engaging event showcasing a rich blend of cultural heritage, artistic expressions, and community-driven activities. Celebrating local traditions through performances, workshops, and exhibitions.",
      image: "placeholder",
    },
    {
      title: "MHF x Nawadya x Boworoso",
      description:
        "A collaborative event bringing together diverse talents and perspectives. Featuring dynamic performances, interactive workshops, and community-focused activities that inspire creativity and strengthen cultural connections.",
      image: "placeholder",
    },
    {
      title: "MHF x Begawan Apartment",
      description:
        "A collaborative initiative merging innovative concepts with modern living. This partnership focuses on creating a harmonious blend of functionality, aesthetic design, and community-centered experiences.",
      image: "placeholder",
    },
    {
      title: "MHF x TSD x UMM",
      description:
        "A strategic collaboration aimed at fostering innovation, education, and community development. Combining expertise to deliver impactful initiatives including research projects, workshops, and community programs.",
      image: "placeholder",
    },
    {
      title: "MHF Goes to TBN Asia Conference",
      description:
        "MHF participates in this prestigious gathering focused on empowering social enterprises and fostering impactful collaborations across Asia. Engaging discussions, networking, and knowledge-sharing sessions.",
      image: "placeholder",
    },
    {
      title: "MHF x Maxy Academy Entrepreneurship Event",
      description:
        "A collaborative event designed to inspire and empower aspiring entrepreneurs. Featuring insightful workshops, expert-led discussions, and networking opportunities for budding business leaders.",
      image: "placeholder",
    },
    {
      title: "MHF x TAMTF Singapore: Hybrid Business Conference",
      description:
        "A collaborative effort bringing together industry leaders, entrepreneurs, and creatives. With both in-person and virtual participation, providing a dynamic platform for sharing insights and exploring creative solutions.",
      image: "placeholder",
    },
    {
      title: "Official Visitation of SCII Partners 2024",
      description:
        "A past initiative bringing together key partners and stakeholders from the Strategic Collaborations and Innovations Initiative. This event provided opportunities for meaningful discussions and collaboration during that period.",
      image: "placeholder",
    },
    {
      title: "Official Visitation of SCII Partners 2025 (Past Initiative)",
      description:
        "A past initiative where we connected our team with universities and local partners through our Strategic Insight Programme. This collaboration was part of our efforts to build a brighter future for East Java during that period.",
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
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663031207151/D7aNrb3LDda5wHbLSwdRLV/hero-programs-fX3mHGNfUvxUJtsMVjr2Ue.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Events & Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the moments and milestones that define our journey of creating
              sustainable change and empowering communities.
            </p>
          </div>

          <div className="space-y-12">
            {galleryEvents.map((event, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="text-center text-gray-500 p-4">
                      <p className="text-lg font-semibold">Event Photo</p>
                      <p className="text-sm">Placeholder image</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-green-900 text-green-900 hover:bg-green-50"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-lg text-amber-100">
            Join us in our upcoming events and programs. Together, we can create
            meaningful change.
          </p>
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-gray-100 font-semibold"
          >
            Get Involved
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
