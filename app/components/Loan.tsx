"use client";
import Image from "next/image";
import Link from "next/link";
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
    alt: "google",
    url: "https://www.linkedin.com/checkpoint/challenge/AgFcCCMLOusvRgAAAaBqcmFT-JEoh9_hihEjE51tqwo_B_yx1OwyvgJ2XhZGPkqeLGoeWETuDILg_Y37g8kAkPozkN4PSw?ut=089aOqHAFcRIo1",
    icon: (
      <span className="[&>svg]:h-5 [&>svg]:w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 488 512"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </span>
    ),
  },
];

const Loan: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <div>
            <p className="text-[#021B2C] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
              A Team You Can Trust
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
              Hi, I{`'`}m Spencer, a dedicated mortgage professional here to
              make your homeownership goals a reality.
            </h1>
          </div>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            With over 20 years of experience in the mortgage industry, I{`'`}ve
            had the privilege of helping countless families achieve their dream
            of homeownership. My journey has been fueled by a passion for making
            a positive impact in people{`'`}s lives. Let{`'`}s embark on this
            journey together.
          </p>

          <Link href="/about">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#021B2C] hover:bg-[#021B2C]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              About me{" "}
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center items-center mt-16 sm:mt-20 lg:mt-0">
          <div className="w-full relative ">
            <div className="flex absolute flex-col items-end gap-1.5 top-36 left-52">
              <div className="flex lg:hidden flex-col items-start gap-1 ">
                <div className="h-4 w-4 bg-white rounded-full" />
                <div className="h-3 w-3 bg-white rounded-full" />
                <div className="h-2 w-2 bg-white rounded-full" />
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>
            </div>
            <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] aspect-[4/5]  md:h-[500px] bg-[#021B2C] rounded-[20px]" />
            <Image
              src="/img/spens.png"
              alt="Advisor"
              width={480}
              height={680}
              className="absolute bottom-[2px] h-[60%] w-full max-w-[880px] object-contain object-bottom sm:h-[500px] sm:w-[450px] rounded-[20px]"
              priority
              unoptimized
            />
            <div className="sm:hidden  absolute top-6 md:bottom-1  md:top-40 left-42 -translate-x-1/2 sm:left-20 sm:translate-x-0  sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-[24px] sm:rounded-[30px] border-white shadow-4xl p-5 sm:p-8 w-[68%] sm:w-[300px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Spencer Rhodes Bangert
              </h3>
              <p className="text-gray-800 mt-2 text-xs">
                Division Sales Manager
              </p>

              <p className="text-gray-800 text-xs mt-2">NMLS# 1202142 </p>
            </div>
          </div>
          <div className="flex gap-4 m-4">
            {socialIcons.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
                className="w-9 h-8 md:w-10 md:h-10 hover:text-gray-600 text-[#021B2C] hover:bg-[#021B2C] transition-colors rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
