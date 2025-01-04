import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/job-portal.png',
      title: 'Job Portal App',
      tags: ['PHP', 'CSS', 'JavaScript','SCSS'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Job-Portal.git'
    },
    {
      imgSrc: '/interior.png',
      title: 'Interior Design Studio',
      tags: ['PHP', 'CSS', 'JavaScript','SCSS','Web-design'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Interior-Design-Studio'
    },
    {
      imgSrc: '/threeb.png',
      title: 'Car Booking App',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'PHPMailer'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Car-Booking-System'
    },
    {
      imgSrc: '/foodorder.png',
      title: 'Food Order Website',
      tags: ['JavaScript','PHP','Web-design', 'CSS'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Food-Order'
    },
    {
      imgSrc: '/travel.png',
      title: 'Travel Website',
      tags: ['PHP', 'JavaScript', 'CSS', 'SCSS', 'Development'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/travel-project'
    },
    {
      imgSrc: '/admin1.png',
      title: 'Admin Dashboard',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'CRUD', 'Reports'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/travel-project'
    },
    {
      imgSrc: '/disease.png',
      title: 'Diseases Prediction System',
      tags: ['Python', 'Cython', 'JavaScript', 'CSS', 'Native Bayes Algorithm'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Diseases-Prediction-System'
    },
    {
      imgSrc: '/portfolio.png',
      title: 'Developer Portfolio Site',
      tags: ['TypeScript', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Portfolio'
    },
    {
      imgSrc: '/admin2.png',
      title: 'Admin Control Panel',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'CRUD', 'Reports'],
      projectLink: 'https://github.com/Saw-Pyae-Sone/Car-Booking-System'
    },
  ];

const Project = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Client render:', works);
  }
  return (
    <section id="project" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {works.map(({imgSrc, title, tags, projectLink}) => (
                    <ProjectCard 
                        key={title}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes='reveal-up'
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project