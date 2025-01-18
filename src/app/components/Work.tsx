import Image from "next/image";
import React from "react";
import { Timeline } from "@/ui/timeline";

export default function Work() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Freelance Full-Stack Web Developer</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            I&apos;m currently freelancing on Upwork and available for work.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> December 2024 - Present </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              💼 Contact Me for Web Development, Web Applications and Web Design
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              👨🏻‍💻 Relearning C# and .Net
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/code1.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/code2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/code3.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/code4.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Food Ordering Website</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            I developed a food ordering website (Freelance Project) for a Burmese restaurant called Burmese Bites, enabling users to browse the menu and place delivery orders.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> October 2024 - November 2024 </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Designed and implemented a responsive and visually appealing frontend using HTML, CSS, and Tailwind CSS, ensuring a seamless user experience across all devices.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Applied best practices in accessibility and readability to deliver an intuitive interface.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Collaborated closely with the restaurant team to gather requirements, provide progress updates, and align the website with their business goals.
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
      title: "2024",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Travel Website</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
            I&apos;ve developed a travel website (freelance work) where users can book travel packages and view destinations.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> April 2024 - June 2024 </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Engineered dynamic, responsive user interfaces using HTML, CSS, and JavaScript, ensuring optimal performance across various devices.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Leveraged MySQL to create robust database solutions and implemented efficient data retrieval using complex SQL queries with JOINS.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Designed and implemented an admin panel using PHP, MySQL, and JavaScript, enabling CRUD operations and empowering the admin to analyze visualized reports effectively.
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
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              🎓 Advanced Database Management Systems
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              🎓 Corporate Communication Systems Management
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
             🎓 eBusiness
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
             🎓 Managing Information Systems Projects
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
             🎓 Information Systems Project
            </div>
          </div>
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
    {
      title: "2023",
      content: (
        <div>
          <h4 className="headline-2 mb-5">Interior Design Studio Website</h4>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-base font-normal mb-5">
              I&apos;ve developed a interior design studio website (freelance work) where users can purchase the furnitures to decorate their room or living room as they wanted.
          </p>
          <p className="text-zinc-50 dark:text-neutral-200 text-sm md:text-sm font-normal mb-5"><strong>Duration:</strong> August 2023 - September 2023 </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Developed a scalable e-commerce platform using HTML, CSS, JavaScript, and PHP.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Designed a custom admin panel, reducing manual administrative workload by 30% and streamlining website management.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Optimised database performance by effectively using JOINS and UNIONS in MySQL, achieving a 15% improvement in query execution speed.
            </div>
            <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm">
              📌 Utilized Git for version control to track changes and maintain code quality throughout the development lifecycle.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/design1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/design2.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/design3.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/design4.png"
              alt="startup template"
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
