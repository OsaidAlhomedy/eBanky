import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/userServices";
import { useLocalStorage } from "../../Components/hooks";
import { useNavigate } from "react-router-dom";

function Login() {
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const result = await login(email, password);
    if (result) {
      setToken(result.data.accessToken);
      setUser(result.data.user);
    }
  };

  useEffect(() => {
    if (user && token) {
      console.log("user", user);
      navigate("/home", { replace: true });
    }
  }, [user, token]);

  return (
    <section className="grid w-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center text-3xl md:text-5xl mb-6 font-semibold text-gray-900"
        >
          Aseed eBanking
        </a>
        <div className="w-full bg-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Email address is required
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-600 text-sm">
                    Make sure you entered a valid email address
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Password is Required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 text-sm">
                    Password length must be at least 8 characters
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-white hover:text-dark"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
