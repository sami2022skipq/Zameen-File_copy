import ContactForm from "./contact-form";

const ContactContainer = () => {
  return (
    <div className="w-full lg:w-[1080px] mx-auto flex flex-col lg:flex-row mb-10 lg:mb-16 px-3 gap-y-2 lg:gap-y-0">
      <div className="lg:pt-20 lg:pr-20 w-full lg:w-[55%] space-y-2 lg:space-y-4">
        <p className="text-main-color font-sm">GET IN TOUCH</p>
        <h1 className="text-5xl font-semibold">Contact us</h1>
        <p className="text-xs text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="w-full lg:w-[45%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
