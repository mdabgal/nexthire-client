"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import SearchBar from "@/components/jobs/SearchBar";
import FilterBar from "@/components/jobs/FilterBar";
import JobList from "@/components/jobs/JobList";


export type Job = {
 _id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  jobType: string;
  salary: string;
  description: string;
  requirements: string;
  image: string;
  createdAt?: string;
};


export default function JobsPage() {


  const [jobs, setJobs] = useState<Job[]>([]);


  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [jobType, setJobType] = useState("All");

  const [sort, setSort] = useState("latest");


  const [currentPage, setCurrentPage] = useState(1);



  // Get Jobs From Backend

  useEffect(()=>{


    fetch("http://localhost:5000/jobs")

    .then(res=>res.json())

    .then(data=>{

      setJobs(data);

    })

    .catch(error=>{

      console.log(error);

    });



  },[]);




  return (
    <>

      <Navbar />


      <section className="bg-white py-16 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl px-6">


          <div className="mb-10 text-center">


            <h1 className="
            text-4xl
            font-bold
            text-gray-900
            dark:text-white
            ">
              Explore Jobs
            </h1>


            <p className="
            mt-3
            text-gray-600
            dark:text-gray-400
            ">
              Search your dream job and find the perfect opportunity.
            </p>


          </div>





          <SearchBar

            search={search}

            setSearch={(value)=>{

              setSearch(value);

              setCurrentPage(1);

            }}

          />






          <FilterBar

            category={category}

            setCategory={(value)=>{

              setCategory(value);

              setCurrentPage(1);

            }}


            jobType={jobType}

            setJobType={(value)=>{

              setJobType(value);

              setCurrentPage(1);

            }}


            sort={sort}

            setSort={(value)=>{

              setSort(value);

              setCurrentPage(1);

            }}

          />







          <JobList

            jobs={jobs}

            search={search}

            category={category}

            jobType={jobType}

            sort={sort}

            currentPage={currentPage}

            setCurrentPage={setCurrentPage}

          />




        </div>


      </section>



      <Footer />


    </>
  );
}