import Logo from "../../../public/images/logo_big.svg";

const Login = () => {
  return (
    <section className=" ">
      <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <img className="w-auto h-14" src={Logo} alt="" />

            <h1 className="mt-4 text-2xl font-medium  capitalize lg:text-4xl ">
              login to your account
            </h1>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <form className="w-full lg:max-w-xl">
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
                  type="email"
                  className="block w-full py-3   border rounded-lg px-11  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

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
                  type="password"
                  className="block w-full px-10 py-3   border rounded-lg   dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
