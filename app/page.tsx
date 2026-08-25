import ApplyNow from "./components/applyNow";
import BlogSection from "./components/BlogSection";
import CardStack from "./components/Card";
import Community from "./components/Community";
import Consider from "./components/Consider";
import CreditBuild from "./components/CreditBuild";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import Intro from "./components/intro";
import Loan from "./components/Loan";
import MortgageCalculator from "./components/MortgageCalculator";
import MortgageLandingPage from "./components/MortgageLandingPage";
import VideoCardCarousel from "./components/VideoCardCarousel";
import VideoTabs from "./components/videoTabs";

export default function Home() {
  return (
   <>
   <MortgageLandingPage />
   <Intro/>
   <Community/>
   {/* <Consider/> */}
   <Education/>
   <CreditBuild/>
   <MortgageCalculator/>
   <CardStack/>
   <Loan/>
   <VideoTabs/>
   <BlogSection/>
   <ApplyNow/>
   <FAQ/>
   </>
  );
}
