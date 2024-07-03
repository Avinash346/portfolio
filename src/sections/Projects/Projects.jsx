import styles from './ProjectsStyles.module.css';
import dhun from '../../assets/dhun.png';
import company from '../../assets/company.png';
import HotelPage from '../../assets/HotelPage.png';
import travell from '../../assets/travell.png';
import budjet from '../../assets/budjet.png';
import django from '../../assets/django.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dhun}
          link="https://dhun-avinashs-projects-d9cd0e18.vercel.app/"
          h3="dhun"
          p="Music streaming App"
        />
        <ProjectCard
          src={company}
          link="https://celadon-stroopwafel-3ea309.netlify.app/"
          h3="corporate website"
          p="Website for an agency"
        />
        
        <ProjectCard
          src={travell}
          link="https://avinash346.github.io/AirTravel-webpage/"
          h3="Air travell"
          p="Air travel webpage"
        />
        <ProjectCard
          src={HotelPage}
          link="https://www.linkedin.com/feed/update/urn:li:activity:7211741628917587971/"
          h3="Arklyte"
          p="Travell booking website"
        />
        <ProjectCard
          src={budjet}
          link="https://avinash346.github.io/budget-tracker/"
          h3="Budget tracker"
          p="Expance tracker website"
        />

        <ProjectCard
          src={django}
          link="https://www.linkedin.com/posts/avinash-kumar-745b03239_backenddevelopment-django-djangorestframework-activity-7151606432608473088-obRd?utm_source=share&utm_medium=member_desktop"
          h3="projectX"
          p="A CRM website"
        />
      </div>
    </section>
  );
}

export default Projects;
