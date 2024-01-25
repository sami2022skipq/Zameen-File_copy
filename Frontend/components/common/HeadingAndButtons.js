import Link from "next/link";

function HeadingAndButtons({ buttonType }) {
  return (
    <div className="w-full lg:w-[33rem] px-4 lg:px-0 space-y-12">
      <p className="text-3xl lg:text-5xl font-semibold text-white lg:w-[33rem] text-center drop-shadow-lg">
      Find Properties Here
      </p>
      <div className="w-full flex items-center justify-between md:justify-evenly lg:justify-between gap-x-2">
        <Link
          href="/buy-file"
          className={`w-24 lg:w-32 text-white font-semibold text-xs lg:text-lg border-[1.8px] transition-all text-center ${
            buttonType === "buy" ? "bg-main-color" : "text-main-color"
          } border-white rounded-md py-2`}
        >
          Buy
        </Link>
        <Link
          href="/required-file"
          className={`w-24 lg:w-32 text-white font-semibold text-xs lg:text-lg border-[1.8px] transition-all text-center ${
            buttonType === "required" ? "bg-main-color" : "text-main-color"
          } border-white rounded-md py-2`}
        >
          Required
        </Link>
        <Link
          href="/installment-discount"
          className={`w-32 lg:w-52 text-white font-semibold text-xs lg:text-lg border-[1.8px] transition-all text-center ${
            buttonType === "installment-discount"
              ? "bg-main-color"
              : "text-main-color"
          } border-white rounded-md py-2`}
        >
          Installment Discount
        </Link>
      </div>
    </div>
  );
}

export default HeadingAndButtons;
