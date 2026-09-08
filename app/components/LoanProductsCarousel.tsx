"use client";

import React from "react";
import { ArrowRight, Phone, Mail, Star, Calendar, User } from "lucide-react";
import Link from "next/link";
// import LoanProductsCarousel from "@/components/LoanProductsCarousel"; // Adjust import path

// --- Sample Data for Testimonials ---
const testimonials = [
  {
    name: "Casey J",
    text: "The team that worked for me was amazing! Lee is a champion and helped me in every way... The professionalism, work ethic, skill and customer service is stellar!!",
    rating: 5,
  },
  {
    name: "Yvette",
    text: "Lee and his team were outstanding! They provided top-notch service... An unexpected bonus were video’s emailed explaining the next phase so you weren’t left confused.",
    rating: 5,
  },
  {
    name: "Carl",
    text: "Thank you to the Bongard Team for a swift loan process. I appreciated the updates and follow up calls. You made it very simple and easy to understand for this 1st time home buyer!",
    rating: 5,
  },
  {
    name: "Thomas",
    text: "Lee's people, in particular Josh have been more than available and helpful through out this whole process. As a first time buyer, I am extremely thankful...",
    rating: 5,
  },
];

// --- Sample Data for Blog/Videos ---
const resources = [
  {
    title: "Understanding Today's Mortgage Rates",
    date: "July 7, 2026",
    link: "/blog/mortgage-rates",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
  },
  {
    title: "First-Time Homebuyer Guide",
    date: "July 2, 2026",
    link: "/blog/first-time-buyer",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace
  },
  {
    title: "Refinancing Your Mortgage",
    date: "June 29, 2026",
    link: "/blog/refinancing",
    videoUrl: null, // No video for this one, just a link
  },
];

const AboutLeePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-[#021B2C] to-[#004d26] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Home Loans Are Complicated.
            <br />
            <span className="text-[#021B2C]">Let&apos;s Simplify That.</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100/90 max-w-3xl mx-auto mb-8">
            Get expert guidance from Spencer Rhodes Bangert, a trusted advisor
            focused on making your mortgage process easier. years of experience.
          </p>
          <Link href="#contact">
            <button className="bg-white text-[#021B2C] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition shadow-lg mx-auto">
              Contact Spencer <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Profile photo */}
              <div className="bg-gray-200 rounded-2xl h-80 w-full max-w-md mx-auto flex items-center justify-center text-gray-500">
                <User size={64} />
                <span className="sr-only">Spencer&apos;s Photo</span>
              </div>
            </div>
            <div>
              <p className="text-[#021B2C] font-bold tracking-[4px] mb-2 text-sm">
                ABOUT ME
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Spencer Rhodes Bangert
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Spencer is committed to putting you in the &quot;right&quot;
                loan program for you (based on your unique situation and
                specific goals)… at the lowest cost possible. Remember, Price
                Mortgage is a mortgage broker… so we have access to many more
                loan programs to consider!
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                They are true loan experts who pride themselves on being
                mortgage “advisors”. Moreover, they want to create long-term
                relationships with each and every one of our clients… as opposed
                to just a transactional focus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                  <Phone size={18} className="text-[#021B2C]" />
                  <span className="font-medium">+1 (443) 254-0132</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                  <Mail size={18} className="text-[#021B2C]" />
                  <span className="font-medium">
                    Visit Spencer&apos;s website
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">NMLS# 1202142</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. LOAN PROGRAMS CAROUSEL (Reused Component) --- */}

      {/* --- 4. TESTIMONIALS SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#021B2C] font-bold tracking-[4px] mb-2 text-sm">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Recent Homeowners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-6 rounded-xl shadow-sm border-l-4 border-[#021B2C]"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &quot;{t.text}&quot;
                </p>
                <p className="font-bold text-gray-900">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. HELPFUL CONTENT & RESOURCES (with Videos) --- */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#021B2C] font-bold tracking-[4px] mb-2 text-sm">
              RESOURCES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Helpful Homebuyer Content & Videos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                {/* Video or Image Placeholder */}
                <div className="w-full h-48 bg-gray-300 relative flex items-center justify-center">
                  {resource.videoUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={resource.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <span className="text-gray-500">[Image Placeholder]</span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-1">{resource.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <Link
                    href={resource.link}
                    className="mt-auto text-[#021B2C] font-semibold hover:underline flex items-center gap-1"
                  >
                    Continue Reading <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog">
              <button className="border border-[#021B2C] text-[#021B2C] hover:bg-[#021B2C] hover:text-white px-8 py-3 rounded-xl font-semibold transition">
                View All Resources
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 6. CONTACT / CTA SECTION --- */}
      <section id="contact" className="py-16 md:py-24 bg-[#021B2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Some Help? Contact Lee
          </h2>
          <p className="text-xl text-green-100/90 mb-8">
            Have questions? Ready to get started? Reach out anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Phone size={20} />
              <span className="font-medium">+1 (415) 569-2119</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Mail size={20} />
              <span className="font-medium">Visit Spencer&apos;s website</span>
            </div>
          </div>

          {/* Simple Contact Form Placeholder */}
          <form className="max-w-lg mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-sm text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-4 py-2 rounded-lg text-gray-900"
                placeholder="How can I help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#021B2C] font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutLeePage;
