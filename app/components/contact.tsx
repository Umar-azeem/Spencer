"use client";

import { JSX, useState } from "react";
import { Phone, Mail, Clock, Lock, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    src: "https://www.facebook.com/SpencerBangertFDM/",
    alt: "Facebook",
    url: "https://www.facebook.com/SpencerBangertFDM/",
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
    id: "linkedin",
    src: "https://www.linkedin.com/in/spencer-bangert-8530512a",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/spencer-bangert-8530512a",
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
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const state = formData.get("state") as string;
    const primaryGoal = formData.get("primaryGoal") as string;
    const message = formData.get("message") as string;

    const emailSubject = encodeURIComponent(
      `Mortgage Inquiry from ${firstName} ${lastName}`,
    );
    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
State: ${state}
Primary Goal: ${primaryGoal}

Message:
${message || "No additional message provided."}

---
This inquiry was sent from the Spencer Bangert - Mortgage website.`,
    );

    window.open(
      `mailto:spencer@fdmhome.com?subject=${emailSubject}&body=${emailBody}`,
      "_blank",
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#021B2C] flex items-center justify-center">
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 border border-slate-200 rounded-2xl text-center">
          <div className="w-16 h-16 bg-[#021B2C] flex items-center justify-center mx-auto mb-4 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Message Spencer!
          </h3>
          <p className="text-slate-600 mb-2">
            Your email client has been opened with your message pre-filled.
          </p>
          <p className="text-slate-500 text-sm mb-6">
            If it didn&apos;t open, please contact us directly at{" "}
            <a
              href="mailto:spencer@fdmhome.com"
              className="text-[#021B2C] underline font-medium"
            >
              spencer@fdmhome.com
            </a>
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-[#021B2C] hover:bg-[#003B1A] text-white"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#1f1f1f]">
      {/* Hero Section */}
      <div className="relative rounded-2xl text-white py-16 sm:py-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 z-1 bg-[#021B2C] opacity-65" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-[#021B2C] uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-3">
            Licensed Mortgage Broker
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Contact Spencer Bangert
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Ready for a clear, straightforward mortgage plan? Let&apos;s
            connect.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            {/* Profile Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Hi, I&apos;m Spencer Bangert
              </h2>
              <p className="text-2xl font-semibold text-[#021B2C] mb-4">
                Your Senior Loan Officer
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Whether you are buying a new home or refinancing your current
                loan, Spencer provides personalized, dedicated service with a
                focus on closing on time and within contract.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
                With proven experience helping homeowners across Florida,
                Maryland, and Washington D.C., Spencer takes pride in making the
                loan process easy and stress free for every client.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="border-t border-gray-300 pt-8 space-y-6">
              <h3 className="font-semibold text-lg">Contact Me</h3>

              <a href="tel:4432540132" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#021B2C] shrink-0 group-hover:bg-[#021B2C] group-hover:text-white transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 leading-tight group-hover:text-[#021B2C] transition">
                    (240) 252-4095
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Phone</p>
                </div>
              </a>

              <a
                href="mailto:spencer@fdmhome.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#021B2C] shrink-0 group-hover:bg-[#021B2C] group-hover:text-white transition">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 leading-tight group-hover:text-[#021B2C] transition break-all">
                    spencer@fdmhome.com
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Email</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#021B2C] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-md text-gray-900 leading-tight">
                    Office Location
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    555 Quince Orchard Road
                    <br />
                    Gaithersburg, MD 21401
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#021B2C] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-md text-gray-900 leading-tight">
                    Business Hours
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Mon – Sun: 8:30 AM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-[#021B2C] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-md text-gray-900 leading-tight">
                    Licensed States
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Florida · Maryland · Washington D.C.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="border-t border-gray-300 pt-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-4">
                Follow &amp; Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-8 md:w-10 md:h-10 hover:text-white text-[#021B2C] hover:bg-[#021B2C] transition-colors rounded-full border border-[#021B2C] flex items-center justify-center hover:bg-[#021B2C] transition"
                    aria-label={social.alt}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">NMLS ID:</span> #1202142
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Send a Message
              </h3>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="mailto:spencer@fdmhome.com"
                  className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  spencer@fdmhome.com
                </a>
                <a
                  href="tel:4432540132"
                  className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  (240) 252-4095
                </a>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    State *
                  </label>
                  <select
                    name="state"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50 text-slate-900"
                  >
                    <option value="">Select a state...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    name="primaryGoal"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50 text-slate-900"
                  >
                    <option value="">Select a goal...</option>
                    <option value="Home Purchase">Home Purchase</option>
                    <option value="Refinance for Lower payment">
                      Refinance for Lower payment
                    </option>
                    <option value="Refinance for Cash out">
                      Refinance for Cash out
                    </option>
                    <option value="Home Equity Line of Credit (HELOC)">
                      Home Equity Line of Credit (HELOC)
                    </option>
                    <option value="Investment Property (Purchase or Refinance)">
                      Investment Property (Purchase or Refinance)
                    </option>
                    <option value="Commercial Real Estate Finance options">
                      Commercial Real Estate Finance options
                    </option>
                    <option value="General Home or Commercial Finance Questions">
                      General Home or Commercial Finance Questions
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#021B2C] bg-gray-50 resize-none"
                    placeholder="Tell me about your mortgage needs..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#021B2C] hover:bg-[#003B1A] text-white font-semibold py-6 rounded-xl disabled:opacity-70 transition transform duration-300 hover:-translate-y-0.5 shadow-md"
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  <span>
                    Your email client will open with your message pre-filled
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 text-xs text-gray-500 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-start gap-x-6 gap-y-2 font-medium text-gray-700 text-sm">
            <span>NMLS ID: #1202142</span>
            <a
              href="tel:4432540132"
              className="hover:text-[#021B2C] transition"
            >
              (240) 252-4095
            </a>
            <a
              href="mailto:spencer@fdmhome.com"
              className="hover:text-[#021B2C] transition"
            >
              spencer@fdmhome.com
            </a>
            <a
              href="https://www.nmlsconsumeraccess.org"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#021B2C]"
            >
              www.nmlsconsumeraccess.org
            </a>
          </div>
          <p className="leading-relaxed">
            <strong>Equal Housing Opportunity:</strong> We are an Equal Housing
            Opportunity lender. We are pledged to the letter and spirit of U.S.
            policy for the achievement of equal housing opportunity throughout
            the Nation.
          </p>
        </div>
      </footer>
    </div>
  );
}
