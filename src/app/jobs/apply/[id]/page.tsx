"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type Job = {
  _id: string;
  title: string;
  company: string;
};

export default function ApplyJobPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
const { data: session } = authClient.useSession();
  const [job, setJob] = useState<Job | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/jobs/${id}`
        );

        const data = await res.json();
        setJob(data);
      } catch (error) {
        toast.error("Failed to load job");
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

const handleApply = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const token = localStorage.getItem("access-token");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/applications`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          jobId: job?._id,
          jobTitle: job?.title,
          company: job?.company,
          name,
          email,
          phone,
          resume,
          coverLetter,
          applicantEmail: session?.user?.email,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Application Submitted Successfully");

      setName("");
      setEmail("");
      setPhone("");
      setResume("");
      setCoverLetter("");

      router.push("/my-applications");
    } else {
      toast.error(data.message || "Application Failed");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};
  return (
    <section className="min-h-screen bg-gray-100 py-10 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h1 className="mb-2 text-3xl font-bold">
          Apply for Job
        </h1>

        <p className="mb-6 text-gray-500">
          {job?.title} • {job?.company}
        </p>

        <form
          onSubmit={handleApply}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="url"
            placeholder="Resume / CV URL"
            className="w-full rounded-lg border p-3"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
          />

          <textarea
            rows={5}
            placeholder="Cover Letter"
            className="w-full rounded-lg border p-3"
            value={coverLetter}
            onChange={(e) =>
              setCoverLetter(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
}