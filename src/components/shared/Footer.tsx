import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Jobs", href: "/jobs" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900 transition-colors dark:border-gray-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-3">
        {/* Logo & About */}

        <div>
          <Link
            href="/"
            className="text-3xl font-extrabold text-blue-600"
          >
            Next
            <span className="text-gray-900 dark:text-white">
              Hire
            </span>
          </Link>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            NextHire connects talented professionals with
            leading companies. Discover your dream career
            and unlock new opportunities with ease.
          </p>

          {/* Social Icons */}

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/mdabgal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 p-3 text-white transition duration-300 hover:scale-110 hover:bg-blue-700"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jannati-jannati-0203693b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 p-3 text-white transition duration-300 hover:scale-110 hover:bg-blue-700"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.facebook.com/jannati.jannati.382323"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 p-3 text-white transition duration-300 hover:scale-110 hover:bg-blue-700"
            >
              <FaFacebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h2 className="mb-5 text-xl font-bold">
            Quick Links
          </h2>

          <ul className="space-y-4">
            {footerLinks[0].links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 transition duration-300 hover:pl-2 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h2 className="mb-5 text-xl font-bold">
            Contact
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Mail
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <span>jannati2917@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Phone
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <span>+880 1754252246</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

     <div className="border-t border-gray-200 dark:border-gray-800">
  <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6 text-sm text-gray-600 dark:text-gray-400">
    <p className="text-center">
      © {new Date().getFullYear()} NextHire. All Rights Reserved.
    </p>
  </div>
</div>
    </footer>
  );
}