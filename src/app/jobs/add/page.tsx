"use client";

import { useState } from "react";

type JobData = {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
   image: string;
};

export default function AddJobPage() {
  const [jobData, setJobData] = useState<JobData>({
    title: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    description: "",
    requirements: "",
      image: "",
  });


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
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();


  try {

    const response = await fetch(
      "http://localhost:5000/jobs",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

       body: JSON.stringify({
  ...jobData,
  createdAt: new Date(),
}),
      }
    );


    const data = await response.json();


    if (data.success) {

      alert("Job Added Successfully!");


      setJobData({
        title: "",
        company: "",
        location: "",
        jobType: "",
        salary: "",
        description: "",
        requirements: "",
            image: "",
      });


    } else {

      alert("Something went wrong!");

    }


  } catch (error) {

    console.log(error);

    alert("Server Error");

  }

};


  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">

      <div className="
        max-w-3xl 
        mx-auto 
        bg-white 
        dark:bg-gray-800 
        rounded-2xl 
        shadow-lg 
        p-8
      ">


        <h1 className="
          text-3xl 
          font-bold 
          text-indigo-600 
          dark:text-indigo-400 
          mb-2
        ">
          Add New Job
        </h1>


        <p className="
          text-gray-500 
          dark:text-gray-300 
          mb-8
        ">
          Create a new job post and find the right candidate.
        </p>



        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Job Title */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Job Title
            </label>


            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />

          </div>



          {/* Company */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Company Name
            </label>


            <input
              type="text"
              name="company"
              value={jobData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />

          </div>



          {/* Location */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Location
            </label>


            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Dhaka, Bangladesh"
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />

          </div>




          {/* Job Type */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Job Type
            </label>


            <select
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
              "
              required
            >

              <option value="">
                Select Job Type
              </option>

              <option value="Full Time">
                Full Time
              </option>

              <option value="Part Time">
                Part Time
              </option>

              <option value="Remote">
                Remote
              </option>

              <option value="Internship">
                Internship
              </option>


            </select>

          </div>





          {/* Salary */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Salary
            </label>


            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="$500 - $1000"
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
              "
            />

          </div>





          {/* Description */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Job Description
            </label>


            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Write job details..."
              rows={5}
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
              "
              required
            />

          </div>


          <div>

<label
className="
font-medium
text-gray-800
dark:text-gray-200
"
>
Job Image URL
</label>


<input

type="text"

name="image"

value={jobData.image}

onChange={handleChange}

placeholder="https://example.com/job-image.jpg"

className="
w-full
mt-2
border
rounded-lg
px-4
py-3
bg-white
dark:bg-gray-700
text-gray-900
dark:text-white
border-gray-300
dark:border-gray-600
"

/>

</div>





          {/* Requirements */}

          <div>

            <label className="
              font-medium 
              text-gray-800 
              dark:text-gray-200
            ">
              Requirements
            </label>


            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleChange}
              placeholder="React, Next.js, TypeScript..."
              rows={4}
              className="
                w-full
                mt-2
                border
                rounded-lg
                px-4
                py-3
                bg-white
                dark:bg-gray-700
                text-gray-900
                dark:text-white
                border-gray-300
                dark:border-gray-600
              "
            />


          </div>





          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            Add Job
          </button>



        </form>


      </div>


    </section>
  );
}