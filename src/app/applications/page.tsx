"use client";

import { useEffect, useState } from "react";

type Application = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  resume: string;
  coverLetter: string;
  status: string;
  appliedAt: string;
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/applications`
        );

        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Job Applications
        </h1>

        <div className="overflow-x-auto rounded-xl bg-white shadow dark:bg-slate-800">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Applicant</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Job</th>
                <th className="px-4 py-3 text-left">Company</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Resume</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Applied</th>
              </tr>
            </thead>

            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="py-10 text-center text-gray-500 dark:text-gray-300"
                  >
                    No applications found.
                  </td>
                </tr>
              ) : (
                applications.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b dark:border-slate-700"
                  >
                    <td className="px-4 py-4">{item.name}</td>

                    <td className="px-4 py-4">{item.email}</td>

                    <td className="px-4 py-4">{item.jobTitle}</td>

                    <td className="px-4 py-4">{item.company}</td>

                    <td className="px-4 py-4">{item.phone}</td>

                    <td className="px-4 py-4">
                      <a
                        href={item.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Resume
                      </a>
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                        {item.status || "Pending"}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      {new Date(item.appliedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}