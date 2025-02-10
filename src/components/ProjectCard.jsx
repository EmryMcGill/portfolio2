import { TiThListOutline } from 'react-icons/ti';
import styles from '../styles/ProjectCard.module.css';

import { FaGithub } from "react-icons/fa";


const ProjectCard = ({ title, desc, logo, tags, github, link }) => {
    return (
        <div className={styles.card}>
            {link ? 
            <a href={link} target="_blank" className={styles.btn_title}>
                <img className={styles.logo} src={logo} />
                <h3 className={styles.title}>{title}</h3>
            </a> 
            : 
            <div href={link} target="_blank" className={styles.btn_title_nolink}>
                <img className={styles.logo} src={logo} />
                <h3 className={styles.title}>{title}</h3>
            </div>
            }

            <div className={styles.content}>
                <p>{desc}</p>

                <div className={styles.tag_container}>
                    {github ? <a target='_blank' href={github} className='btn_icon'><FaGithub /></a> :''}
                    {tags.map((tag, index) => 
                        <p className='tag' key={index}>{tag}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;