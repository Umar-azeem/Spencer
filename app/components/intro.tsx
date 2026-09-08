import React from "react";

function Intro() {
  return (
    <>
      <section className="mb-16 p-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            LET{`'`}S GET INTRODUCED
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-xl md:text-2xl text-gray-800 font-medium text-center leading-snug">
              {`"`}Hi, I{`'`}m Spencer, a dedicated mortgage professional here
              to make your homeownership goals a reality.{`"`}
            </p>

            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              Whether you are buying a new home or refinancing your current
              loan, I provide personalized service with a focus on closing on
              time and within contract. I take pride in making the loan process
              easy and stress free for every client.
            </p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/lH5iZp3w3A4"
                title="Meet Spencer Bangert"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-gray-900">
              Spencer Rhodes Bangert
            </p>
            <p className="text-[#021B2C] font-medium">Division Sales Manager</p>
            <p className="text-sm text-gray-500 mt-1">NMLS# 1202142</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
