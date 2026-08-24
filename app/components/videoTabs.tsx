"use client";
import { useState } from "react";
import {
  User,
  ClipboardCheck,
  Route,
  Layers,
  Building2,
  HardHat,
  HelpCircle,
} from "lucide-react";
import VideoCardCarousel from "./VideoCardCarousel";

interface Video {
  id: number;
  title: string;
  youtubeId: string;
}

interface Tab {
  key: string;
  label: string;
  icon: React.ElementType;
  videos: Video[];
}

const TABS: Tab[] = [
  {
    key: "about-me",
    label: "About Me",
    icon: User,
    videos: [{ id: 1, title: "Meet Randy Bongard", youtubeId: "LUibfdCZzbs" }],
  },
  {
    key: "pre-qualified",
    label: "Getting Pre-Qualified",
    icon: ClipboardCheck,
    videos: [
      { id: 1, title: "Pre-Qualification Process", youtubeId: "8iAxECWWbfg" },
      {
        id: 2,
        title: "Now That You Are Pre-Qualified",
        youtubeId: "tZ-xpcj2kno",
      },
    ],
  },
  {
    key: "loan-process",
    label: "Loan Process",
    icon: Route,
    videos: [
      { id: 1, title: "Loan Process & Expectations", youtubeId: "vQh_RZfB0Ao" },
      {
        id: 2,
        title: "How to Read Your Loan Estimate",
        youtubeId: "Ih3-5dJyxoY",
      },
      {
        id: 3,
        title: "Your Interest Rate is Locked!",
        youtubeId: "Mv5SU6rJH80",
      },
      { id: 4, title: "Submitted To Processing", youtubeId: "ndFsbFEqY1o" },
      { id: 5, title: "Appraisal Ordered", youtubeId: "4bh4C66jj4E" },
      { id: 6, title: "Submitted To Underwriting", youtubeId: "Xw2JcdSaiHU" },
      { id: 7, title: "Appraisal Complete", youtubeId: "dp-nCDpXJbg" },
      { id: 8, title: "Resubmitted To Underwriting", youtubeId: "lpfvLiwpvQE" },
      { id: 9, title: "Initial Loan Approval", youtubeId: "SprGlOi-P7g" },
      { id: 10, title: "Final Loan Approval", youtubeId: "DE5CKHViVxg" },
      { id: 11, title: "Closing Disclosure", youtubeId: "Qae0H2iOLTc" },
      { id: 12, title: "Documents Sent To Title", youtubeId: "P1HUETbWBag" },
      { id: 13, title: "Your Loan Has Funded!", youtubeId: "H0QhihB01lA" },
    ],
  },
  {
    key: "loan-programs",
    label: "Loan Programs",
    icon: Layers,
    videos: [
      { id: 1, title: "Conventional Loans", youtubeId: "ivUMh2cf64Q" },
      { id: 2, title: "FHA Loans", youtubeId: "5QfqqvrzmRA" },
      { id: 3, title: "1.5% Down FHA DPA Program", youtubeId: "vhZoo55q9pc" },
      { id: 4, title: "$0 Down VA Loan Limit", youtubeId: "Vl1BFjlQHFs" },
      { id: 5, title: "FHA DACA Loan", youtubeId: "zwF8YVJv3Js" },
      { id: 6, title: "VA Loans", youtubeId: "NW3ipoTl1Ic" },
      { id: 7, title: "All-In-One Loan Program", youtubeId: "v1H_E-XPgcw" },
      {
        id: 8,
        title: "High Balance Conventional Loan",
        youtubeId: "78QfGro6g5w",
      },
      { id: 9, title: "Self Employed Loan Program", youtubeId: "PxlIyOIj4wY" },
      { id: 10, title: "Parents Loan", youtubeId: "Xkjfj0shWUw" },
      { id: 11, title: "Kiddie Condo Loan", youtubeId: "5pZCFKi_2jA" },
      { id: 12, title: "Cash Flow Investor Loan", youtubeId: "QbET9Bj6ws0" },
      { id: 13, title: "Cash Out Refinance", youtubeId: "rQhxXB14NJ8" },
      {
        id: 14,
        title: "Using Trust Income to Qualify",
        youtubeId: "U5Zsh72jLNk",
      },
    ],
  },
  {
    key: "for-realtors",
    label: "For Realtors",
    icon: Building2,
    videos: [
      { id: 1, title: "Low Appraisal? We Can Help!", youtubeId: "215SMN3Cbw0" },
      { id: 2, title: "Our Value Proposition", youtubeId: "WMq4Z2_MO3c" },
      { id: 3, title: "5/1 FHA & VA ARM Loan", youtubeId: "WYXJi5nBFIE" },
      { id: 4, title: "Cash Offer Loan Program", youtubeId: "G-VB_U8wlJk" },
      { id: 5, title: "Rent vs Buy", youtubeId: "axNAY2aJUWk" },
      { id: 6, title: "Delayed Financing", youtubeId: "PEqzGJqmCTI" },
      { id: 7, title: "Conventional Loan Up To $2M", youtubeId: "QE_5zLp_JZU" },
      { id: 8, title: "Bridge Loan", youtubeId: "cqNpwlfllyQ" },
      { id: 9, title: "1099 Only Loan Program", youtubeId: "hVzNk6ociBc" },
      { id: 10, title: "FHA & VA 580 FICO", youtubeId: "iL8Hw7mUST0" },
      {
        id: 11,
        title: "More Purchasing Power For Your Clients",
        youtubeId: "KiLtTxVymEg",
      },
      {
        id: 12,
        title: "Can't Get Your Deal Approved?",
        youtubeId: "fYlvITdSXKQ",
      },
      { id: 13, title: "List Reports", youtubeId: "Ubr-SgyBpS0" },
      { id: 14, title: "Investor Specials", youtubeId: "Hj90h_ri1Zg" },
      { id: 15, title: "100+ Loan Programs", youtubeId: "fksfuoGi_i8" },
      { id: 16, title: "Appraisal Pre-Check", youtubeId: "IrwOY5dkRKQ" },
      {
        id: 17,
        title: "Industry Leading Technology",
        youtubeId: "p42fP61olqA",
      },
      { id: 18, title: "Generate More Transactions", youtubeId: "uFlQFG63yZc" },
      {
        id: 19,
        title: "Listing Agent? Ask Your LO These Questions!",
        youtubeId: "K16Bnkbfsew",
      },
      { id: 20, title: "Sell More Homes!", youtubeId: "_g9ooHKmaAQ" },
      { id: 21, title: "21 Day Closing Guarantee", youtubeId: "OGLUQ3PE3aA" },
      {
        id: 22,
        title: "More Loan Programs For Your Buyers",
        youtubeId: "jMJcwof6bDM",
      },
      {
        id: 23,
        title: "How Many Lenders Can Say This?",
        youtubeId: "m2Z78avsFMk",
      },
      {
        id: 24,
        title: "We Don't Charge Any Lender Fees!",
        youtubeId: "bojrd-89olM",
      },
      {
        id: 25,
        title: "Lower Rates Means More House For Your Buyers!",
        youtubeId: "jTJ0bTdi3ag",
      },
      {
        id: 26,
        title: "A 365 Day Marketing Platform For Real Estate Professionals",
        youtubeId: "BYafLdomaaU",
      },
    ],
  },
  {
    key: "for-builders",
    label: "For Builders",
    icon: HardHat,
    videos: [
      {
        id: 1,
        title: "2.5% – 3.0% 30 Year Fixed Loan",
        youtubeId: "zwywR8-7K_c",
      },
      { id: 2, title: "New Build Rate Strategy", youtubeId: "AvpNO6IG7ck" },
      {
        id: 3,
        title: "Do You Have a Mortgage Broker On Your Team?",
        youtubeId: "gkdSnA98vfQ",
      },
      {
        id: 4,
        title: "Importance of Lender Diversity",
        youtubeId: "EjZt_s21hE4",
      },
      {
        id: 5,
        title: "Generate More New Home Buyer Leads!",
        youtubeId: "M7iMOn5pl1c",
      },
      { id: 6, title: "Our Value Proposition", youtubeId: "iRv6AxScJ34" },
      { id: 7, title: "100+ Loan Programs", youtubeId: "irgEUJDU1lg" },
      {
        id: 8,
        title: "Sell More Homes In Your Community!",
        youtubeId: "mOtNm-mctbY",
      },
      {
        id: 9,
        title: "Sell More Homes With A Much Better App",
        youtubeId: "BwnO5Ts6_C4",
      },
    ],
  },
  {
    key: "faq",
    label: "FAQ",
    icon: HelpCircle,
    videos: [
      {
        id: 1,
        title: "2022 Conventional Loan Limits",
        youtubeId: "-Qn1iLxCbjs",
      },
      { id: 2, title: "2022 FHA Loan Limits", youtubeId: "2Fb5K98Fl94" },
      { id: 3, title: "21 Day Closing Guarantee", youtubeId: "_BFDHbLrV6o" },
      {
        id: 4,
        title: "How-to Compare Lender Quotes",
        youtubeId: "KkAN9ITmnuw",
      },
      {
        id: 5,
        title: "Private Mortgage Insurance FAQ's",
        youtubeId: "KQ6bvihW4UM",
      },
      {
        id: 6,
        title: "How to Pay Your Mortgage Down Faster",
        youtubeId: "3VUlQ1XaEsU",
      },
      {
        id: 7,
        title: "Wrap Student Loan Debt Into Your Refi!",
        youtubeId: "-DcqQm8mqyw",
      },
    ],
  },
];

