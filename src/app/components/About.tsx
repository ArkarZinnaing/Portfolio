import React from 'react'
import Image from 'next/image';

const aboutItems = [
    {
      label: 'Project done',
      number: 11
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

const About = () => {
  return (
    <section id="about" className='section'>
        <div className="container">
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 mt-10 reveal-up'>
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Saw Pyae Sone, a full-stack web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>

                <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm mb-5">
                    📌 I&apos;m freelancing on Upwork
                </div>
                <div className="flex gap-2 items-center text-zinc-300 dark:text-neutral-300 text-xs md:text-sm mb-5">
                    📌 I&apos;m good at problem-solving
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key)=>(
                            <div key={key}>
                                <div className='flex items-center md:mb-2'>
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className="text-sm text-zinc-400">
                                    {label}
                                </p>
                            </div>
                        ))
                    }

                    <Image src="/logo-removed.png" alt="logo" className='ml-auto md:w-[40px] md:h-[40px]' width={30} height={30} loading='lazy'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About