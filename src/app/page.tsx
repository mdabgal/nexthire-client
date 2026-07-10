

import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import JobCategories from "@/components/home/JobCategories";
import Newsletter from "@/components/home/Newsletter";
import Statistics from "@/components/home/Statistics";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Features/>
      <JobCategories/>
      <Statistics/>
      <Newsletter></Newsletter>
      <CTA/>
      <Footer></Footer>
     
    </div>
  );
}
