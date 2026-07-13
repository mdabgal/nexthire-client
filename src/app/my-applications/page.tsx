"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { authClient } from "@/lib/auth-client";

type Application = {
  _id: string;
  jobTitle: string;
  company: string;
  appliedAt: string;
};

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications`)
  //     .then((res) => res.json())
  //     .then((data) => setApplications(data))
  //     .catch((err) => console.log(err));
  // }, []);


  const { data: session } = authClient.useSession();

useEffect(() => {
  if (!session?.user?.email) return;

  fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/applications/${session.user.email}`
  )
    .then((res) => res.json())
    .then((data) => setApplications(data));
}, [session]);
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              My Applications
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              View all the jobs you have applied for.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-slate-900">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    Job
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    Company
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    Applied Date
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {applications.length > 0 ? (
                  applications.map((application) => (
                    <tr
                      key={application._id}
                      className="border-t border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-slate-800"
                    >
                      <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
                        {application.jobTitle}
                      </td>

                      <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
                        {application.company}
                      </td>

                      <td className="px-6 py-4 text-gray-800 dark:text-gray-200">
                        {new Date(
                          application.appliedAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                          Pending
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-16 text-center text-gray-500 dark:text-gray-400"
                    >
                      You haven't applied for any jobs yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}