"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Users,
  Star,
  X,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  videoUrl: string;
  thumbnail?: string;
}

interface VideoCardCarouselProps {
  videos: TeamMember[];
}

const VideoCardCarousel: React.FC<VideoCardCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<TeamMember | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const totalCards = videos.length;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set client and initial index - combined to avoid cascading renders
  useEffect(() => {
    setIsClient(true);
    if (totalCards > 0) {
      // Set initial index to middle if possible
      const initialIndex = Math.min(2, totalCards - 1);
      setCurrentIndex(initialIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - runs once on mount

  const stopAllVideos = () => {
    setIsPlaying(null);
  };

  const nextSlide = () => {
    if (totalCards === 0) return;
    stopAllVideos();
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    if (totalCards === 0) return;
    stopAllVideos();
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleVideoClick = (index: number) => {
    const video = videos[index];
    if (!video) return;

    // Open modal with the video
    setSelectedVideo(video);
    setShowModal(true);
    setIsPlaying(index);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
    setIsPlaying(null);
  };

  const getCardStyle = (index: number) => {
    const relativePos = index - currentIndex;
    const total = totalCards;

    let normalizedPos = relativePos;
    if (normalizedPos > total / 2) normalizedPos -= total;
    if (normalizedPos < -total / 2) normalizedPos += total;

    const absPos = Math.abs(normalizedPos);

    if (absPos === 0) {
      return {
        transform: "translateX(0px) scale(1) rotateY(0deg)",
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 10,
        ring: "ring-2 ring-[#021B2C]",
        shadow: "0 20px 60px rgba(0, 43, 228, 1)",
        isFeatured: true,
      };
    } else if (absPos === 1) {
      const direction = normalizedPos > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 180}px) scale(0.9) rotateY(${-direction * 10}deg)`,
        opacity: 0.6,
        filter: "brightness(0.75)",
        zIndex: 5,
        ring: "ring-1 ring-gray-200",
        shadow: "none",
        isFeatured: false,
      };
    } else if (absPos === 2) {
      const direction = normalizedPos > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 360}px) scale(0.85) rotateY(${-direction * 20}deg)`,
        opacity: 0.4,
        filter: "brightness(0.6)",
        zIndex: 2,
        ring: "ring-1 ring-gray-200",
        shadow: "none",
        isFeatured: false,
      };
    } else {
      const direction = normalizedPos > 0 ? 1 : -1;
      const distance = Math.min(absPos, 3);
      return {
        transform: `translateX(${direction * distance * 180}px) scale(${1 - distance * 0.1}) rotateY(${-direction * distance * 15}deg)`,
        opacity: 0,
        filter: "brightness(0.5)",
        zIndex: 1,
        ring: "ring-1 ring-gray-200",
        shadow: "none",
        isFeatured: false,
      };
    }
  };

  const getCurrentVideoName = () => {
    if (isPlaying !== null && videos[isPlaying]) {
      return videos[isPlaying].name;
    }
    return "Select a video to play";
  };

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : "";
  };

  if (!isClient || totalCards === 0) {
    return (
      <div className="relative w-full min-h-[520px] flex items-center justify-center">
        <div className="text-[#021B2C]">
          {totalCards === 0 ? "No videos available" : "Loading videos..."}
        </div>
      </div>
    );
  }

  // Responsive card dimensions
  const cardWidth = isMobile ? "w-56" : "w-72";
  const cardHeight = isMobile ? "h-[340px]" : "h-[460px]";
  const carouselHeight = isMobile ? "h-[400px]" : "h-[520px]";

  return (
    <>
      <div className="relative w-full">
        <div
          className="flex relative items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 z-20 inline-flex items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 hover:bg-[#021B2C] hover:text-white hover:ring-[#021B2C] transition-all duration-300 hover:scale-105 ${
              isMobile ? "h-8 w-8" : "h-12 w-12"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
          </button>

          <div
            className={`relative w-full max-w-4xl ${carouselHeight} flex items-center justify-center`}
          >
            <div
              className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >

              {videos.map((member, index) => {
                const style = getCardStyle(index);
                const isFeatured = style.isFeatured;

                return (
                  <div
                    key={index}
                    className={`carousel-card absolute ${cardWidth} ${cardHeight} rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer bg-white ${style.ring} ${isFeatured ? "shadow-2xl" : ""}`}
                    style={{
                      transform: style.transform,
                      opacity: style.opacity,
                      filter: style.filter,
                      zIndex: style.zIndex,
                      boxShadow: style.shadow,
                    }}
                    onClick={() => handleVideoClick(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative w-full h-full">
                      {/* Video Thumbnail */}
                      <img
                        src={
                          member.thumbnail ||
                          `https://img.youtube.com/vi/${getYouTubeId(member.videoUrl)}/hqdefault.jpg`
                        }
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[rgba(0, 43, 228, 1)]/90 via-rgba(0, 43, 228, 1)/30 to-transparent transition-opacity duration-300 ${isFeatured ? "from-[#021B2C]/95" : "from-[#021B2C]/80"}`}
                      />

                      {/* Featured Badge */}
                      {isFeatured && (
                        <div
                          className={`absolute top-3 right-3 ${isMobile ? "top-2 right-2" : ""}`}
                        >
                          <div
                            className={`inline-flex items-center gap-1 rounded-full bg-[#021B2C] px-2 py-1 text-white shadow-lg ${
                              isMobile
                                ? "text-[9px] px-1.5 py-0.5"
                                : "text-xs px-3 py-1.5"
                            }`}
                          >
                            <Star
                              className={`${isMobile ? "h-2 w-2" : "h-3 w-3"} fill-white`}
                            />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Play Overlay */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div
                          className={`rounded-full bg-[#021B2C]/90 ring-2 ring-[#021B2C]/50 backdrop-blur-sm shadow-xl ${
                            isMobile ? "p-3" : "p-4"
                          }`}
                        >
                          <Play
                            className={`text-white ${isMobile ? "h-5 w-5" : "h-8 w-8"} ml-1`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`absolute bottom-3 left-3 right-3 ${!isFeatured ? "bottom-3" : "bottom-4"} ${isMobile ? "bottom-2 left-2 right-2" : ""}`}
                      >
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-2 py-1 ring-1 ring-white/30 mb-1.5 ${
                            isMobile
                              ? "text-[8px] px-1.5 py-0.5"
                              : "text-xs px-3 py-1.5"
                          }`}
                        >
                          <Users
                            className={`text-white ${isMobile ? "h-2 w-2" : "h-3 w-3"}`}
                          />
                          <span className="text-white font-medium">
                            {member.role}
                          </span>
                        </div>
                        <p
                          className={`font-bold text-white tracking-tight ${isFeatured ? (isMobile ? "text-sm mb-0.5" : "text-2xl mb-1") : isMobile ? "text-xs" : "text-lg"}`}
                        >
                          {member.name}
                        </p>
                        {isFeatured && (
                          <p
                            className={`text-white/80 font-medium ${isMobile ? "text-[8px]" : "text-sm"}`}
                          >
                            Leading product vision &amp; strategy
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className={`absolute right-0 z-20 inline-flex items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 hover:bg-[#021B2C] hover:text-white hover:ring-[#021B2C] transition-all duration-300 hover:scale-105 ${
              isMobile ? "h-8 w-8" : "h-12 w-12"
            }`}
            aria-label="Next"
          >
            <ChevronRight className={isMobile ? "h-4 w-4" : "h-5 w-5"} />
          </button>
        </div>

        {/* Now Playing Indicator */}
        {totalCards > 0 && (
          <div className="mt-4 sm:mt-6 text-center">
            <div
              className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-lg ring-1 ring-gray-200 ${
                isMobile ? "text-xs" : ""
              }`}
            >
              <span className="text-xs sm:text-sm font-medium text-gray-500">
                Now Playing:
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#021B2C] truncate max-w-[150px] sm:max-w-none">
                {getCurrentVideoName()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Video Modal - Full responsive */}
      {showModal && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#021B2C]/40 p-2 sm:p-4 backdrop-blur-sm"
          onClick={closeModal}
        >








          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg sm:rounded-2xl bg-black ring-1 ring-[#021B2C]/30 shadow-[0_0_60px_rgba(0, 43, 228, 1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close video"
              className="absolute right-2 top-2 sm:right-3 sm:top-3 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/30 transition hover:bg-black/80"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`${selectedVideo.videoUrl}&autoplay=1`}
                title={selectedVideo.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-2 sm:p-4 bg-[#021B2C]">
              <p className="text-sm sm:text-lg font-semibold text-white truncate">
                {selectedVideo.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCardCarousel;
