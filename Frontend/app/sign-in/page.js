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
import { auth, signInWithGoogle } from "@/utils/fireBase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { ZameenFileActions } from "@/features/slice";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Page() {
  const { push } = useRouter();
  const isLoggedIn = useSelector((state) => state.zameenFile.isLoggedIn);
  const dispatch = useDispatch();
  const images = [img1, img2];
  const [password, setPassword] = useState(false);
  const handleSignInWithGoogle = async () => {
    // try {
    //   await signInWithGoogle();
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const signInHandler = async (user) => {
    try {
      const data = {
        email: user.email,
        password: user.password,
      };
      const res = await axios.post(
        "/api/v1/auth/login",
        data,
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200) {
        dispatch(ZameenFileActions.setUser(res.data.user));
        push("/buy-file");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      signInHandler(values);
      resetForm();
    },
  });
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
            <div className="space-y-16">
              <h1 className="text-xl font-semibold">Sign In</h1>
              <div className="space-y-4">
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
                    className="border-gray-400 border-[1px] w-[130px] py-2 rounded text-center cursor-pointer flex items-center gap-x-1 justify-center shadow-sm"
                    onClick={handleSignInWithGoogle}
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
              </div>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="space-y-1">
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
                  <label>Password</label>
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
                <div className="pt-8">
                  <button
                    className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="text-sm text-center space-y-2.5">
                  <p>
                    Have not any account?{" "}
                    <Link
                      href="/sign-up"
                      className="text-main-color font-semibold"
                    >
                      Create An Account
                    </Link>
                  </p>
                  <Link href="/reset-password">
                    <p className="font-semibold">Forget Password?</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
