import Link from "next/link";


type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
  image?: string;
  category?: string;
};



type JobCardProps = {
  job: Job;
};



export default function JobCard({ job }: JobCardProps) {

  return (

    <div
     className="
overflow-hidden
rounded-2xl
border
border-gray-200
bg-white
shadow-md
transition
duration-300
hover:-translate-y-1
hover:shadow-xl
dark:border-gray-800
dark:bg-gray-900
dark:shadow-none
"
    >


      <img

        src={
          job.image ||
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902"
        }

        alt={job.title}

        className="
        h-52
        w-full
        object-cover
        "

      />




      <div className="p-6">



        <span
          className="
          rounded-full
          bg-blue-100
          px-3
          py-1
          text-xs
          font-semibold
          text-blue-600
          dark:bg-blue-950
          dark:text-blue-300
          "
        >

          {job.category || "Job"}

        </span>





        <h3
          className="
          mt-4
          text-xl
          font-semibold
          text-gray-900
          dark:text-white
          "
        >

          {job.title}

        </h3>





        <p
          className="
          mt-2
          text-sm
          text-gray-600
          dark:text-gray-400
          "
        >

          {job.company}

        </p>





        <p
          className="
          mt-1
          text-sm
          text-gray-500
          dark:text-gray-400
          "
        >

          📍 {job.location}

        </p>





        <p
          className="
          mt-1
          text-sm
          text-gray-500
          dark:text-gray-400
          "
        >

          💼 {job.jobType}

        </p>





        <p
          className="
          mt-3
          font-semibold
          text-blue-600
          "
        >

          {job.salary}

        </p>





        <p
          className="
          mt-3
          line-clamp-2
          text-sm
          text-gray-600
          dark:text-gray-400
          "
        >

          {job.description}

        </p>





        <Link

          href={`/jobs/${job._id}`}

          className="
          mt-5
          inline-flex
          w-full
          items-center
          justify-center
          rounded-lg
          bg-blue-600
          px-4
          py-2
          font-medium
          text-white
          transition
          hover:bg-blue-700
          "

        >

          View Details

        </Link>




      </div>


    </div>

  );

}