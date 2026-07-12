"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type JobData = {
  title: string;
  company: string;
  category: string;
  location: string;
  jobType: string;
  salary: string;
  image: string;
  description: string;
  requirements: string;
};

export default function EditJobPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [jobData, setJobData] = useState<JobData>({
    title: "",
    company: "",
    category: "",
    location: "",
    jobType: "",
    salary: "",
    image: "",
    description: "",
    requirements: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobData({
          title: data.title || "",
          company: data.company || "",
          category: data.category || "",
          location: data.location || "",
          jobType: data.jobType || "",
          salary: data.salary || "",
          image: data.image || "",
          description: data.description || "",
          requirements: data.requirements || "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/jobs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jobData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success("Job Updated Successfully!");

        router.push("/jobs/manage");
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
          <h2 className="text-3xl font-bold dark:text-white">
            Loading...
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
          <h1 className="mb-8 text-3xl font-bold text-indigo-600">
            Edit Job
          </h1>

          <form
            onSubmit={handleUpdate}
            className="space-y-5"
          >
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Job Title"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <select
              name="category"
              value={jobData.category}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Design">Design</option>
              <option value="DevOps">DevOps</option>
              <option value="Mobile">Mobile</option>
              <option value="Data">Data</option>
              <option value="Cloud">Cloud</option>
              <option value="AI">AI</option>
            </select>

            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <select
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Internship">Internship</option>
            </select>

            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="Salary"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <input
              type="text"
              name="image"
              value={jobData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Description"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              rows={5}
              placeholder="Requirements"
              className="w-full rounded-lg border px-4 py-3 dark:bg-gray-800 dark:text-white"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Update Job
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}