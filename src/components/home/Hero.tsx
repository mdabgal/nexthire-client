"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          {/* Badge */}

          <motion.span
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-950 dark:text-blue-400"
          >
            🚀 Find Your Dream Career
          </motion.span>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl dark:text-white"
          >
            Find The Right Job
            <br />
            <span className="text-blue-600">
              Build Your Future
            </span>
          </motion.h1>

          {/* Paragraph */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            NextHire connects talented professionals with top companies.
            Discover thousands of opportunities and take the next step in
            your career journey.
          </motion.p>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                15K+
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Active Jobs
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                3K+
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Companies
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                20K+
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Job Seekers
              </p>
            </div>
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/jobs"
                className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                Explore Jobs
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/register"
                className="rounded-xl border-2 border-blue-600 px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Create Account
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}

        <div className="relative hidden lg:block">
          {/* Animated Background */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-blue-300 blur-3xl dark:bg-blue-900"
          />

          {/* Hero Image */}

          <motion.img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900"
            alt="Hero"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 1,
              },
              x: {
                duration: 1,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}