import ContactContainer from "@/components/common/contact-container";
import FilterSection from "@/components/common/filter-section";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductCard from "@/components/common/product-card";
import SideListingCard from "@/components/common/side-listing-card";
import SubscriptionContainer from "@/components/common/subscription-container";

const page = () => {
  return (
    <>
      <Header />
      <FilterSection />
      <div className="w-full lg:w-[1110px] mx-auto pt-6 lg:pt-10 pb-10 lg:pb-16 flex justify-between text-sm">
        <div className="w-full lg:w-[73%] px-3 lg:px-0">
          <ProductCard />
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        <div className="w-1/4 hidden lg:block">
          <SideListingCard />
        </div>
      </div>
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
};

export default page;
