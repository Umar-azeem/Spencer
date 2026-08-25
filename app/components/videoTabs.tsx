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
    videos: [
      { id: 1, title: "🎆 Happy Independence Day! 🎆", youtubeId: "XJ8E32aul58" },
      { id: 2, title: "🚨 Alert! Game Changer for Your Home Loan Application in the Bay Area", youtubeId: "D4iV_eAfYBY" },
    ],
  },
  {
    key: "divorce-and-mortgage",
    label: "Divorce & Mortgage",
    icon: ClipboardCheck,
    videos: [
      { id: 1, title: "Don't Wait for Your Divorce to Buy a Home", youtubeId: "D4iV_eAfYBY" },
      { id: 2, title: "2 Ways to Qualify for a Mortgage During Divorce", youtubeId: "STWdpcwlF7c" },
      { id: 3, title: "You DON'T Have to Wait Until Your Divorce Is Final", youtubeId: "XTGbegF4Mq4" },
    ],
  },
  {
    key: "investor-loans",
    label: "Investor & Business Loans",
    icon: Layers,
    videos: [
      { id: 1, title: "The Mortgage Secret Banks Don't Want You to Know", youtubeId: "GwUnfr80YvU" },
      { id: 2, title: "Your Income Doesn't Matter", youtubeId: "_QCAqHPz_XQ" },
      { id: 3, title: "The Loan They Don't Want You to Know About", youtubeId: "gWKRcQh6Wm4" },
    ],
  },
  {
    key: "home-buying-tips",
    label: "Home Buying Tips",
    icon: Route,
    videos: [
      { id: 1, title: "Factor in Taxes & Insurance Costs", youtubeId: "Z9I8F9s_1s4" },
      { id: 2, title: "Why You Shouldn't Wait for Your Divorce to Finalize", youtubeId: "aZZftZR7u-0" },
      { id: 3, title: "Mortgage Qualification Tips During Life Changes", youtubeId: "REnKa8BVMFI" },
    ],
  },
  {
    key: "loan-programs",
    label: "Loan Programs",
    icon: Layers,
    videos: [
      { id: 1, title: "Understanding DSCR Loans for Investors", youtubeId: "WkLJyhqgRlU" },
      { id: 2, title: "Asset-Based Lending Explained", youtubeId: "HtpNUrOYdP4" },
      { id: 3, title: "Bank Statement Loan Programs", youtubeId: "A519CuarPU8" },
    ],
  },
  {
    key: "faq",
    label: "FAQ",
    icon: HelpCircle,
    videos: [
      { id: 1, title: "Common Mortgage Questions Answered", youtubeId: "IuPiV8L5_F8" },
      { id: 2, title: "How to Get Pre-Qualified", youtubeId: "PgKZK85DrVU" },
      { id: 3, title: "Understanding Your Loan Options", youtubeId: "isZdNZVQgk0" },
      { id: 4, title: "Mortgage Tips for First-Time Buyers", youtubeId: "UF31ZMRL2dg" },
      { id: 5, title: "What to Know About Mortgage Insurance", youtubeId: "cDI5vVjH6P8" },
      { id: 6, title: "How to Prepare for a Mortgage Application", youtubeId: "1PJvoxGyo_Y" },
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