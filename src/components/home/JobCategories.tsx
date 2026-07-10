import {
  Code2,
  Palette,
  BarChart3,
  Megaphone,
  BriefcaseBusiness,
  Headphones,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Technology",
    jobs: "1200+ Jobs",
    description:
      "Frontend, Backend, Full Stack and Software Development roles.",
  },
  {
    icon: Palette,
    title: "Design",
    jobs: "450+ Jobs",
    description:
      "UI/UX Designer, Graphic Designer and Creative roles.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    jobs: "700+ Jobs",
    description:
      "Digital Marketing, SEO and Business Growth opportunities.",
  },
  {
    icon: Megaphone,
    title: "Sales",
    jobs: "600+ Jobs",
    description:
      "Sales executive and customer relationship positions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    jobs: "500+ Jobs",
    description:
      "Management, HR and Business development careers.",
  },
  {
    icon: Headphones,
    title: "Support",
    jobs: "350+ Jobs",
    description:
      "Customer support and service based opportunities.",
  },
];

export default function JobCategories() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold text-blue-600">
            Explore Categories
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Find Jobs By Category
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Discover opportunities across different industries and
            build your professional career.
          </p>

        </div>



        {/* Category Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950">

                    <Icon size={26} />

                  </div>


                  <span className="text-sm font-medium text-blue-600">
                    {category.jobs}
                  </span>

                </div>



                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>


                <button className="mt-5 text-sm font-semibold text-blue-600 hover:underline">
                  View Jobs →
                </button>


              </div>
            );

          })}

        </div>


      </div>

    </section>
  );
}