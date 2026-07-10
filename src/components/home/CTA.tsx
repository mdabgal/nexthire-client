import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">

      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-gray-900 px-6 py-14 text-center dark:bg-black md:px-12">


          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready To Start Your Career Journey?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Join thousands of job seekers and discover your next
            opportunity with NextHire.
          </p>



          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">


            <Link
              href="/jobs"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Find Jobs
            </Link>


            <Link
              href="/register"
              className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              Create Account
            </Link>


          </div>


        </div>


      </div>

    </section>
  );
}