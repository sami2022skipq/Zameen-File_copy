import logo from "@/assets/images/footer-logo.png";
import Image from "next/image";
import news_image from "@/assets/images/news-img.png";

const Footer = () => {
  const services = [
    "About Us",
    "Listing",
    "How It Works",
    "Our Services",
    "Our Blogs",
    "Contact Us",
  ];
  const news = [
    {
      img: news_image,
      title: "Lorem Ipsum is simply dummy text of the industry.",
      date: "June 22, 2023",
    },
    {
      img: news_image,
      title: "Lorem Ipsum is simply dummy text of the industry.",
      date: "June 22, 2023",
    },
    {
      img: news_image,
      title: "Lorem Ipsum is simply dummy text of the industry.",
      date: "June 22, 2023",
    },
  ];
  return (
    <div className="w-full lg:w-[1080px] px-5 lg-px-0 mx-auto text-white py-8 text-sm">
      <div className="flex items-center gap-x-2">
        <Image
          src={logo}
          width={27}
          height={27}
          className="object-cover"
          alt="footer_logo"
        />
        <p className="text-xs font-semibold">Zameem File</p>
      </div>
      <div className="flex py-10 flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="w-full lg:w-[30%] space-y-4 lg:pr-7">
          <h5 className="text-xl font-semibold pb-2">About</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full lg:w-[18%] space-y-4">
          <h5 className="text-xl font-semibold pb-2">Services</h5>
          {services.map((item, idx) => (
            <p key={idx} className="cursor-pointer w-fit">
              {item}
            </p>
          ))}
        </div>
        <div className="w-full lg:w-[30%] space-y-4 lg:pr-7">
          <h5 className="text-xl font-semibold pb-2">Top News</h5>
          <div className="space-y-8">
            {news.map((item, idx) => (
              <div key={idx} className="flex gap-x-3 cursor-pointer">
                <Image
                  src={item.img}
                  width={90}
                  height={90}
                  alt="news_image"
                  className="object-cover"
                />
                <div className="flex flex-col justify-between">
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[22%] space-y-4">
          <h5 className="text-xl font-semibold pb-2">Contacts</h5>
          <div className="flex items-start gap-x-1">
            <i className="fa-solid fa-location-dot mr-1 pt-1"></i>
            <p>Abc Street, city Islamabad, Pakistan</p>
          </div>
          <div className="flex items-start gap-x-1">
            <i className="fa-solid fa-phone-volume pt-1"></i>
            <p>123 45678789</p>
          </div>
          <div className="flex items-start gap-x-1">
            <i className="fa-solid fa-envelope pt-1"></i>
            <p>zameen.file@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center">©2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
