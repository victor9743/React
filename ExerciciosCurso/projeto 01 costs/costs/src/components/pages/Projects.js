import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    // captura as mensagens do useNavigation
    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state
    }

    useEffect(()=>{
        setTimeout(() => {
            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {
                    'Content-Type' : 'Application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data)=>{
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err)=> { console.log(err) })
        }, 300)

    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novoProjeto" text="Criar projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project, key)=> <ProjectCard 
                    id={project.id} 
                    name={project.name} 
                    budget={project.budget} 
                    category={project.category} 
                    key={project.id} /> )}
            </Container>
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 && (
                <p>Nao ha projetos cadastrados</p>
            )}
        </div>
    )
}

export default Projects;