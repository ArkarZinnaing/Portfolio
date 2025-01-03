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
      imgSrc: '/project-2.jpg',
      title: 'Interior Design Studio',
      tags: ['PHP', 'CSS', 'JavaScript','SCSS','Web-design'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/project-3.jpg',
      title: 'Car Booking App',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'PHPMailer'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/project-4.jpg',
      title: 'Food Order Website',
      tags: ['JavaScript','PHP','Web-design', 'CSS'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/project-5.jpg',
      title: 'Travel Website',
      tags: ['PHP', 'JavaScript', 'CSS', 'SCSS', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/project-6.jpg',
      title: 'Admin Dashboard',
      tags: ['PHP', 'CSS', 'SCSS', 'JavaScript', 'CRUD', 'Reports'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/project-6.jpg',
      title: 'Diseases Prediction System',
      tags: ['Python', 'Cython', 'JavaScript', 'CSS', 'Native Bayes Algorithm'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
      imgSrc: '/project-6.jpg',
      title: 'Developer Portfolio Site',
      tags: ['TypeScript', 'Next.js', 'JavaScript', 'Tailwind CSS', 'React'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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