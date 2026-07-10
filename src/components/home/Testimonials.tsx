import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Frontend Developer",
    image:
      "https://i.pravatar.cc/150?img=12",
    review:
      "NextHire helped me find the perfect frontend developer role. The platform is easy to use and very effective.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image:
      "https://i.pravatar.cc/150?img=32",
    review:
      "I discovered amazing companies through NextHire. The job searching experience was smooth and professional.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Full Stack Developer",
    image:
      "https://i.pravatar.cc/150?img=15",
    review:
      "The platform connected me with great opportunities and helped me grow my career.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold text-blue-600">
            Success Stories
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Thousands of professionals have found better career
            opportunities with NextHire.
          </p>

        </div>



        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >


              {/* User */}

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />


                <div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>



              {/* Rating */}

              <div className="mt-5 flex gap-1">

                {Array.from({ length: item.rating }).map((_, index) => (

                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>



              {/* Review */}

              <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                "{item.review}"
              </p>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}