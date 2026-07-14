import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
  image: string;
};

export default async function JobDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const res = await fetch(
     `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const job: Job = await res.json();

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">

          <Link
            href="/jobs"
            className="mb-8 inline-flex rounded-lg border px-4 py-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            ← Back to Jobs
          </Link>

          <div  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:shadow-none">

            <img
              src={job.image}
              alt={job.title}
              className="h-96 w-full object-cover"
            />

            <div className="p-8">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                {job.jobType}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                {job.title}
              </h1>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl border p-4 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Company
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {job.company}
                  </p>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {job.location}
                  </p>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Job Type
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {job.jobType}
                  </p>
                </div>

                <div className="rounded-xl border p-4 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Salary
                  </h3>

                  <p className="mt-2 text-xl font-bold text-blue-600">
                    {job.salary}
                  </p>
                </div>

              </div>

              <div className="mt-10">

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Job Description
                </h2>

                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>

              </div>

              <div className="mt-10">

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Requirements
                </h2>

                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                  {job.requirements}
                </p>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">
<Link
  href={`/jobs/apply/${job._id}`}
  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white"
>
  Apply Now
</Link>
                <Link
                  href="/jobs"
                  className="rounded-xl border px-8 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                >
                  Browse More Jobs
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}