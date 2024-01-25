"use client";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/Facebook.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "@/assets/images/carosel-img-1.png";
import img2 from "@/assets/images/carosel-img-2.png";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithGoogle } from "@/utils/fireBase";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ZameenFileActions } from "@/features/slice";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(30, "Full Name must be at most 30 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  // phoneNumber: Yup.string()
  //   .matches(
  //     /^\+92\d{10}$/,
  //     "Phone Number must start with +92 and be 13 characters long"
  //   )
  //   .required("Phone Number is required"),
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

function Page() {
  const { push } = useRouter();
  const isLoggedIn = useSelector((state) => state.zameenFile.isLoggedIn);
  const dispatch = useDispatch()
  const images = [img1, img2];
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const signUpHandler = async (user) => {
    try {
      const data = {
        email: user.email,
        password: user.password,
        name: user.fullName,
      };
      const res = await axios.post(
        "/api/v1/auth/register",
        data,
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 201) {
        dispatch(ZameenFileActions.setUser(res.data.user));
        push("/contact-info");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      signUpHandler(values);
      resetForm();
    },
  });
  const handleSignInWithGoogle = async () => {
    // try {
    //   await signInWithGoogle();
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const isUserLoggedIn = async () => {
    try {
      const res = await axios.get("/api/v1/users/showMe", {
        withCredentials: true, // Include credentials in the request
      });
      if (res.status === 200) {
        dispatch(ZameenFileActions.setUser(res.data.user));
        push("/buy-file");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      isUserLoggedIn();
    } else {
      push("/buy-file");
    }
  }, []);
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] flex items-start justify-between rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <div className="hidden sm:block w-0 sm:w-1/2 flex-1">
            <Carousel
              className="carousel"
              infiniteLoop
              interval={6000}
              autoPlay={true}
              showStatus={false}
              showThumbs={false}
              stopOnHover={false}
              showArrows={false}
              swipeable={false}
              dynamicHeight={false}
            >
              {images.map((item, idx) => (
                <div key={idx} className="w-full h-full flex flex-1">
                  <Image
                    src={item}
                    alt="carosel-img"
                    width={"100%"}
                    height={"100%"}
                    className="object-cover object-center grow"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Sign Up</h1>
              <div className="text-xs font-medium flex items-center justify-evenly">
                <div className="border-gray-400 border-[1px] w-[130px] py-2 rounded text-center cursor-pointer flex items-center gap-x-1 justify-center shadow-sm">
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={17}
                    height={17}
                    className="object-cover object-center"
                  />
                  <p>Facebook</p>
                </div>
                <div
                  onClick={handleSignInWithGoogle}
                  className="border-gray-400 border-[1px] w-[130px] py-2 rounded text-center cursor-pointer flex items-center gap-x-1 justify-center shadow-sm"
                >
                  <Image
                    src={google}
                    alt="facebook"
                    width={17}
                    height={17}
                    className="object-cover object-center"
                  />
                  <p>Google</p>
                </div>
              </div>
              <div className="text-xs flex items-center">
                <div className="w-[45%] h-[1px] bg-gray-400 mt-1"></div>
                <p className="w-[10%] text-center">or</p>
                <div className="w-[45%] h-[1px] bg-gray-400 mt-1"></div>
              </div>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="space-y-1">
                  <label>Full Name</label>
                  <div
                    className={`input-container ${
                      formik.touched.fullName &&
                      formik.errors.fullName &&
                      "border-red-500"
                    }`}
                  >
                    <i className="fa-regular fa-user text-xl"></i>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Adbullah"
                      id="fullName"
                      name="fullName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                    />
                  </div>
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-xs text-red-500">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label>Email</label>
                  <div
                    className={`input-container ${
                      formik.touched.email &&
                      formik.errors.email &&
                      "border-red-500"
                    }`}
                  >
                    <i className="fa-solid fa-envelope text-xl"></i>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="abc@gmail.com"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-xs text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label>Create Password</label>
                  <div
                    className={`input-container ${
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
                    <div className="text-xs text-red-500">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div>
                  <label>Confirm Password</label>
                  <div
                    className={`input-container ${
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
                    <div className="text-xs text-red-500">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg"
                >
                  Sign Up
                </button>
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-main-color font-semibold"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
