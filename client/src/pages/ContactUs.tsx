import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

/**
 * Design Philosophy: Sustainable Modernism
 * - Clear contact information hierarchy
 * - Warm, inviting layout
 * - Easy navigation and accessibility
 */

export default function ContactUs() {
  const hours = [
    { day: "Monday to Wednesday", time: "9 a.m. - 6 p.m." },
    { day: "Thursday to Friday", time: "9 a.m. - 8 p.m." },
    { day: "Saturday", time: "9 a.m. - 6 p.m." },
    { day: "Sunday", time: "Closed", closed: true },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      </section>

      {/* Hours & Appointments */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hours & Appointments
            </h2>
            <p className="text-lg text-gray-700">
              Call or email to book an appointment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-900" />
                Operating Hours
              </h3>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-lg ${
                      item.closed
                        ? "bg-red-50 border border-red-200"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <span className="font-semibold text-gray-900">
                      {item.day}
                    </span>
                    <span
                      className={`font-medium ${
                        item.closed
                          ? "text-red-600"
                          : "text-green-900"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Get in Touch
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're here to help! Reach out to us through any of these channels.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+6285236169486"
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-green-50 to-amber-50 hover:shadow-md transition-shadow group"
                >
                  <Phone className="w-6 h-6 text-green-900 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-green-900 font-medium">
                      +62 852 3616 9486
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Call us during business hours
                    </p>
                  </div>
                </a>

                {/* Primary Email */}
                <a
                  href="mailto:hello@memayuhayuning.asia"
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-green-50 to-amber-50 hover:shadow-md transition-shadow group"
                >
                  <Mail className="w-6 h-6 text-green-900 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-green-900 font-medium break-all">
                      hello@memayuhayuning.asia
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Primary contact email
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-700">
              Have a question or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <form className="space-y-6 bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <Button
              size="lg"
              className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold"
            >
              Send Message
            </Button>

            <p className="text-sm text-gray-600 text-center">
              We'll get back to you as soon as possible. Thank you for reaching out!
            </p>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Visit Us
          </h2>
          <p className="text-lg text-amber-100">
            We're located in Malang, East Java, Indonesia. Drop by to meet our team
            and learn more about our programs.
          </p>
          <div className="flex justify-center">
            <MapPin className="w-8 h-8 text-amber-100" />
          </div>
          <p className="text-base text-gray-200">
            For specific directions and location details, please contact us directly.
          </p>
        </div>
      </section>
    </div>
  );
}
