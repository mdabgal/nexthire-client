import {
  BriefcaseBusiness,
  Users,
  Building2,
  UserCheck,
} from "lucide-react";

const statistics = [
  {
    icon: BriefcaseBusiness,
    number: "10,000+",
    title: "Available Jobs",
    description: "Explore thousands of job opportunities",
  },
  {
    icon: Users,
    number: "50,000+",
    title: "Job Seekers",
    description: "Professionals finding their dream careers",
  },
  {
    icon: Building2,
    number: "2,500+",
    title: "Companies",
    description: "Trusted companies hiring talented people",
  },
  {
    icon: UserCheck,
    number: "15,000+",
    title: "Successful Hires",
    description: "People started their new career journey",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold text-blue-600">
            Our Achievement
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Growing Together With Our Community
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We are helping thousands of job seekers connect with
            companies and build successful careers.
          </p>

        </div>



        {/* Stats Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-gray-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950">

                  <Icon size={28} />

                </div>


                <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                  {item.number}
                </h3>


                <h4 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {item.title}
                </h4>


                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>


              </div>
            );

          })}

        </div>


      </div>

    </section>
  );
}