"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(
      /^\+92\d{10}$/,
      "Phone Number must start with +92 and be 13 characters long"
    )
    .required("Phone Number is required"),
});

function Page() {
  const { push } = useRouter();
  const [check, setCheck] = useState(0);
  const [checkError, setCheckError] = useState(false);
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (check !== 1) {
        if (check !== 2) {
          setCheckError(true);
          return;
        }
      }
      const obj = { accountType: "null" };
      if (check === 1) {
        obj.accountType = "Owner";
      } else {
        obj.accountType = "Dealer";
      }
      console.log("Form submitted with values:", { ...values, ...obj });
      resetForm();
      push("/phone-otp-verification");
    },
  });
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <form
            className="flex flex-col items-start gap-y-7"
            onSubmit={formik.handleSubmit}
          >
            <p className="text-xl font-semibold text-gray-900">
              Contact Inforamtion
            </p>
            <div>
              <input
                type="text"
                className={`outline-none border-[1px] border-gray-300 p-3 rounded w-80 sm:w-96 text-center ${
                  formik.touched.phoneNumber &&
                  formik.errors.phoneNumber &&
                  "border-red-500"
                }`}
                placeholder="Enter phone number"
                id="phoneNumber"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-xs text-red-500 pt-1">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>
            <div>
              <div className="flex gap-x-6">
                <label>Select one:</label>
                <div className="flex items-center">
                  <div className="mr-6 flex items-center gap-x-1.5">
                    <div
                      className={`check-input ${
                        check === 1 && "bg-main-color"
                      }`}
                      onClick={() => {
                        setCheck(1);
                        setCheckError(false);
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <label>Owner</label>
                  </div>
                  <div className="flex items-center gap-x-1.5">
                    <div
                      className={`check-input ${
                        check === 2 && "bg-main-color"
                      }`}
                      onClick={() => {
                        setCheck(2);
                        setCheckError(false);
                      }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <label>Dealer</label>
                  </div>
                </div>
              </div>
              {checkError && (
                <div className="text-xs text-red-500 pt-0.5">
                  Please select one
                </div>
              )}
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
