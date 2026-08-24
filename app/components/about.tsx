"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Icons.Shield,
      title: "Honesty & Transparency",
      description:
        "You get straight answers and clear explanations. No jargon, no surprises.",
    },
    {
      icon: Icons.Zap,
      title: "Unmatched Responsiveness",
      description:
        "I answer calls and return emails promptly. You're never left wondering.",
    },
    {
      icon: Icons.Handshake,
      title: "A Partnership for Life",
      description:
        "My goal is to be your trusted mortgage advisor for every home and every milestone.",
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
      title: "Conventional Loans",
      description:
        "Traditional mortgage financing with competitive rates, flexible terms, and down payments as low as 3%.",
    },
    {
      title: "FHA Loans",
      description:
        "Government-backed home loans with flexible credit requirements and down payments as low as 3.5%.",
    },
    {
      title: "VA Home Loans",
      description:
        "Exclusive zero-down mortgage benefits for veterans and service members.",
    },
    {
      title: "USDA Loans",
      description:
        "Loans designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    },
    {
      title: "New Construction Financing",
      description:
        "Specialized financing for building your dream home from the ground up.",
    },
    {
      title: "Non-Traditional Solutions",
      description:
        "Tailored financing options for self-employed borrowers who may not qualify through traditional methods.",
    },
  ];

  const faqs = [
    {
      q: "How fast can I get pre-approved?",
      a: "Most pre-approvals are completed within 24-48 hours once all documentation is received.",
    },
    {
      q: "What credit scores work for first-time buyers?",
      a: "FHA loans accept scores as low as 580 with 3.5% down. Conventional loans typically require 620+.",
    },
    {
      q: "What documents do self-employed borrowers need?",
      a: "Typically 12-24 months of personal or business bank statements showing consistent income, along with tax returns.",
    },
    {
      q: "What are USDA loan requirements?",
      a: "USDA loans are for rural properties and require the home to be in an eligible area. They offer 0% down payment options.",
    },
    {
      q: "How does new construction financing work?",
      a: "Construction loans provide funds to build your home, then convert to permanent financing once construction is complete.",
    },
    {
      q: "What are typical VA loan timelines?",
      a: "VA loans typically close in 30-45 days. We help veterans navigate the process from COE to appraisal.",
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
      {/* Hero Section - Randy Bongard */}
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
                Senior Loan Officer
              </p>
              <p className="text-white text-sm mb-2">NMLS #832622</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Randy Bongard
              </h1>
              <p className="text-gray-200 text-lg max-w-xl mb-2">
                690 E Warner Rd, Ste. 103
              </p>
              <p className="text-gray-200 text-lg max-w-xl mb-6">
                Gilbert, AZ 85296
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <button className="bg-white text-[#021B2C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get Pre-Approved
                  </button>
                </Link>
                <a href="tel:+14804285220">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                    <Icons.Phone className="w-4 h-4" /> Call Randy
                  </button>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-[#021B2C]/95 animate-pulse" />
                <Image
                  src="/img/rb.png"
                  alt="Randy Bongard - Senior Loan Officer"
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
        {/* About Randy Bongard */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            About Randy Bongard
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Randy has been helping clients with their home financing needs
                for nearly 25 years. He takes pride in making the mortgage
                process as smooth and enjoyable as possible, whether you're
                purchasing a new home or refinancing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                He offers a full range of loan options, including Conventional,
                FHA, VA, and USDA programs, as well as financing for new
                construction projects. For self-employed borrowers who may not
                qualify through traditional methods, Randy also provides a
                variety of non-traditional solutions tailored to their needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Originally from Augusta, Randy graduated from the University of
                Georgia with a degree in Economics. He spent nine years living
                in Atlanta, where he met his wife, before returning to Augusta
                to begin his career as a mortgage lender. He and his wife have
                two sons, Daniel (22) and Shaw (21).
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                If you want a mortgage experience that{`'`}s professional,
                personal, and even a little fun, give Randy a call.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="tel:+14804285220"
                  className="text-[#021B2C] font-medium flex items-center gap-2"
                >
                  <Icons.Phone className="w-4 h-4" />
                  (480) 428-5220
                </a>
                <a
                  href="mailto:rbongard@pricemortgage.com"
                  className="text-[#021B2C] font-medium flex items-center gap-2"
                >
                  <Icons.Mail className="w-4 h-4" />
                  rbongard@pricemortgage.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                A TEAM YOU CAN TRUST
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cornerstone First Mortgage, Inc. is a full-service mortgage
                lender headquartered in San Diego, California. Functioning as
                both the mortgage lender and broker, all aspects of the loan
                process (underwriting, funding and processing) are offered
                in-house. At Cornerstone First Mortgage, Inc., we are dedicated
                to delivering high-quality customer service and offer an
                extensive range of home loan programs with competitive rates to
                deliver a solution that best fits the need of each client.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Mission, Values & Client Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Loan Programs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Loan Programs & Expertise
          </h2>
          <p className="text-gray-600 mb-6">
            Randy offers a full range of loan options to meet your unique needs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        {/* Let's Get You Into Your Dream Home */}
        <section className="mb-16 bg-[#021B2C] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let{`'`}s get you into your dream home
          </h2>
          <p className="text-[#021B2C] max-w-2xl mx-auto mb-8">
            It{`'`}s simple to get started on your mortgage journey – whether
            you{`'`}re just looking to get pre-qualified or are ready to submit
            an application. Just click the button below or submit a contact form
            to speak with one of our mortgage experts. We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:rbongard@pricemortgage.com">
              <button className="bg-white text-[#021B2C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started Today
              </button>
            </a>
            <Link href="/contact-us">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center gap-2">
                <Icons.Mail className="w-4 h-4" /> Contact Randy
              </button>
            </Link>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Work With Randy
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
            Randy is proud to offer expert mortgage guidance in the following
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

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
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

        {/* CTA Footer */}
        <div className="mt-12 bg-[#021B2C] rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
          <p className="text-[#021B2C] mb-6 text-sm">
            Contact Randy today for a no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7068293294"
              className="inline-flex items-center gap-2 bg-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition"
            >
              <Icons.Phone className="w-5 h-5" /> (480) 428-5220
            </a>
            <a
              href="mailto:rbongard@pricemortgage.com"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <Icons.Mail className="w-5 h-5" /> Email Randy
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Randy Bongard is a licensed mortgage professional. NMLS #832622.
            Loan approvals are subject to underwriting guidelines. Equal Housing
            Lender.
          </p>
        </div>
      </div>
    </div>
  );
}
