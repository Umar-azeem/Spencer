"use client";

import React from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  Newspaper,
  TrendingUp,
  Home,
  DollarSign,
  Shield,
  Search,
  BookOpen,
  Sparkles,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "FHA Loan Requirements Arizona Buyers Should Know",
    excerpt:
      "Learn fha loan requirements arizona buyers should know, including credit score, down payment, income, property, and closing rules.",
    date: "July 9, 2026",
    category: "FHA Loans",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop",
    slug: "loan-programs?program=fha",
  },
  {
    id: 2,
    title: "First Time Home Buyer Loans in Arizona",
    excerpt:
      "Learn how first time home buyer loans Arizona work, which programs may fit, and what credit, down payment, and income rules to expect.",
    date: "July 7, 2026",
    category: "First Time Buyers",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
    slug: "loan-programs?program=va",
  },
  {
    id: 3,
    title: "Can You Buy a Home Without a Credit Score? Yes – Here's How",
    excerpt:
      "Think you need a credit score to qualify for a mortgage? Learn how you may still qualify for a home loan without a traditional credit score.",
    date: "July 2, 2026",
    category: "Credit Tips",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    slug: "loan-programs?program=dpa",
  },
  {
    id: 4,
    title:
      "Buy Before You Sell: How a Bridge Loan Can Help You Make a Non-Contingent Offer",
    excerpt:
      "In today's competitive real estate market, make a non-contingent offer with a bridge loan. Learn how to buy before you sell.",
    date: "June 29, 2026",
    category: "Bridge Loans",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=500&fit=crop",
    slug: "loan-programs?program=jumbo",
  },
  {
    id: 5,
    title: "Bridge Loan Mortgage Guide: Smooth Your Home Transition",
    excerpt:
      "You found the perfect house. But you have to sell your current house first. Learn how a bridge loan can smooth your home transition.",
    date: "October 10, 2025",
    category: "Bridge Loans",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
    slug: "loan-programs?program=refinance",
  },
  {
    id: 6,
    title: "When is the Best Time to Buy a House?",
    excerpt:
      "Trying to figure out the best time to buy a house can feel like you're trying to time the stock market. Get expert insights on timing your home purchase.",
    date: "October 8, 2025",
    category: "Buying Tips",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1430285561322-7808604715df?w=800&h=500&fit=crop",
    slug: "loan-programs?program=non-qm",
  },
  {
    id: 7,
    title: "Refinancing for Home Improvements: What Homeowners Should Know",
    excerpt:
      "Thinking about finally tackling that kitchen remodel or bathroom upgrade? Learn how refinancing can help pay for home improvements.",
    date: "October 6, 2025",
    category: "Refinancing",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=500&fit=crop",
    slug: "loan-programs?program=rehab",
  },
  {
    id: 8,
    title: "HELOC vs. Home Equity Loan in Arizona: Which Is Right for You?",
    excerpt:
      "Living in Arizona where home values have increased, your home might be holding onto some serious cash. Learn the difference between HELOC and Home Equity Loans.",
    date: "October 3, 2025",
    category: "Home Equity",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
    slug: "loan-programs?program=usda",
  },
  {
    id: 9,
    title: "Does a Government Shutdown Delay Your Mortgage?",
    excerpt:
      "When you hear about a government shutdown, it's natural to wonder how it might affect your mortgage. Learn which programs can experience delays.",
    date: "October 1, 2025",
    category: "Mortgage Tips",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=800&h=500&fit=crop",
    slug: "loan-programs?program=rehab",
  },
  {
    id: 10,
    title: "Temporary Rate Buydowns 101",
    excerpt:
      "As you try and navigate purchasing a home in 2024, it may seem like an unreachable dream with interest rates near their 15 year highs. Learn how temporary rate buydowns can help.",
    date: "April 22, 2024",
    category: "Rate Buydowns",
    author: "Randy Bongard",
    authorRole: "Loan Officer",
    authorImage: "/img/rb.png",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop",
    slug: "loan-programs?program=usda",
  },
];

const BlogSection: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = React.useState(6);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category)),
  );

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#021B2C]/10 px-4 py-2 text-sm font-medium text-[#021B2C] ring-1 ring-[#021B2C]/20 mb-4">
              <Newspaper className="h-4 w-4" />
              Our Blog
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-[#021B2C] sm:text-5xl">
              Latest Insights
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Expert advice on mortgages, home buying, and more
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#021B2C] hover:text-[#021B5C] transition-colors"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-[#021B2C] text-white shadow-lg shadow-[#021B2C]/25"
                : "bg-white text-gray-600 hover:bg-[#021B2C]/10 ring-1 ring-gray-200"
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#021B2C] text-white shadow-lg shadow-[#021B2C]/25"
                  : "bg-white text-gray-600 hover:bg-[#021B2C]/10 ring-1 ring-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#021B2C]/20 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021B2C]/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#021B2C]/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-white/80">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-[#021B2C group-hover:text-[#021B2C] transition-colors line-clamp-2">
                  <a href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="h-9 w-9 rounded-full ring-2 ring-[#021B2C]/20 object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#021B2C] truncate">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {post.authorRole}
                    </p>
                  </div>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full bg-[#021B2C]/10 p-2 text-[#021B2C] hover:bg-[#021B2C] hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visiblePosts < filteredPosts.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 rounded-full bg-[#021B2C] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#021B2C]/25 hover:bg-[#021B2C transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="h-4 w-4" />
              Load More Articles
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center ring-1 ring-gray-100">
            <div className="text-2xl font-bold text-[#021B2C]">
              {blogPosts.length}+
            </div>
            <div className="text-xs text-gray-500">Articles</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center ring-1 ring-gray-100">
            <div className="text-2xl font-bold text-[#021B2C]">
              {categories.length}
            </div>
            <div className="text-xs text-gray-500">Categories</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center ring-1 ring-gray-100">
            <div className="text-2xl font-bold text-[#021B2C]">1000+</div>
            <div className="text-xs text-gray-500">Readers</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center ring-1 ring-gray-100">
            <div className="text-2xl font-bold text-[#021B2C]">4.9★</div>
            <div className="text-xs text-gray-500">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
