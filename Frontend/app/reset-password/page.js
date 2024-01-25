"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function Page() {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted with values:", values);
      resetForm();
      push("/otp-verification");
    },
  });
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <form
            className="flex flex-col items-center gap-y-7"
            onSubmit={formik.handleSubmit}
          >
            <p className="text-xl font-semibold text-gray-900">
              Reset Password
            </p>
            <div>
              <input
                type="text"
                className={`outline-none border-[1px] border-gray-300 p-3 rounded w-80 sm:w-96 text-center ${
                  formik.touched.email &&
                  formik.errors.email &&
                  "border-red-500"
                }`}
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-xs text-red-500 pt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg"
            >
              Generate OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
