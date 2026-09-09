import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p className="text-sm">
          Interest rates and annual percentage rates (APRs) are based on current
          market rates, are for informational purposes only, are subject to
          change without notice and may be subject to pricing add-ons related to
          property type, loan amount, loan-to-value, credit score and other
          variables. This is not a credit decision or a commitment to lend.
          Depending on loan guidelines, mortgage insurance may be required. If
          mortgage insurance is required, the mortgage insurance premium could
          increase the APR and the monthly mortgage payment. Additional loan
          programs may be available. Some programs are subject to income/census
          tract limit and available only in selected counties/states.
        </p>

        <p className="mt-6 text-sm">
          APR reflects the effective cost of your loan on a yearly basis,
          considering such items as interest, most closing costs, discount
          points (also referred to as “points”) and loan-origination fees. One
          point is 1.00% of the mortgage amount (e.g., $1,000 on a $100,000
          loan). Your monthly payment is not based on APR, but instead on the
          interest rate on your note. Adjustable-rate mortgage (ARM) rates
          assume no increase in the financial index after the initial fixed
          period. ARM rates and monthly payments are subject to increase after
          the fixed period: ARMs assume 30-year term.
        </p>
        <p className="text-sm">
          General Mortgage Capital Corporation and eMeta Funding are licensed in
          the following state: Alabama – NMLS: 23260, Arkansas – NMLS: 129989,
          Arizona – NMLS: 1026178, California CFL – NMLS: 60DBO-66060,
          California DRE – NMLS: 01509029, Colorado – NMLS: 254895, Connecticut
          – NMLS: 254895, Delaware – NMLS: 038061, Florida – NMLS: MLD2191,
          Georgia – NMLS – 254895, Hawaii – NMLS: HI-254895, Idaho- NMLS:
          MBL-2080254895, Illinois – NMLS: MB.6761662, Indiana – NMLS: None,
          Iowa – NMLS: 2022-0038, Kansas- NMLS: MC.0025844, Kentucky – NMLS:
          MC782027, Louisiana – NMLS: 254895, Maryland – NMLS: 254895, Maine-
          NMLS: 254895, Massachusetts – NMLS: MC254895, Michigan NMLS:
          FR0024243, Minnesota – NMLS: MO-MN-254895, Mississippi – NMLS:254895,
          Missouri – NMLS: 254895, Montana – NMLS: 254895, Nevada – NMLS: 5419,
          Nebraska – NMLS: 254895, New Hampshire, New Jersey – NMLS: 254895, New
          Mexico: NMLS – 254895: New York – NMLS: LMB 110903, North Carolina –
          NMLS: L-208502, North Dakota – NMLS; MB104140, Oklahoma – NMLS:
          ML014608, Ohio – NMLS: RM.804881.000, Oregon – NMLS: 254895,
          Pennsylvania – NMLS: 96566, Rhode Island – NMLS: None, South Carolina
          – NMLS: 254895, Tennessee – NMLS: 254895, Texas – NMLS: 254895, Utah –
          NMLS: 12679832,
        </p>
        <p className="text-sm">
          Vermont – NMLS: LL-254895, Virginia – NMLS: MC-7314, Washington –
          NMLS: CL-254895, Washington DC – NMLS: MLB254895, West Virginia –
          NMLS: ML-254895, Wisconsin – NMLS: 254895BA, Wyoming – NMLS: 4763.
          General Mortgage Capital Corporation NMLS: 254895. For licensing
          information go to: www.nmlsconsumeraccess.org Texas: Any consumer
          complaints please click below:
          https://www.sml.texas.gov/wp-content/uploads/2021/07/rmlo_81_200_c_recovery_fund_notice.pdf
          General Mortgage Capital Corporation 1350 Bayshore Hwy Ste 740,
          Burlingame CA 94010 Ph: 650-340-7800SSS
        </p>
        <p className="mt-6">
          © {currentYear} Price Mortgage, LLC. All rights reserved.
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
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
