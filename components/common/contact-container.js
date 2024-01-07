import ContactForm from "./contact-form";

const ContactContainer = () => {
  return (
    <div className="w-[980px] mx-auto flex mb-16">
      <div className="pt-20 pr-20 w-[55%] space-y-4">
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
      <div className="w-[45%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
