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
    id: "zillow",
    src: "https://www.zillow.com/lender-profile/Spencer%20Bangert/",
    alt: "Zillow",
    url: "https://www.zillow.com/lender-profile/Spencer%20Bangert/",
    icon: (
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88.4 88c13.4 0 25.2 7.1 31.7 18.6l77.5 134.3 77.5-134.3c6.5-11.5 18.3-18.6 31.7-18.6c20.2 0 36.5 16.3 36.5 36.5c0 8.9-3.3 17.4-9.3 24L269.8 304.5v41.2c0 10.7-8.7 19.4-19.4 19.4s-19.4-8.7-19.4-19.4V304.5L140.8 180.5c-6-6.6-9.3-15.1-9.3-24c0-20.2 16.3-36.5 36.5-36.5h-15.6z" />
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
              href="mailto:spencer@fdmhome.com"
              className="break-all hover:text-gray-300 transition-colors"
            >
              spencer@fdmhome.com
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
