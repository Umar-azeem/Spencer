import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          NMLS #1429043 | AZ MB - 0934484 | AL 1429043 | CA DBO - 60DBO85836 |
          CO 1429043 | CT 1429043 | FL MBR4652 | GA 1429043 | ID 1429043 | IN
          1429043 | IA 2022-0216 | KS 1429043 | KY MB766284 | MA MB1429043 | MI
          1429043 | MN MN-MO-1429043 | MT 1429043 | NV 1429043 | NM 1429043 | NC
          B-200956 | OH RM.804500.000 | OK MB015022 | OR ML - 5706 | SC 1429043
          | TN 1429043 | TX 1429043 | UT 12437660 | VA MC-7349 | WA MB-1429043 |
        </p>

        <p className="mt-6">
          {" "}
          WI 1429043 | WY 4274 | Mortgage Broker only, not a Mortgage Lender or
          Mortgage Correspondent Lender.
        </p>

        <p className="mt-6">
          
          © {currentYear} Price Mortgage, LLC. All rights reserved.
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logor.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
