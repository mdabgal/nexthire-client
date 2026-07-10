import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">

      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl bg-blue-500 px-6 py-12 text-center md:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
            <Mail size={28} />
          </div>


          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Get Latest Job Updates
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Subscribe to receive new job opportunities, career tips,
            and hiring updates directly in your inbox.
          </p>



          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg px-5 py-3 text-gray-900 outline-none"
            />


            <button
              type="submit"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
            >
              Subscribe
            </button>


          </form>


        </div>

      </div>

    </section>
  );
}