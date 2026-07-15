"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import toast from "react-hot-toast";

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
const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);



const handleDelete = async () => {
  if (!selectedJobId) return;

  const token = localStorage.getItem("access-token");

  if (!token) {
    toast.error("Please login first");
    return;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/${selectedJobId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (data.success) {
      setJobs((prev) =>
        prev.filter((job) => job._id !== selectedJobId)
      );

      toast.success("Job deleted successfully!");

      setIsDeleteOpen(false);
      setSelectedJobId(null);
    }
  } catch (error) {
    console.log(error);
    toast.error("Delete failed!");
  }
};
  useEffect(() => {
     fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/jobs`)
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

            {/* <Link
              href="/jobs/add"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              + Add Job
            </Link> */}
          </div>
{loading ? (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="
overflow-hidden
rounded-2xl
border
border-gray-200
bg-white
shadow-lg
transition-all
duration-300
hover:-translate-y-1
hover:shadow-2xl
dark:border-gray-800
dark:bg-gray-900
dark:shadow-none
"
      >
        {/* Image Skeleton */}
        <div className="h-52 w-full animate-pulse bg-gray-300 dark:bg-gray-700"></div>

        <div className="space-y-4 p-5">
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>

          <div className="h-4 w-full animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>

          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>

          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>

          <div className="h-5 w-1/3 animate-pulse rounded bg-gray-300 dark:bg-gray-700"></div>

          <div className="mt-4 flex gap-3">
            <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>

            <div className="h-10 flex-1 animate-pulse rounded-lg bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    ))}
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
                 className="
    overflow-hidden
    rounded-2xl
    border
    border-gray-200
    bg-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-2xl
    dark:border-gray-800
    dark:bg-gray-900
    dark:shadow-none
  "
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
                        className="flex-1 rounded-lg bg-blue-600 py-2 text-center font-semibold text-white hover:bg-blue-700"
                      >
                        Edit
                      </Link>


<button
  onClick={() => {
    setSelectedJobId(job._id);
    setIsDeleteOpen(true);
  }}
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

{isDeleteOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-gray-900">
      <h2 className="text-2xl font-bold dark:text-white">
        Delete Job
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Are you sure you want to delete this job? This action cannot be undone.
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() => setIsDeleteOpen(false)}
          className="rounded-lg border px-5 py-2 dark:text-white"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
        >
          Confirm Delete
        </button>
      </div>
    </div>
  </div>
)}



      </section>

      <Footer />
    </>
  );
}