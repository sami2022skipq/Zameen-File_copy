"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  input1: Yup.number().integer().min(0).max(9).required("Required"),
  input2: Yup.number().integer().min(0).max(9).required("Required"),
  input3: Yup.number().integer().min(0).max(9).required("Required"),
  input4: Yup.number().integer().min(0).max(9).required("Required"),
});

function Page() {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted with values:", values);
      resetForm();
      push("/create-password");
    },
  });
  const [timmer, setTimmer] = useState(60);
  const [showTimmer, setShowTimmer] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timmer === 0) {
        setShowTimmer(false);
        clearInterval(timer);
        return;
      }
      setTimmer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timmer]);

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden px-5">
          <form
            className="flex flex-col items-center gap-y-7"
            onSubmit={formik.handleSubmit}
          >
            <p className="text-2xl font-semibold text-gray-900">OTP</p>
            <p className="text-lg font-semibold text-gray-900">
              Enter code received
            </p>
            <div className="text-center space-y-1">
              <p>You will shortly receive a 4-digit code on</p>
              <p className="font-semibold">+9231234567890</p>
            </div>
            <div className="w-80 sm:w-96 flex items-center justify-between">
              <input
                type="text"
                id="input1"
                name="input1"
                maxLength="1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.input1}
                className={`opt-input ${
                  formik.touched.input1 &&
                  formik.errors.input1 &&
                  "border-red-500"
                } `}
              />
              <input
                type="text"
                id="input2"
                name="input2"
                maxLength="1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.input2}
                className={`opt-input ${
                  formik.touched.input2 &&
                  formik.errors.input2 &&
                  "border-red-500"
                } `}
              />
              <input
                type="text"
                id="input3"
                name="input3"
                maxLength="1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.input3}
                className={`opt-input ${
                  formik.touched.input3 &&
                  formik.errors.input3 &&
                  "border-red-500"
                } `}
              />
              <input
                type="text"
                id="input4"
                name="input4"
                maxLength="1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.input4}
                className={`opt-input ${
                  formik.touched.input4 &&
                  formik.errors.input4 &&
                  "border-red-500"
                } `}
              />
            </div>
            <div className="text-center space-y-2">
              {showTimmer && (
                <p>
                  After <span className="font-semibold">{timmer}</span> second
                  you can
                </p>
              )}
              <p
                className={`text-base font-semibold ${
                  showTimmer
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }`}
              >
                RESEND CODE BY CALL
              </p>
              <p>If you have not received the code by call, Please request</p>
              <p
                className={`text-base font-semibold ${
                  showTimmer
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }`}
              >
                RESEND CODE BY SMS
              </p>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
