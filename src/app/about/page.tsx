import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {
  Briefcase,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description:
      "Helping job seekers discover the best opportunities from trusted companies worldwide.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description:
      "Connecting talented professionals with verified employers in one secure platform.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify hiring and make finding the perfect job easier for everyone.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "We prioritize user privacy, secure authentication, and reliable job listings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            About NextHire
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            NextHire is a modern job portal that connects talented
            professionals with leading companies through a fast,
            secure, and user-friendly hiring experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Team"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <span className="font-semibold text-blue-600">
              Our Story
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
              Connecting Talent With Opportunity
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              At NextHire, we believe finding the right job should
              be simple and stress-free. Our platform helps job
              seekers explore exciting career opportunities while
              enabling employers to discover skilled professionals
              efficiently.
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              We focus on building a trusted hiring ecosystem with
              verified companies, secure authentication, and an
              intuitive user experience that benefits both
              candidates and recruiters.
            </p>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="font-semibold text-blue-600">
            Vision & Mission
          </span>

          <h2 className="mt-3 text-4xl font-bold dark:text-white">
            Empowering Careers Through Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our mission is to create a reliable platform where job
            seekers and employers can connect quickly, transparently,
            and securely while making recruitment smarter and more
            accessible.
          </p>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="font-semibold text-blue-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-bold dark:text-white">
              Our Core Values
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Career Journey?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Explore thousands of job opportunities and connect with
            top companies today.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100">
            Explore Jobs
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}