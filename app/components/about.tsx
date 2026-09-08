"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Icons.Heart,
      title: "Great Customer Experience",
      description:
        "A great customer experience means prioritizing your needs, providing clear communication, and ensuring a smooth, stress-free process from start to finish. My goal is to exceed your expectations.",
    },
    {
      icon: Icons.User,
      title: "Personalized Service",
      description:
        "Experience tailored mortgage solutions that fit your unique needs. I take the time to understand your goals and provide options that align with your financial situation and homeownership dreams.",
    },
    {
      icon: Icons.Briefcase,
      title: "Expert Guidance",
      description:
        "With over 20 years in the industry, I bring deep expertise and knowledge to every interaction. You can trust my experience and guidance to navigate the complexities of the mortgage process.",
    },
    {
      icon: Icons.Zap,
      title: "Fast Approvals",
      description:
        "Time is of the essence in the home buying process. Benefit from quick, efficient approvals that help you move forward with confidence and secure your dream home without unnecessary delays.",
    },
    {
      icon: Icons.MessageSquare,
      title: "Transparent Communication",
      description:
        "Clear, honest communication is at the heart of what I do. You'll always know where you stand and what to expect, ensuring a smooth and stress-free mortgage experience from start to finish.",
    },
    {
      icon: Icons.Star,
      title: "Client Success Stories",
      description:
        "Join the countless families and individuals who have successfully achieved their homeownership dreams with my help. Let their stories inspire you and give you confidence in your own journey.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "A no-obligation conversation to understand your goals and financial picture.",
    },
    {
      step: 2,
      title: "Document Checklist",
      description:
        "Receive a clear, simple list of required documents for your specific situation.",
    },
    {
      step: 3,
      title: "Reliable Pre-Approval",
      description:
        "Get your financing fully vetted for a strong, competitive offer.",
    },
    {
      step: 4,
      title: "Home Shopping Support",
      description:
        "Receive guidance and updated payment scenarios as you tour homes.",
    },
    {
      step: 5,
      title: "Seamless Underwriting",
      description:
        "Proactive management of the underwriting process to ensure a smooth journey.",
    },
    {
      step: 6,
      title: "Closing Day",
      description:
        "We ensure all figures are accurate for a stress-free closing.",
    },
    {
      step: 7,
      title: "Post-Closing Partnership",
      description: "Benefit from ongoing rate monitoring and support for life.",
    },
  ];

  const loanPrograms = [
    {
      title: "GMCC Mortgage Programs",
      description:
        "Discover GMCC's tailored mortgage solutions and explore a range of programs to find the perfect fit for your homeownership goals.",
    },
    {
      title: "The GMCC Advantage",
      description:
        "By partnering with GMCC, my services provide access to secondary capital. This means top-notch expertise and a wide array of mortgage programs that you will not find elsewhere.",
    },
    {
      title: "Industry-Leading Expertise",
      description:
        "Access to industry-leading expertise in mortgage lending with a wide range of competitive mortgage programs.",
    },
    {
      title: "Streamlined Processes",
      description:
        "Benefit from streamlined processes for rapid turnaround and personalized guidance and support throughout your mortgage journey.",
    },
  ];

  const faqs = [
    {
      q: "What is the first step in the mortgage process?",
      a: "The first step is getting pre-approved for a mortgage. This will help you determine your budget and show sellers that you are a serious buyer. Pre-approval involves a review of your financial situation and credit history.",
    },
    {
      q: "How much down payment is required?",
      a: "The required down payment varies depending on the loan program and lender. Typically, down payments range from 3% to 20% of the home's purchase price. Some programs, like VA and USDA loans, may offer zero down payment options for eligible borrowers.",
    },
    {
      q: "What is the difference between a fixed-rate and an adjustable-rate mortgage?",
      a: "A fixed-rate mortgage has an interest rate that remains constant throughout the life of the loan, providing predictable monthly payments. An adjustable-rate mortgage (ARM) has an interest rate that can change periodically, usually based on a benchmark index, which means your payments can increase or decrease over time.",
    },
    {
      q: "How is my credit score affected by applying for a mortgage?",
      a: "When you apply for a mortgage, lenders perform a hard inquiry on your credit report, which can slightly lower your credit score. However, multiple inquiries within a short period are typically treated as a single inquiry, minimizing the impact on your score. It's important to maintain good credit habits throughout the process.",
    },
    {
      q: "What documents do I need to apply for a mortgage?",
      a: "To apply for a mortgage, you'll need several documents, including proof of income (such as pay stubs and tax returns), employment history, credit history, bank statements, and information on any other assets and debts. Having these documents ready can expedite the application process.",
    },
  ];

  const states = [
    "AL",
    "FL",
    "GA",
    "SC",
    "NC",
    "TN",
    "VA",
    "TX",
    "CA",
    "OR",
    "PA",
    "MO",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Spencer Rhodes Bangert */}
      <div className="relative bg-gradient-to-r from-[#021B4C] via-[#021B2C] to-[#04202D] text-white rounded-2xl">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white font-bold tracking-[4px] text-sm mb-4">
                Division Sales Manager
              </p>
              <p className="text-white text-sm mb-2">NMLS# 1202142</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Spencer Rhodes Bangert
              </h1>
              <p className="text-gray-200 text-lg max-w-xl mb-2">
                438 North Frederick Ave, Suite 315
              </p>
              <p className="text-gray-200 text-lg max-w-xl mb-6">
                Gaithersburg, MD 20877
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <button className="bg-white text-[#021B2C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get Pre-Approved
                  </button>
                </Link>
                <a href="tel:+14155692119">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                    <Icons.Phone className="w-4 h-4" /> Call Spencer
                  </button>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-[#021B2C]/95 animate-pulse" />
                <Image
                  src="/img/lee.png"
                  alt="Spencer Rhodes Bangert - Division Sales Manager"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <Icons.BadgeCheck className="w-8 h-8 text-[#021B2C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* About Spencer Rhodes Bangert */}
        <section className="mb-16">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Let&apos;s Get Introduced
            </h2>
            <p className="text-xl text-gray-700 font-medium mb-4">
              &quot;Hi, I&apos;m Spencer, and I am here to make your
              homeownership goals easier to reach.&quot;
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are looking to buy a new home or refinance your
              current loan, I provide personalized, dedicated service with a
              focus on closing on time and within contract. I take pride in
              making the loan process easy and stress free for every client.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-[#021B2C]">20+</p>
              <p className="text-gray-600 text-sm font-medium">
                Years Of Experience
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-[#021B2C]">2,200</p>
              <p className="text-gray-600 text-sm font-medium">Doors Opened</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-[#021B2C]">21</p>
              <p className="text-gray-600 text-sm font-medium">
                Day Turnaround
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">
                My Offer To You
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you are looking to buy a new home or refinance your
                current loan, I provide personalized, dedicated service with a
                focus on closing on time and within contract.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With proven experience helping homeowners across our region, I
                take pride in making the loan process as easy and stress free as
                possible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am proud to serve clients from my local office in
                Gaithersburg, Maryland, with a relationship-first approach to
                mortgage lending.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                If you want a mortgage experience that&apos;s professional,
                personal, and even a little fun, give me a call.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="tel:+14155692119"
                  className="text-[#021B2C] font-medium flex items-center gap-2"
                >
                  <Icons.Phone className="w-4 h-4" />
                  (443) 254-0132
                </a>
                <a
                  href="https://www.fdmhome.com/spencerbangert.html"
                  className="text-[#021B2C] font-medium flex items-center gap-2"
                >
                  <Icons.Mail className="w-4 h-4" />
                  Spencer&apos;s website
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">
                My Loan Solution Partners
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#021B2C] text-sm">GMCC</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    GMCC Mortgage Programs offer tailored mortgage solutions to
                    find the perfect fit for your homeownership goals.
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <h4 className="font-medium text-[#021B2C] text-sm">
                    The GMCC Advantage
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    By partnering with GMCC, my services provide access to
                    secondary capital, top-notch expertise, and a wide array of
                    mortgage programs you will not find elsewhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section - Updated with new values */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Choose Me?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            With over 20 years of experience, I offer expert guidance,
            personalized solutions, and a commitment to making your
            homeownership journey smooth and successful.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 bg-[#021B2C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#021B2C]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* What Can I Afford? */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What can I afford?
            </h2>
            <p className="text-gray-600 mb-6">
              With this mortgage calculator, you can easily determine your
              estimated monthly payment, as well as how much interest you might
              pay and your projected principal balances. You can also input
              prepayment amounts to see their impact on your mortgage.
            </p>
            <Link href="/calculator">
              <button className="bg-[#021B2C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004a25] transition">
                Try Our Mortgage Calculator
              </button>
            </Link>
          </div>
        </section>

        {/* Loan Programs - Updated with GMCC info */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Loan Programs & Expertise
          </h2>
          <p className="text-gray-600 mb-6">
            I offer a full range of loan options to meet your unique needs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-xs">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Let&apos;s Get You Into Your Dream Home */}
        <section className="mb-16 bg-[#021B2C] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let&apos;s get you into your dream home
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            It&apos;s simple to get started on your mortgage journey – whether
            you&apos;re just looking to get pre-qualified or are ready to submit
            an application. Just click the button below or submit a contact form
            to speak with me. I&apos;m here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.fdmhome.com/spencerbangert.html">
              <button className="bg-white text-[#021B2C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started Today
              </button>
            </a>
            <Link href="/contact-us">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                <Icons.Mail className="w-4 h-4" /> Contact Lee
              </button>
            </Link>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Work With Lee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.slice(0, 4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#021B2C] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {processSteps.slice(4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#021B2C] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Service Areas
          </h2>
          <p className="text-gray-300 text-center mb-6">
            I am proud to offer expert mortgage guidance in the following
            states. Please note that specific loan program availability can vary
            by state.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {states.map((state) => (
              <span
                key={state}
                className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {state}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs - Updated with new questions */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Questions Answered
          </h2>
          <p className="text-gray-600 mb-6">
            Find Clear and Concise Answers to Common Mortgage Questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mb-16 bg-gradient-to-r from-[#021B4C] to-[#021B2C] text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            Want to get expert tips in your inbox?
          </h3>
          <p className="text-gray-300 mb-6">
            Sign up for our weekly newsletter to learn about buying and owning a
            home one step at a time.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#021B2C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </section>

        {/* CTA Footer */}
        <div className="mt-12 bg-[#021B2C] rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
          <p className="text-gray-300 mb-6 text-sm">
            Contact Lee today for a no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+14155692119"
              className="inline-flex items-center gap-2 bg-white text-[#021B2C] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              <Icons.Phone className="w-5 h-5" /> (415) 569-2119
            </a>
            <a
              href="https://www.fdmhome.com/spencerbangert.html"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <Icons.Mail className="w-5 h-5" /> Email Lee
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Spencer Rhodes Bangert is a licensed mortgage professional. NMLS#
            1202142. CA DRE#01881231, AZ#1040124, CA DRE# 01881231, AZ# 1040124.
            Loan approvals are subject to underwriting guidelines. Equal Housing
            Lender.
          </p>
        </div>
      </div>
    </div>
  );
}
