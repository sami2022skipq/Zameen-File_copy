import Header from "@/components/common/header";
import Image from "next/image";
import img from "@/assets/images/contact-image.png";
import email from "@/assets/images/Email.png";
import phone from "@/assets/images/Phone.png";
import location from "@/assets/images/Location.png";
import SubscriptionContainer from "@/components/common/subscription-container";
import Footer from "@/components/common/footer";
import img2 from "@/assets/images/contact-image-2.png";

function Page() {
  return (
    <>
      <Header />
      <div className="pt-[78px]">
        <div className="w-full h-[38.125rem] relative">
          <Image
            src={img}
            className="h-full w-full object-cover object-center"
            alt="contact us"
          />
          <div className="w-full h-[38.125rem] absolute top-0 right-0 bg-[#2626266e] flex items-center justify-center">
            <div className="text-center text-white w-[476px] space-y-3">
              <p className="text-5xl font-semibold">Contact Us</p>
              <p className="text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 lg:py-16 space-y-20">
          <div className="space-y-3 text-center">
            <p className="text-sm">Contact us</p>
            <p className="text-5xl font-semibold">Get in Touch</p>
          </div>
          <div>
            <div className="px-3 text-right lg:hidden">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="w-full p-5 lg:px-16 flex items-center justify-between gap-x-5 overflow-x-auto">
              <div className="contact-page-card">
                <Image
                  src={email}
                  className="w-[76px] h-[76px] object-contain object-center"
                  alt="email"
                />
                <p className="text-xl font-semibold">Email Address</p>
                <div className="text-sm space-y-2 text-center">
                  <p>zameen@file.com</p>
                  <p>info.zameenfile@gmail.com</p>
                </div>
              </div>
              <div className="contact-page-card">
                <Image
                  src={phone}
                  className="w-[76px] h-[76px] object-contain object-center"
                  alt="email"
                />
                <p className="text-xl font-semibold">Phone Number</p>
                <div className="text-sm space-y-2 text-center">
                  <p>123 4567 567</p>
                  <p>123 4567 567</p>
                </div>
              </div>
              <div className="contact-page-card">
                <Image
                  src={location}
                  className="w-[76px] h-[76px] object-contain object-center"
                  alt="email"
                />
                <p className="text-xl font-semibold">Office Address</p>
                <div className="text-sm space-y-2 text-center">
                  <p>Abc street #23 Islamabad,</p>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] py-10 lg:py-20 px-5 lg:px-48">
          <div className="w-full flex flex-col items-center lg:flex-row gap-x-10">
            <div className="w-full lg:w-3/5 space-y-8">
              <div>
                <p className="text-sm font-medium">CONTACT</p>
                <p className="text-5xl font-semibold pt-2 pb-5">Contact us</p>
                <p className="text-xs lg:pr-20">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <form className="space-y-5 lg:space-y-8">
                <div className="flex flex-col lg:flex-row gap-x-7 space-y-5 lg:space-y-0">
                  <div className="lg:w-1/2 flex flex-col gap-y-1">
                    <label className="text-sm font-medium">Name:</label>
                    <input
                      type="text"
                      className="contact-form-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-y-1">
                    <label className="text-sm font-medium">Email:</label>
                    <input
                      type="email"
                      className="contact-form-input"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-x-7 space-y-5 lg:space-y-0">
                  <div className="lg:w-1/2 flex flex-col gap-y-1">
                    <label className="text-sm font-medium">Phone Number:</label>
                    <input
                      type="text"
                      className="contact-form-input"
                      placeholder="Your Number"
                    />
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-y-1">
                    <label className="text-sm font-medium">Subject:</label>
                    <input
                      type="text"
                      className="contact-form-input"
                      placeholder="Subject Line"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Message:</label>
                  <textarea
                    rows={5}
                    className="w-full resize-none contact-form-input"
                    placeholder="Write a Message..."
                  />
                </div>
                <button
                  type="submit"
                  className="text-base text-white bg-main-color rounded w-full lg:w-56 p-3"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="hidden lg:block w-2/5 h-2/5 rounded overflow-hidden">
              <Image
                src={img2}
                className="h-full w-full object-cover object-center"
                alt="contact us"
              />
            </div>
          </div>
        </div>
        <div className="bg-main-color">
          <SubscriptionContainer />
        </div>
        <div className="bg-footer-background">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Page;
