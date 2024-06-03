import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo_big.svg";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //login with email password
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const result = await loginUser(data.email, data.password);

      console.log("setp-1: complete login user", result);
      toast.success("Successfully registered your account");
      navigate("/");
    } catch (er) {
      console.log(er);
      toast.error(er.message);
    }
  };

  //login with google
  const handleGoogleLogin = async () => {
    try {
      const result = await loginWithGoogle();

      console.log(result);
      toast.success("Successfully login with google");
      navigate("/");
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <section className=" ">
      <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <Link to="/">
              <img className="w-auto h-14" src={Logo} alt="" />
            </Link>

            <h1 className="mt-4 text-2xl font-medium  capitalize lg:text-4xl ">
              login to your account
            </h1>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full lg:max-w-xl"
            >
              <div className="relative flex items-center">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  className="block w-full py-3   border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  className="block w-full px-10 py-3   border rounded-lg   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>{" "}
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <div className="mt-1">
                <a
                  href="#"
                  className="inline-block text-sm text-blue-500  hover:underline dark:text-blue-400"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="mt-4 md:flex md:items-center ">
                <button className="btn w-full bg-green-700 text-white">
                  Login
                </button>
              </div>
              <div onClick={handleGoogleLogin} className="mt-6 text-center ">
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  or sign in with
                </p>

                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 mt-4  transition-colors duration-300 transform border rounded-lg"
                >
                  <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>

                  <span className="mx-2">Sign in with Google</span>
                </a>
              </div>
              <div className="mt-6 text-center ">
                <Link
                  to="/register"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Register Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
