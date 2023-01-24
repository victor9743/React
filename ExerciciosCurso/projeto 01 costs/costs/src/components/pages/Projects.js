import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([])

    // captura as mensagens do useNavigation
    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-Type' : 'Application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setProjects(data)
        })
        .catch((err)=> { console.log(err) })

    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novoProjeto" text="Criar projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                <p>Projetos...</p>
                {projects.length > 0 &&
                    projects.map((project, key)=> <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category} key={project.id} /> )}
            </Container>
        </div>
    )
}

export default Projects;