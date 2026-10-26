import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />

        {/* Rate / APR disclaimer */}
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

        {/* Lender disclosure — AHMC is a lender, NOT a broker */}
        <p className="mt-6 text-sm">
          Absolute Home Mortgage Corp is a licensed mortgage banker and direct
          lender, not a mortgage broker.
        </p>

        {/* Correct entity licensing block — AHMC / FDM */}
        <p className="text-sm">
          Absolute Home Mortgage Corp (d/b/a Fidelity Direct Mortgage) is
          licensed in the following states: Alabama – AL Consumer Credit License
          #22912; Arizona – Mortgage Banker License #BK-1008055; Arkansas –
          Combination Mortgage Banker-Broker-Servicer License #176743;
          California – CA Financing Law License #603L578; Colorado – Mortgage
          Company Registration; Connecticut – Mortgage Lender License
          #ML-176743; Delaware – Lender License #025694; District of Columbia –
          Mortgage Dual Authority License #MLB 176743; Florida – Mortgage
          Lender License #MLD424 and Mortgage Lender Servicer License #MLD2617;
          Georgia – Mortgage Lender License/Registration #176743; Idaho –
          Mortgage Broker/Lender License #MBL-2080176743; Illinois – Residential
          Mortgage License #MB.6761437; Indiana – DFI Mortgage Lending License
          #70384; Kentucky – Mortgage Company License #MC889240; Maine –
          Supervised Lender License #176743; Maryland – Mortgage Lender License
          #176743; Massachusetts – Mortgage Lender License #MC176743 and
          Mortgage Broker License #MC176743; Michigan – 1st Mortgage
          Broker/Lender License #FL0024163 and 2nd Mortgage Broker/Lender
          Registrant #SR0024199; New Hampshire – Mortgage Banker License
          #176743MB; New Jersey – Residential Mortgage Lender License #9826392;
          New York – Mortgage Banker License #LMBC 111237; North Carolina –
          Mortgage Lender License #L-177842; Ohio – Residential Mortgage Lending
          Act Certificate of Registration #RM.850254.000; Oklahoma – Mortgage
          Lender License #ML016776; Oregon – Mortgage Lending License #176743;
          Pennsylvania – Mortgage Lender License #34628 and Mortgage Servicer
          License #34628; Rhode Island – Lender License #20234665LL and Loan
          Broker License #20244695LB; South Carolina – BFI Mortgage
          Lender/Servicer License #MLS-176743; Tennessee – Mortgage License
          #221915; Texas – SML Mortgage Banker Registration; Vermont – Lender
          License #LL-176743; Virginia – Lender License #MC-5924 and Broker
          License #MC-5924; West Virginia – Mortgage Lender License #ML-176743.
        </p>

        <p className="mt-6 text-sm">
          Absolute Home Mortgage Corp NMLS: 176743. For licensing information go
          to:{" "}
          <Link
            href="https://www.nmlsconsumeraccess.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.nmlsconsumeraccess.org
          </Link>
          . Texas: Any consumer complaints please click below:{" "}
          <Link
            href="https://www.sml.texas.gov/wp-content/uploads/2021/07/rmlo_81_200_c_recovery_fund_notice.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Texas SML Recovery Fund Notice
          </Link>
          . Absolute Home Mortgage Corp, 165 Passaic Avenue, Suite 411,
          Fairfield, NJ 07004. Ph: 855-888-2462.
        </p>

        {/* Equal Housing Opportunity statement */}
        <p className="mt-6 text-sm">
          Equal Housing Opportunity. Absolute Home Mortgage Corp is an Equal
          Housing Lender.
        </p>

        <p className="mt-6">
          © {currentYear} Absolute Home Mortgage Corp (AHMC). All rights
          reserved.
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