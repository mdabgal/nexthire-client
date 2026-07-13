// "use client";



"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");


  // const handleLogin = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     return toast.error("Please fill all fields");
  //   }

  //   const emailRegex =
  //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(email)) {
  //     return toast.error("Invalid email address");
  //   }

  //   if (password.length < 6) {
  //     return toast.error(
  //       "Password must be at least 6 characters"
  //     );
  //   }

  //   setLoading(true);

  //   try {
  //     const { error } =
  //       await authClient.signIn.email({
  //         email,
  //         password,
  //       });

  //     if (error) {
  //       toast.error(error.message ?? "Login Failed");
  //       return;
  //     }

  //     toast.success("Login Successful!");

  //     router.push("/");
  //   } catch {
  //     toast.error("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  try {
    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message ?? "Login Failed");
      return;
    }

    // JWT Generate
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/jwt`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    localStorage.setItem("access-token", data.token);

    toast.success("Login Successful!");

    router.push("/");
  } catch {
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
const handleGoogleLogin = async () => {
  try {
    const result = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

   
  } catch {
    toast.error("Google Login Failed");
  }
};

const handleDemoLogin = async () => {
  const demoEmail = "demo@nexthire.com";
  const demoPassword = "demo@nexthire.com";

  try {
    const { error } = await authClient.signIn.email({
      email: demoEmail,
      password: demoPassword,
    });

    if (error) {
      toast.error(error.message ?? "Demo Login Failed");
      return;
    }

    // JWT Generate
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/jwt`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: demoEmail,
        }),
      }
    );

    const data = await res.json();

    localStorage.setItem("access-token", data.token);

    toast.success("Demo Login Successful");

    router.push("/");
  } catch {
    toast.error("Something went wrong");
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800">

        <h1 className="text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Login to your NextHire account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 dark:bg-slate-900"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* Password */}
          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full rounded-lg border p-3 pr-12 outline-none focus:border-blue-600 dark:bg-slate-900"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        {/* OR */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="mb-3 flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        {/* Demo Login */}
        <button
          onClick={handleDemoLogin}
          className="w-full rounded-lg border border-indigo-600 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
        >
          Demo Login
        </button>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}