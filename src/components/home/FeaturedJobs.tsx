import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "$3,500 / month",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "New York",
    salary: "$4,200 / month",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Netflix",
    location: "California",
    salary: "$5,000 / month",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    salary: "$3,800 / month",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-blue-600">
            Featured Jobs
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Find Your Next Career Opportunity
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Discover hand-picked job opportunities from top companies and
            start your career journey today.
          </p>
        </div>

        {/* Job Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="overflow-hidden rounded-2xl border bg-gray-50 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {job.company}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                   {job.location}
                </p>

                <p className="mt-3 font-semibold text-blue-600">
                  {job.salary}
                </p>

                <Link
                  href={`/jobs/${job.id}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}