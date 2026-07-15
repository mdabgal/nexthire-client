"use client";

import ThemeToggle from "@/provider/ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

import { LogOut, Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
  
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
 
  const [role, setRole] = useState("");


//   useEffect(() => {
//   if (session?.user?.email) {
//     fetch(
//       `http://localhost:5000/users/${session.user.email}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setRole(data.role);
//       });
//   }
// }, [session]);


useEffect(() => {
  const syncUser = async () => {
 
    if (!session?.user?.email) return;

    const image =
      session.user.image || "https://i.ibb.co/2tZ5z3K/user.png";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${session.user.email}`
    );

    if (res.status === 404) {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: session.user.name,
            email: session.user.email,
            image,
            role: "job-seeker",
          }),
        }
      );
    }

    const userRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${session.user.email}`
    );

    const user = await userRes.json();

    setRole(user.role);


    const jwtRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/jwt`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
        }),
      }
    );


    const jwt = await jwtRes.json();

    if (jwt.token) {
      localStorage.setItem(
        "access-token",
        jwt.token
      );
    }
  };


  syncUser();

}, [session]);




const handleLogout = async () => {
  await authClient.signOut();
  toast.success("Logged out successfully");
  window.location.href = "/";
};

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-blue-600"
        >
          Next<span className="text-slate-900 dark:text-white">Hire</span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium transition ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300"
              }`}
            >
              {link.title}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600" />
              )}
            </Link>
          ))}

{session && role === "employer" && (
  <>
    <Link href="/jobs/add">Add Job</Link>

    

   <Link href="/jobs/my-jobs">
      My Jobs
    </Link>

    
  </>
)}


{session && role === "admin" && (
  <>
    <Link href="/jobs/manage">
      Manage Jobs
    </Link>

    <Link href="/applications">
      Applications
    </Link>
    <Link href="/contact-messages">
 Contact Messages
</Link>

    <Link href="/dashboard">
      Dashboard
    </Link>
  </>
)}



{session && role === "job-seeker" && (
  <Link href="/my-applications">
    My Applications
  </Link>
)}



        </nav>


        {/* Desktop Actions */}
    <div className="hidden items-center gap-4 xl:flex">
  <ThemeToggle />

  {!session ? (
    <>
      <Link
        href="/login"
        className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      >
        Register
      </Link>
    </>
  ) : (
    <>
   

      <img
        src={session.user.image || "/user.png"}
        alt="user"
        className="h-10 w-10 rounded-full border"
      />


  

      <button onClick={handleLogout}>
        <LogOut />
      </button>
    </>
  )}
</div>


        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 xl:hidden">

          <ThemeToggle />

         <button
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
>
  {isOpen ? (
    <X size={28} />
  ) : (
    <Menu size={28} />
  )}
</button>

        </div>

      </div>



      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white dark:border-gray-800 dark:bg-slate-950 xl:hidden">

          <nav className="flex flex-col gap-2 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium transition ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {link.title}
              </Link>
            ))}

{!session ? (
  <>
    <Link
      href="/login"
      onClick={() => setIsOpen(false)}
    >
      Login
    </Link>

    <Link
      href="/register"
      onClick={() => setIsOpen(false)}
    >
      Register
    </Link>
  </>
) : (
  <>
    {role === "admin" && (
      <>
      
        <Link
          href="/jobs/manage"
          onClick={() => setIsOpen(false)}
        >
          Manage Jobs
        </Link>

        <Link
          href="/dashboard"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>

        <Link href="/contact-messages">
 Contact Messages
</Link>

        <Link
          href="/applications"
          onClick={() => setIsOpen(false)}
        >
          Applications
        </Link>
      </>
    )}


{role === "employer" && (
  <>
    <Link
      href="/jobs/add"
      onClick={() => setIsOpen(false)}
    >
      Add Job
    </Link>

    <Link
      href="/jobs/my-jobs"
      onClick={() => setIsOpen(false)}
    >
      My Jobs
    </Link>
  </>
)}


    {role === "job-seeker" && (
      <Link
        href="/my-applications"
        onClick={() => setIsOpen(false)}
      >
        My Applications
      </Link>
    )}

    <button onClick={handleLogout}>
      Logout
    </button>
  </>
)}


          </nav>

        </div>
      )}

    </header>
  );
}