import {useNavigate} from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm';

function NewProject() {

    // permite fazer redirects no sistema
    const history = useNavigate()
    
    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then((data) => {
            // redirect
            history("/projetos", {state: 'Projeto criado com sucesso', replace: true})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie se projeto para depois adicionar os serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject;