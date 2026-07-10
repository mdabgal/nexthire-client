"use client";

import Link from "next/link";
import { Search, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950">

      <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">


        {/* Left Content */}

        <div>

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            🚀 Find Your Dream Career
          </span>


          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl dark:text-white">

            Find The Right Job
            <br />

            <span className="text-blue-600">
              Build Your Future
            </span>

          </h1>


          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">

            NextHire connects talented professionals with top companies.
            Search thousands of jobs and take the next step in your career.

          </p>



          {/* Search Box */}

          <div className="mt-8 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-900 sm:flex-row">


            <div className="flex flex-1 items-center gap-3 rounded-lg border px-4 py-3 dark:border-gray-700">

              <Search size={20} className="text-blue-600" />

              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full bg-transparent outline-none dark:text-white"
              />

            </div>



            <div className="flex flex-1 items-center gap-3 rounded-lg border px-4 py-3 dark:border-gray-700">

              <MapPin size={20} className="text-blue-600" />

              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent outline-none dark:text-white"
              />

            </div>


            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">

              Search

            </button>


          </div>




          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">


            <Link
              href="/jobs"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Jobs
            </Link>



            <Link
              href="/register"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Create Account
            </Link>


          </div>


        </div>




        {/* Right Image */}

        <div className="relative hidden lg:block">

          <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl dark:bg-blue-900">
          </div>


          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="Job Search"
            className="relative mx-auto rounded-3xl shadow-2xl"
          />


        </div>


      </div>


    </section>
  );
}