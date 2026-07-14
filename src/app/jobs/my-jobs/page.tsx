"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

type Job = {
  _id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  salary: string;
};

export default function MyJobsPage() {
  const { data: session } = authClient.useSession();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/employer/${session.user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [session]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Job deleted successfully!");

        setJobs((prev) =>
          prev.filter((job) => job._id !== deleteId)
        );

        setDeleteId(null);
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="mb-8 text-4xl font-bold dark:text-white">
            My Jobs
          </h1>

          <div className="overflow-x-auto rounded-xl border bg-white shadow dark:bg-slate-900">

            <table className="w-full">

              <thead className="bg-gray-100 dark:bg-slate-800">

                <tr>

                  <th className="px-5 py-4 text-left">
                    Title
                  </th>

                  <th className="px-5 py-4 text-left">
                    Company
                  </th>

                  <th className="px-5 py-4 text-left">
                    Category
                  </th>

                  <th className="px-5 py-4 text-left">
                    Location
                  </th>

                  <th className="px-5 py-4 text-left">
                    Salary
                  </th>

                  <th className="px-5 py-4 text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {loading ? (

                  <tr>

                    <td
                      colSpan={6}
                      className="py-10 text-center"
                    >
                      Loading...
                    </td>

                  </tr>

                ) : jobs.length > 0 ? (

                  jobs.map((job) => (

                    <tr
                      key={job._id}
                      className="border-t"
                    >

                      <td className="px-5 py-4">
                        {job.title}
                      </td>

                      <td className="px-5 py-4">
                        {job.company}
                      </td>

                      <td className="px-5 py-4">
                        {job.category}
                      </td>

                      <td className="px-5 py-4">
                        {job.location}
                      </td>

                      <td className="px-5 py-4">
                        {job.salary}
                      </td>

                      <td className="space-x-2 px-5 py-4 text-center">

                        <Link
                          href={`/jobs/edit/${job._id}`}
                          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => setDeleteId(job._id)}
                          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan={6}
                      className="py-12 text-center"
                    >
                      No jobs found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* Delete Modal */}

      {deleteId && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="w-[90%] max-w-md rounded-xl bg-white p-6 dark:bg-slate-800">

            <h2 className="text-2xl font-bold dark:text-white">
              Delete Job?
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Are you sure you want to delete this job?
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => setDeleteId(null)}
                className="rounded bg-gray-300 px-5 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="rounded bg-red-600 px-5 py-2 text-white hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

      <Footer />
    </>
  );
}