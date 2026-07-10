import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/jobs" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Find Jobs", href: "/jobs" },
      { name: "Companies", href: "/companies" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:border-gray-800 dark:bg-gray-950">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">


        {/* Brand */}

        <div>

          <Link
            href="/"
            className="text-3xl font-bold text-blue-600"
          >
            Next<span className="text-gray-900 dark:text-white">
              Hire
            </span>
          </Link>


          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Find your dream job and build your career with
            NextHire. We connect talented people with
            great companies.
          </p>


          <div className="mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-400">

            <p className="flex items-center gap-2">
              <Mail size={18}/>
              jannati2917@gmail.com
            </p>


            <p className="flex items-center gap-2">
              <Phone size={18}/>
              +880 1754252246
            </p>


            <p className="flex items-center gap-2">
              <MapPin size={18}/>
              Dhaka, Bangladesh
            </p>

          </div>

        </div>




        {/* Links */}

        {footerLinks.map((section)=>(

          <div key={section.title}>

            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              {section.title}
            </h3>


            <ul className="space-y-3">

              {section.links.map((link)=>(

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        ))}


      </div>




      {/* Bottom */}

      <div className="border-t py-5 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">

        © {new Date().getFullYear()} NextHire. All rights reserved.

      </div>


    </footer>
  );
}