// Convert YouTube videos to TeamMember format for carousel
const convertToTeamMembers = (videos: Video[]) => {
  return videos.map((video) => ({
    name: video.title,
    role: "Video",
    videoUrl: `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`,
    thumbnail: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
  }));
};

export default function VideoTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  // Get current videos for the carousel
  const currentTab = TABS.find((tab) => tab.key === activeTab);
  const currentVideos = currentTab
    ? convertToTeamMembers(currentTab.videos)
    : [];

  return (
    <section className="py-16 sm:py-24 relative bg-[#F5F5F5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section - Only rendered once */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#021B2C]/10 px-3 py-1.5 text-xs font-medium text-[#021B2C] ring-1 ring-[#021B2C]/20 uppercase tracking-wider">
            Video Library
          </span>
          <div className="text-center lg:text-left pt-4">
            <p className="text-[#021B2C] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
              Watch &amp; Learn
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
              Pick a topic below to see every video we've made about it.
            </h1>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#021B2C] text-white shadow-lg shadow-[#021B2C]/25 ring-2 ring-[#021B2C]/50"
                    : "bg-white text-gray-700 hover:bg-[#021B2C]/10 ring-1 ring-gray-200 hover:ring-[#021B2C]/30"
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-gray-500"}`}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Single Carousel Section - Renders only one carousel */}
        <div className="mt-12">
          {currentVideos.length === 0 ? (
            <p className="text-center text-sm text-gray-500">
              No videos in this category yet.
            </p>
          ) : (
            <VideoCardCarousel videos={currentVideos} />
          )}
        </div>
      </div>
    </section>
  );
}
