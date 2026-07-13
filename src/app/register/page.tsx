"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
const [role, setRole] = useState("job-seeker");
  // Upload Image to ImgBB
  const uploadToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.data.url;
  };

  // Register
  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Please fill all fields");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);

    try {
      let image =
        "https://i.ibb.co/2tZ5z3K/user.png";

      if (imageFile) {
        image = await uploadToImgBB(imageFile);
      }
const { data, error } = await authClient.signUp.email({
  name,
  email,
  password,
  image,

});

if (error) {
  toast.error(error.message ?? "Registration failed");
  setLoading(false);
  return;
}

// নিজের backend-এ user save করুন
// const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name,
//     email,
//     image,
//     role,
//   }),
// });


const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      image,
      role,
    }),
  }
);

const result = await res.json();
console.log(result);

// ======================
// JWT Token Generate
// ======================
const jwtRes = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/jwt`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  }
);

const jwtData = await jwtRes.json();

// LocalStorage এ Save
localStorage.setItem("access-token", jwtData.token);

// ======================

toast.success("Registration Successful!");

router.push("/");



    
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
   
  // Google Login
  // const handleGoogleLogin = async () => {
  //   try {
  //     await authClient.signIn.social({
  //       provider: "google",
  //       callbackURL: "/",
  //     });
  //   } catch (error) {
  //     toast.error("Google Login Failed");
  //   }
  // };

const handleGoogleLogin = async () => {
  try {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error("Google Login Failed");
      return;
    }

  } catch (error) {
    toast.error("Google Login Failed");
  }
};




  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-800">

        <h1 className="text-center text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join NextHire today
        </p>

        <form
          onSubmit={handleRegister}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 dark:bg-slate-900"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 dark:bg-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-lg border p-3"
            onChange={(e) =>
              setImageFile(e.target.files?.[0] || null)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 dark:bg-slate-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-600 dark:bg-slate-900"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />
          <div>
  <label className="mb-2 block font-medium">Select Role</label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full rounded-lg border border-gray-300 p-3 dark:bg-slate-900"
  >
    <option value="job-seeker">Job Seeker</option>
    <option value="employer">Employer</option>
  </select>
</div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-sm text-gray-500">
            OR
          </span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border py-3 transition hover:bg-gray-100 dark:hover:bg-slate-700"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}