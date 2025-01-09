import Image from "next/image";
import React from "react";
import { Timeline } from "@/ui/timeline";

export default function Work() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Freelance Web Developer</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            I am currently freelancing on Upwork and working on a food ordering website (Freelance Project) for the Burmese Restaurant called Burmese Bites.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> July 2024 - Persent </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Designing and implementing the website&apos;s frontend using HTML, CSS and Tailwind CSS.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Ensuring responsive design for seamless use across devices.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Collaborating with the restaurant team to gather requirements and provide updates.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Styling the interface with a focus on readability and accessibility using TailwindCSS.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Travel Website</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            I&apos;ve developed a travel website (freelance work) where users can book travel packages and view destinations.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> April 2024 - June 2024 </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Assisted in building responsive user interfaces using HTML, CSS, and JavaScript.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Developed reusable components and ensured UI consistency across various pages.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Used a MySQL database for storage and SQL queries for data extraction with JOINS.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Gained experience with version control tools such as Git and GitHub.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Implemented an admin panel with PHP, MySQL, and JavaScript, enabling the admin to view and analyze visualized reports and perform CRUD operations for products.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/travel-1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/travel-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/travel-3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/travel-4.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <h4 className="headline-2 mb-5">University of Central Lancashire UK</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            Bachelor of Science (B.Sc), First Class Honours, Business Computing and Information Systems 
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>GPA:</strong> 3.7/4.0 </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-8"><strong>Duration:</strong> September 2019 - March 2024 </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/uclan4.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/uclan.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/uclan2.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/uclan3.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
