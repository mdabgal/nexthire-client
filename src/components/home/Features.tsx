import {
  Search,
  Building2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy Job Search",
    description:
      "Find thousands of job opportunities with powerful search and smart filters.",
  },
  {
    icon: Building2,
    title: "Verified Companies",
    description:
      "Connect with trusted companies and explore genuine career opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Your account and personal information are protected with secure technology.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Build your career with better opportunities and professional guidance.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Everything You Need To Find Your Dream Job
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We provide all the tools and resources to help job seekers
            connect with the right opportunities.
          </p>

        </div>



        {/* Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-2xl border bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950">

                  <Icon size={26} />

                </div>


                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>


              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}