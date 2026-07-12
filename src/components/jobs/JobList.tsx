import JobCard from "./JobCard";
import Pagination from "./Pagination";


type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
  createdAt?: string;
};


type JobListProps = {
  jobs: Job[];
  search: string;
  category: string;
  jobType: string;
  sort: string;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};



export default function JobList({
  jobs,
  search,
  category,
  jobType,
  sort,
  currentPage,
  setCurrentPage,
}: JobListProps) {


  let filteredJobs = [...jobs];



  // Search Filter

  if (search) {

    filteredJobs = filteredJobs.filter((job) =>
      job.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }





  // Company Filter

  if (category !== "All") {

    filteredJobs = filteredJobs.filter(
      (job) => job.company === category
    );

  }





  // Job Type Filter

  if (jobType !== "All") {

    filteredJobs = filteredJobs.filter(
      (job) => job.jobType === jobType
    );

  }





  // Latest Sort

  if (sort === "latest") {

    filteredJobs.sort(
      (a, b) =>
        new Date(b.createdAt || "")
          .getTime() -
        new Date(a.createdAt || "")
          .getTime()
    );

  }





  // Salary Sort

  if (sort === "salary") {

    filteredJobs.sort((a, b) => {

      const salaryA =
        Number(a.salary.replace(/\D/g, ""));

      const salaryB =
        Number(b.salary.replace(/\D/g, ""));


      return salaryB - salaryA;

    });

  }





  // Pagination

  const jobsPerPage = 8;


  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );



  const startIndex =
    (currentPage - 1) * jobsPerPage;



  const paginatedJobs =
    filteredJobs.slice(
      startIndex,
      startIndex + jobsPerPage
    );





  return (

    <>

      {
        paginatedJobs.length === 0 ? (

          <div className="
            rounded-2xl
            border
            py-16
            text-center
            dark:border-gray-800
          ">


            <h2 className="
              text-2xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              No Jobs Found
            </h2>


            <p className="
              mt-2
              text-gray-500
              dark:text-gray-400
            ">
              Try changing your search or filters.
            </p>


          </div>


        ) : (


          <>


            <div className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            ">


              {
                paginatedJobs.map((job)=>(


                  <JobCard

                    key={job._id}

                    job={job}

                  />


                ))
              }


            </div>





            <Pagination

              currentPage={currentPage}

              setCurrentPage={setCurrentPage}

              totalPages={totalPages}

            />


          </>


        )
      }


    </>

  );

}