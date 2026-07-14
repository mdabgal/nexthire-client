"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      const data = await res.json();


      if (data.success) {

        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      }


    } catch (error) {

      console.log(error);
      alert("Something went wrong!");

    }
  };


  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            We'd love to hear from you. Feel free to reach out anytime.
          </p>

        </div>

      </section>


      {/* Contact */}
      <section className="bg-white py-20 dark:bg-gray-950">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">


          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold dark:text-white">
              Get In Touch
            </h2>


            <p className="mt-5 text-gray-600 dark:text-gray-400">

              Whether you're looking for your next opportunity or
              searching for talented professionals, we're here to help.

            </p>



            <div className="mt-10 space-y-6">


              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950">
                  <Mail />
                </div>

                <div>

                  <h4 className="font-semibold dark:text-white">
                    Email
                  </h4>

                  <p className="text-gray-500">
                   admin@gmail.com
                  </p>

                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950">
                  <Phone />
                </div>

                <div>

                  <h4 className="font-semibold dark:text-white">
                    Phone
                  </h4>

                  <p className="text-gray-500">
                    +880 1754252246
                  </p>

                </div>

              </div>




              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950">
                  <MapPin />
                </div>

                <div>

                  <h4 className="font-semibold dark:text-white">
                    Address
                  </h4>

                  <p className="text-gray-500">
                    Dhaka, Bangladesh
                  </p>

                </div>

              </div>




              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-950">
                  <Clock />
                </div>

                <div>

                  <h4 className="font-semibold dark:text-white">
                    Office Hours
                  </h4>

                  <p className="text-gray-500">
                    Mon - Fri (9:00 AM - 6:00 PM)
                  </p>

                </div>

              </div>


            </div>


          </div>




          {/* Right Form */}


          <div className="rounded-3xl border bg-gray-50 p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">


            <h2 className="mb-6 text-2xl font-bold dark:text-white">
              Send a Message
            </h2>



            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >


              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    name:e.target.value
                  })
                }
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />



              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    email:e.target.value
                  })
                }
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />



              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e)=>
                  setFormData({
                    ...formData,
                    subject:e.target.value
                  })
                }
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />



              <textarea

                rows={5}
                placeholder="Write your message..."

                value={formData.message}

                onChange={(e)=>
                  setFormData({
                    ...formData,
                    message:e.target.value
                  })
                }

                required

                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white"

              />



              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>


            </form>


          </div>


        </div>

      </section>



      {/* Map */}

      <section className="bg-gray-100 py-20 dark:bg-slate-900">

        <div className="mx-auto max-w-7xl px-6">

          <iframe
            src="https://www.google.com/maps?q=Dhaka&output=embed"
            className="h-96 w-full rounded-3xl border"
            loading="lazy"
          ></iframe>


        </div>

      </section>



      <Footer />

    </>
  );
}