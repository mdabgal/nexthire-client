"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";


type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};


export default function ContactMessagesPage() {

  const [messages, setMessages] = useState<ContactMessage[]>([]);


  useEffect(() => {

    const fetchMessages = async () => {

      const res = await fetch(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/contacts`
      );

      const data = await res.json();

      setMessages(data);

    };


    fetchMessages();

  }, []);



  return (


    <>
    <Navbar/>

    <div className="min-h-screen bg-gray-50 py-16 dark:bg-gray-950">

      <div className="mx-auto max-w-5xl px-6">


        <h1 className="mb-10 text-4xl font-bold dark:text-white">
          Contact Messages
        </h1>



        <div className="space-y-6">


          {
            messages.map((message)=>(


              <div
                key={message._id}
                className="rounded-2xl bg-white p-6 shadow dark:bg-gray-900"
              >


                <div className="flex justify-between">

                  <h2 className="text-xl font-semibold dark:text-white">
                    {message.name}
                  </h2>


                  <span className="text-sm text-gray-500">
                    {
                      new Date(
                        message.createdAt
                      ).toLocaleString()
                    }
                  </span>


                </div>



                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Email: {message.email}
                </p>



                <p className="mt-2 font-medium dark:text-white">
                  Subject: {message.subject}
                </p>



                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {message.message}
                </p>



              </div>


            ))
          }


        </div>


      </div>

    </div>
    <Footer/>
</>
  );
}