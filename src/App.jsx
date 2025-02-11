import { useEffect, useState } from 'react';
import styles from './styles/App.module.css';
import "@fontsource/rubik";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/500.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjectCard from './components/ProjectCard';
import Pocketbase from 'pocketbase';

function App() {

  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);


  const getData = async () => {
    const pb = new Pocketbase(import.meta.env.VITE_PB_URI);

    setUser(await pb.collection('users').getOne('385ef0x1vme4160'));
    setProjects(await pb.collection('projects').getFullList());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.left_container}>
        <img className={styles.img_profile} src={`${import.meta.env.VITE_PB_URI}/api/files/users/${user.id}/${user.avatar}`} />
        <h1>{user.name}</h1>
          <p style={{ fontStyle: 'italic' }}>B.S. in Computer Science, 2021 - present</p>        <div className={styles.links_container}>
          <a href={user.github} className='btn_icon' target="_blank"><FaGithub /></a>
          <a href={user.linkedin} className='btn_icon' target="_blank"><FaLinkedin /></a>
          <a href={`mailto:${user.email}`} className='btn_icon' target="_blank"><MdEmail /></a>
        </div>
        <p>{user.desc}</p>
      </div>

      <div className={styles.right_container}>
        <h2>Projects</h2>
        <div className={styles.projects_container}>
          {projects.map((proj, index) => 
            <ProjectCard
            key={index}
            title={proj.title}
            desc={proj.desc}
            logo={proj.logo ? `${import.meta.env.VITE_PB_URI}/api/files/projects/${proj.id}/${proj.logo}` : ''}
            tags={proj.tags ? proj.tags : []}
            github={proj.github}
            link={proj.link ? proj.link : ''}
             />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
