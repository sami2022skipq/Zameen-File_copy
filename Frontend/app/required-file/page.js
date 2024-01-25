import HomeInfoSection from "@/components/extras/HomeInfoSection";
import HomeListing from "@/components/extras/HomeListing";
import ContactContainer from "@/components/common/contact-container";
import Footer from "@/components/common/footer";
import SubscriptionContainer from "@/components/common/subscription-container";
import HomeBestDeal from "@/components/extras/HomeBestDeal";
import RequiredHeroSection from "@/components/extras/RequiredHeroSection";
import HomeTopAgent from "@/components/common/HomeTopAgent";
import HomeTopSoc from "@/components/common/HomeTopSoc";

function page() {
  return (
    <>
      <RequiredHeroSection />
      <HomeInfoSection />
      <HomeTopAgent/>
      <HomeTopSoc/>
      <HomeListing />
      <HomeBestDeal />
      <div className="w-full">
        <ContactContainer />
      </div>
      <div className="bg-main-color">
        <SubscriptionContainer />
      </div>
      <div className="bg-footer-background">
        <Footer />
      </div>
    </>
  );
}

export default page;
