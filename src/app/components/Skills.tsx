import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/next-js.svg',
      label: 'NextJS',
      desc: 'React Framework'
    },
    {
      imgSrc: '/Typescript.svg',
      label: 'TypeScript',
      desc: 'Typed JavaScript'
    },
    {
      imgSrc: '/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: '/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
        imgSrc: '/php.svg',
        label: 'PHP',
        desc: 'Server-Side Scripting'
    },
    {
        imgSrc: '/python.png',
        label: 'Python',
        desc: 'AI/Machine Learning'
    },
    {
        imgSrc: '/mysql.svg',
        label: 'MySQL',
        desc: 'Relational Database'
    },
    {
        imgSrc: '/django.svg',
        label: 'Django',
        desc: 'Web Framework'
    },
    {
      imgSrc: '/c--4.svg',
      label: 'C#',
      desc: 'Object-Oriented Programming Language'
    },
    {
      imgSrc: '/css-3.svg',
      label: 'CSS',
      desc: 'Styling for Web Pages'
    },
    {
      imgSrc: '/wordpress-icon.svg',
      label: 'WordPress',
      desc: 'Content Management System'
    },
    {
      imgSrc: '/laravel-2.svg',
      label: 'Laravel',
      desc: 'PHP Web Framework'
    },
  ];

const Skills = () => {
  return (
    <section className='section'>
        <div className='container mt-5'>
            <h2 className='headline-2 reveal-up'>
                Essentail Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites, Games & applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills