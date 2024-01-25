"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/,
      "Password must contain alphabets, numbers, and symbols with a length of 8-20 characters"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function page() {
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted with values:", values);
      resetForm();
      push("/sign-in");
    },
  });
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <form
            className="flex flex-col items-center gap-y-9"
            onSubmit={formik.handleSubmit}
          >
            <p className="text-xl font-semibold text-gray-900">
              Create New Password
            </p>
            <div className="flex flex-col items-center">
              <div
                className={`input-container lg:w-96 ${
                  formik.touched.password &&
                  formik.errors.password &&
                  "border-red-500"
                }`}
              >
                <i className="fa-regular fa-lock text-xl"></i>
                <input
                  type={password ? "text" : "password"}
                  className="input-field"
                  placeholder="**************"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <i
                  className={`fa-solid ${
                    password ? "fa-eye-slash" : "fa-eye"
                  } cursor-pointer text-xl`}
                  onClick={() => setPassword(!password)}
                ></i>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-xs text-red-500 pt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`input-container lg:w-96 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword &&
                  "border-red-500"
                }`}
              >
                <i className="fa-regular fa-lock text-xl"></i>
                <input
                  type={confirmPassword ? "text" : "password"}
                  className="input-field"
                  placeholder="**************"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <i
                  className={`fa-solid ${
                    confirmPassword ? "fa-eye-slash" : "fa-eye"
                  } cursor-pointer text-xl`}
                  onClick={() => setConfirmPassword(!confirmPassword)}
                ></i>
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-xs text-red-500 pt-1">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full lg:w-96 p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
