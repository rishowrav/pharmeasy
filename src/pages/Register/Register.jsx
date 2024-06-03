import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo_big.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const imgData = data.image[0];
    const formData = new FormData();
    formData.append("image", imgData);

    // upload image  imgBB
    try {
      //1. upload image and get image url
      const { data: photoURL } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_key}`,
        formData,
        {
          "content-type": "multipart/form-data",
        }
      );
      console.log("step 1 complete", photoURL.data.display_url);

      //2. user Registreation (createUser)
      const result = await createUser(data.email, data.password);
      console.log("step 2 complete", result);

      //3. update userProfile
      updateProfile(auth.currentUser, {
        displayName: data.userName,
        photoURL: photoURL.data.display_url,
      });

      toast.success("Succcessfully registered your account");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="">
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
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  {...register("userName", { required: true })}
                  type="text"
                  className="block w-full py-3 border rounded-lg px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="userName"
                />
              </div>{" "}
              {errors.userName && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full mt-4 h-[3.2rem]"
              />
              {errors.image && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <select
                {...register("role", { required: true })}
                className="select h-[3.2rem] s select-bordered w-full text-[15px] focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 dark:border-gray-600 mt-6"
              >
                <option disabled selected>
                  Select Role
                </option>
                <option>User</option>
                <option>Seller</option>
              </select>
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
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
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
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
                  type="password"
                  className="block w-full px-10 py-3 border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
              <div className="mt-4">
                <div className=" md:flex md:items-center ">
                  <button className="btn w-full bg-green-700 text-white">
                    Register
                  </button>
                </div>

                <div className="mt-6 text-center ">
                  <Link
                    to="/login"
                    className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                  >
                    Already have an account?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
