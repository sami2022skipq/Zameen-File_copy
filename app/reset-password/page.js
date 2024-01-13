import Header from "@/components/common/header";

function Page() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <form className="flex flex-col items-center gap-y-7">
            <p className="text-xl font-semibold text-gray-900">
              Reset Password
            </p>
            <input
              type="text"
              className="outline-none border-[1px] border-gray-300 p-3 rounded w-80 sm:w-96 text-center"
              placeholder="Enter email or phone number"
            />
            <button className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg">
            Generate OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
