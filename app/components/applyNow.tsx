"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  User,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  CheckCircle,
  Building2,
  Users,
} from "lucide-react";
import Link from "next/link";

const ApplyNow: React.FC = () => {
  const [selectedLoanOfficer, setSelectedLoanOfficer] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const loanOfficers = [
    {
      name: "Spencer Rhodes Bangert",
      phone: "+1 (240) 252-4095",
      email: "Website: fdmhome.com/spencerbangert.html",
    },
  ];

  const handleApplyNow = () => {
    // Redirect to mortgage application
    window.location.href = "/mortgage-application";
  };

  return (
    <section className="min-h-screen bg-[#F5F5F5] py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#021B2C]/10 px-4 py-2 text-sm font-medium text-[#021B2C] ring-1 ring-[#021B2C]/20 mb-4">
            <CheckCircle className="h-4 w-4" />
            Apply Now
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#021B2C] tracking-tight">
            Start Your Application
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get started on your home loan journey today. It{`'`}s quick, easy,
            and secure.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden">
          {/* Loan Officer Selection */}
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex items-start gap-3 mb-4">
              <User className="h-5 w-5 text-[#021B2C] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-[#021B2C]">
                  Do you know your loan officer?
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Select from the dropdown below if you know who you{`'`}re
                  working with.
                </p>
              </div>
            </div>

            {/* Dropdown */}
            <div className="relative max-w-md">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-700 transition-all hover:border-[#021B2C]/50 focus:border-[#021B2C] focus:ring-2 focus:ring-[#021B2C]/20"
              >
                <span className="flex items-center gap-2">
                  {selectedLoanOfficer ? (
                    <>
                      <User className="h-4 w-4 text-[#021B2C]" />
                      <span className="font-medium">{selectedLoanOfficer}</span>
                    </>
                  ) : (
                    <span className="text-gray-400">
                      Select a loan officer...
                    </span>
                  )}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                  {loanOfficers.map((officer, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedLoanOfficer(officer.name);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-[#021B2C]/5 transition-colors border-b border-gray-50 last:border-b-0"
                    >
                      <div className="font-medium text-gray-800">
                        {officer.name}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {officer.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {officer.email}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="text-sm text-gray-400 mt-3">
              Don{`'`}t see your loan officer? Don{`'`}t worry — we{`'`}ll
              assign you one.
            </p>
          </div>

          {/* Spencer Rhodes Bangert profile */}
          <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-[#021B2C]/5 to-[#021B2C]/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-[#021B2C] flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  <img
                    src="/img/spens.png"
                    alt="Advisor"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-[#021B2C]">
                    Spencer Rhodes Bangert
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#021B2C] px-2.5 py-0.5 text-xs font-medium text-white">
                    <Building2 className="h-3 w-3" />
                    Division Sales Manager
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-[#021B2C]" />
                    <a
                      href="tel:4432540132"
                      className="hover:text-[#021B2C] transition-colors"
                    >
                      +1 (240) 252-4095
                    </a>
                  </span>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-[#021B2C]" />
                    <a
                      href="https://www.fdmhome.com/spencerbangert.html"
                      className="hover:text-[#021B2C] transition-colors"
                    >
                      Website
                    </a>
                  </span>
                  <span className="hidden sm:block text-gray-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-[#021B2C]" />
                    NMLS# 1202142
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-6 sm:p-8">
            <div className="rounded-xl bg-[#021B2C] p-6 sm:p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-white" />
                  <span className="text-white font-medium">
                    Takes just 5-15 minutes
                  </span>
                </div>
                <p className="text-white/80 text-sm max-w-md">
                  Ready to start your mortgage application? Click the button
                  below.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[#021B2C] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Application
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex items-center gap-4 text-xs text-white/60 mt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Secure
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Encrypted
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5" />
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#021B2C]/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-[#021B2C]" />
                </div>
                <span>Trusted by 1000+ clients</span>
              </span>
              <span className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#021B2C]/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-[#021B2C]" />
                </div>
                <span>100% satisfaction rate</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            By clicking {`Start Your Application`} you agree to our{" "}
            <a href="#" className="text-[#021B2C] hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#021B2C] hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
