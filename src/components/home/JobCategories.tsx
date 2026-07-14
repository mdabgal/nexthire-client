"use client";

import Link from "next/link";
import {
  Code2,
  Palette,
  Server,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Layers3,
  DatabaseZap,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, Vue and Angular development jobs.",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, Express, Django and Laravel opportunities.",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    description: "Build complete web applications from frontend to backend.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX, Graphic Design and Creative positions.",
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Docker, Kubernetes, AWS and DevOps engineering jobs.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Android, iOS, Flutter and React Native careers.",
  },
  {
    icon: DatabaseZap,
    title: "Data",
    description: "Data Analyst, Data Scientist and Data Engineer roles.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Cloud Engineer, Azure and Google Cloud careers.",
  },
  {
    icon: Brain,
    title: "AI",
    description: "Artificial Intelligence and Machine Learning jobs.",
  },
];

export default function JobCategories() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Explore Categories
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Browse Jobs By Category
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Discover exciting opportunities across different technologies and
            find the perfect role for your career.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>

                <Link
                  href={`/jobs?category=${encodeURIComponent(category.title)}`}
                  className="mt-6 inline-flex items-center font-semibold text-blue-600 transition hover:gap-3 gap-2"
                >
                  View Jobs
                  <span>→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}