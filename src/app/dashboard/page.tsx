"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Job = {
  _id: string;
};

type User = {
  _id: string;
};

type Application = {
  _id: string;
};

export default function DashboardPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsRes, usersRes, applicationsRes] =
          await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/jobs`),
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`),
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/applications`),
          ]);

        const jobsData = await jobsRes.json();
        const usersData = await usersRes.json();
        const applicationsData = await applicationsRes.json();

        setJobs(jobsData);
        setUsers(usersData);
        setApplications(applicationsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    {
      name: "Jobs",
      total: jobs.length,
    },
    {
      name: "Users",
      total: users.length,
    },
    {
      name: "Applications",
      total: applications.length,
    },
  ];

  return (
    <>
      <Navbar />
    <section className="min-h-screen bg-gray-100 p-6 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-4xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>

        {/* Cards */}

        <div className="mb-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Total Jobs
            </h2>

            <p className="mt-4 text-5xl font-bold text-blue-600">
              {jobs.length}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Total Users
            </h2>

            <p className="mt-4 text-5xl font-bold text-green-600">
              {users.length}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              Total Applications
            </h2>

            <p className="mt-4 text-5xl font-bold text-purple-600">
              {applications.length}
            </p>
          </div>

        </div>

        {/* Chart */}

        <div className="rounded-2xl border bg-white p-6 shadow dark:border-slate-700 dark:bg-slate-800">

          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h2>

          <div className="h-[400px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={chartData}>

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#2563eb"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </section>
    <Footer/>

    </>
  );
}