"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type Job = {
  _id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  jobType: string;
  salary: string;
  image: string;
};

export default function ManageJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Manage Jobs
              </h1>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Manage, edit or delete your posted jobs.
              </p>
            </div>

            <Link
              href="/jobs/add"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              + Add Job
            </Link>
          </div>

          {loading ? (
            <div className="py-20 text-center text-xl font-semibold dark:text-white">
              Loading...
            </div>
          ) : jobs.length === 0 ? (
            <div className="rounded-2xl border bg-white py-20 text-center dark:border-gray-800 dark:bg-gray-900">
              <h2 className="text-2xl font-bold dark:text-white">
                No Jobs Found
              </h2>

              <p className="mt-2 text-gray-500">
                Add your first job.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="overflow-hidden rounded-2xl border bg-white shadow-md transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="space-y-3 p-5">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Company:</span>{" "}
                      {job.company}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Category:</span>{" "}
                      {job.category}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Location:</span>{" "}
                      {job.location}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Job Type:</span>{" "}
                      {job.jobType}
                    </p>

                    <p className="text-lg font-bold text-indigo-600">
                      {job.salary}
                    </p>

                    <div className="flex gap-3 pt-3">
                      <Link
                        href={`/jobs/edit/${job._id}`}
                        className="flex-1 rounded-lg bg-green-600 py-2 text-center font-semibold text-white hover:bg-green-700"
                      >
                        Edit
                      </Link>

                      <button
                        className="flex-1 rounded-lg bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}