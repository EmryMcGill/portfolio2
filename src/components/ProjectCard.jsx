import styles from '../styles/ProjectCard.module.css';

import { FaGithub } from "react-icons/fa";


const ProjectCard = () => {
    return (
        <div className={styles.card}>
            <button className={styles.btn_title}>
                <img className={styles.logo} src="" alt="" />
                <h3>Expresso Notes</h3>
            </button>
            
            <p>Progressive web app for note-taking with 
                offline functionality and seamless 
                synchronization across devices. </p>

            <div className={styles.tag_container}>
                <a className='btn_icon'><FaGithub /></a>
                <p className='tag'>React</p>
                <p className='tag'>Pocketbase</p>
                <p className='tag'>Docker</p>
            </div>
        </div>
    );
}

export default ProjectCard;