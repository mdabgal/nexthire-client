import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow-2xl">
          <div className="px-8 py-16 text-center md:px-16">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
              🚀 NextHire Community
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              Ready to Hire or Get Hired?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Whether you're searching for your dream job or looking for the
              perfect candidate, NextHire makes hiring simple, fast, and
              reliable.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <BadgeCheck className="mx-auto h-10 w-10 text-white" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  Verified Jobs
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Trusted companies with genuine opportunities.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Users className="mx-auto h-10 w-10 text-white" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  Easy Applications
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Apply to your favorite jobs in just a few clicks.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Building2 className="mx-auto h-10 w-10 text-white" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  Top Companies
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Connect with growing startups and leading businesses.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <BriefcaseBusiness className="mx-auto h-10 w-10 text-white" />

                <h3 className="mt-4 text-lg font-semibold text-white">
                  Secure Hiring
                </h3>

                <p className="mt-2 text-sm text-blue-100">
                  Safe and transparent recruitment experience.
                </p>
              </div>
            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="mt-2 text-blue-100">Active Jobs</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">3K+</h3>
                <p className="mt-2 text-blue-100">Companies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">20K+</h3>
                <p className="mt-2 text-blue-100">Candidates</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">95%</h3>
                <p className="mt-2 text-blue-100">Hiring Success</p>
              </div>
            </div>

            {/* Buttons */}

            
          </div>
        </div>
      </div>
    </section>
  );
}