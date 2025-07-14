import LeftSection from "./components/left_section";
import RightSection from "./components/right_section";
import ConditionalCards from "./components/enhanced-cards";
import Main from "./components/main";
import AboutUs from "./components/about_us";
import Header from "./components/header";
import EnhancedFooter from "./components/enhanced-footer";
import Reneame1 from "./components/reneame1";
import Stats from "./components/stats";
import Gap from "./components/gap";
import EnhancedButton from "./components/enhanced-button";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#000000] text-white">
      <div className="grid grid-cols-[minmax(1px,0.5fr)_minmax(300px,6fr)_minmax(1px,0.5fr)] sm:grid-cols-[minmax(20px,0.7fr)_minmax(400px,5fr)_minmax(20px,0.7fr)] md:grid-cols-[minmax(30px,1fr)_minmax(500px,3fr)_minmax(30px,1fr)] lg:grid-cols-[1fr_5fr_1fr]">
        <Header />
        <Main />
        <Gap />
        <Stats />
        <Gap />
        <LeftSection />
        <ConditionalCards />
        <RightSection />
        <Gap />
        <AboutUs />
        <Gap />
        <Reneame1 />
        <Gap />
        <EnhancedButton />
      </div>
      <EnhancedFooter />
    </div>
  );
}
