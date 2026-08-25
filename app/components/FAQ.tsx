"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the first step in the mortgage process?",
    answer:
      "The first step is getting pre-approved for a mortgage. This will help you determine your budget and show sellers that you are a serious buyer. Pre-approval involves a review of your financial situation and credit history.",
  },
  {
    question: "How much down payment is required?",
    answer:
      "The required down payment varies depending on the loan program and lender. Typically, down payments range from 3% to 20% of the home's purchase price. Some programs, like VA and USDA loans, may offer zero down payment options for eligible borrowers.",
  },
  {
    question: "What is the difference between a fixed-rate and an adjustable-rate mortgage?",
    answer:
      "A fixed-rate mortgage has an interest rate that remains constant throughout the life of the loan, providing predictable monthly payments. An adjustable-rate mortgage (ARM) has an interest rate that can change periodically, usually based on a benchmark index, which means your payments can increase or decrease over time.",
  },
  {
    question: "How is my credit score affected by applying for a mortgage?",
    answer:
      "When you apply for a mortgage, lenders perform a hard inquiry on your credit report, which can slightly lower your credit score. However, multiple inquiries within a short period are typically treated as a single inquiry, minimizing the impact on your score. It's important to maintain good credit habits throughout the process.",
  },
  {
    question: "What documents do I need to apply for a mortgage?",
    answer:
      "To apply for a mortgage, you'll need several documents, including proof of income (such as pay stubs and tax returns), employment history, credit history, bank statements, and information on any other assets and debts. Having these documents ready can expedite the application process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#021B2C] font-bold uppercase text-center tracking-widest text-sm sm:text-base">
          FAQ
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center mt-3 mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-6 sm:pb-8">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start sm:items-center gap-3 sm:gap-4 text-left"
              >
                {openIndex === index ? (
                  <Minus className="text-[#021B2C] w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                ) : (
                  <Plus className="text-[#021B2C] w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                )}

                <span className="text-base sm:text-xl font-bold text-[#021B2C]">
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 sm:mt-4 ml-8 sm:ml-11 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
