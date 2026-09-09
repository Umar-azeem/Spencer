"use client";

import Link from "next/link";
import Image from "next/image";
import FooterText from "./FooterText";
import { JSX } from "react/jsx-runtime";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
  icon: JSX.Element;
}

const socialIcons: SocialIcon[] = [
  {
    id: "facebook",
    src: "https://www.facebook.com/fdmhomeold/posts/50-star-review-received-on-experiencecom-for-spencer-bangert-by-brenda-g-b-r-spe/5094514537334437/",
    alt: "Facebook",
    url: "https://www.facebook.com/fdmhomeold/posts/50-star-review-received-on-experiencecom-for-spencer-bangert-by-brenda-g-b-r-spe/5094514537334437/",
    icon: (
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 320 512"
        >
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </span>
    ),
  },
  {
    id: "instagram",
    src: "https://www.fdmhome.com/spencerbangert.html",
    alt: "Instagram",
    url: "https://www.fdmhome.com/spencerbangert.html",
    icon: (
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    ),
  },
  {
    id: "linkedin",
    src: "https://www.linkedin.com/checkpoint/challenge/AgFcCCMLOusvRgAAAaBqcmFT-JEoh9_hihEjE51tqwo_B_yx1OwyvgJ2XhZGPkqeLGoeWETuDILg_Y37g8kAkPozkN4PSw?ut=089aOqHAFcRIo1",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/checkpoint/challenge/AgFcCCMLOusvRgAAAaBqcmFT-JEoh9_hihEjE51tqwo_B_yx1OwyvgJ2XhZGPkqeLGoeWETuDILg_Y37g8kAkPozkN4PSw?ut=089aOqHAFcRIo1",
    icon: (
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </span>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1c1c1c] text-white rounded-t-3xl px-6 py-10 md:px-10 w-full mx-auto mt-10">
      {/* Top CTA Section */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Ready To Apply For Your <br className="hidden sm:block" /> Home Loan?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link href="/contact-us">
            <button className="bg-[#021B2C] px-6 py-3 rounded-xl transition-transform duration-300 hover:translate-y-1 w-full sm:w-auto">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Main Content Columns */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Spencer Bangert
          </h3>
          <p className="mb-2 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
              alt="Phone"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="tel:4432540132"
              className="hover:text-gray-300 transition-colors"
            >
              (443) 254-0132
            </Link>
          </p>

          <p className="mb-2 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b81_mail-white.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="https://www.fdmhome.com/spencerbangert.html"
              className="break-all hover:text-gray-300 transition-colors"
            >
              Spencer&apos;s website
            </Link>
          </p>
          <p className="mb-4 flex flex-row items-start gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b96_location-on-white.svg"
              alt="Location"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              unoptimized
            />
            <a
              href="https://maps.google.com/?q=1601+S+De+Anza+Blvd+%23260+Cupertino+CA+95014"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors flex flex-col items-start gap-1"
            >
              438 North Frederick Ave, Suite 315
              <br />
              Gaithersburg, MD 20877
            </a>
          </p>
          {/* Social Links Row */}
          <div className="flex items-center gap-3 w-full">
            {socialIcons.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="w-9 h-8 md:w-10 md:h-10 hover:text-gray-600 text-white hover:bg-white transition-colors rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1c1c1c] transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* logoV + Scroll-to-top Column */}
        <div className="flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-end gap-6 md:gap-0">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-[#021B2C] flex items-center justify-center flex-shrink-0 transition-transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Scroll to top"
          >
            <Image
              src="https://api.iconify.design/material-symbols:keyboard-arrow-up.svg?color=%23ffffff"
              alt="Scroll to top"
              width={32}
              height={32}
              className="w-8 h-8"
              unoptimized
            />
          </button>

          <div className="flex flex-col items-center md:mt-20">
            <Image
              src="/img/logoS.png"
              alt="Spencer Bangert logo"
              width={100}
              height={100}
              className="w-32 h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
      <FooterText />
    </div>
  );
}
