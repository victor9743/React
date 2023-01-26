import styles from './Project.module.css'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
// pegando parametros
import { useParams } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'

function Project() {
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setshowProjectForm] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(resp => resp.json())
            .then((data) =>{
                setProject(data)
            })
            .catch(err => console.log(err))
        },300)
    }, [id])

    function toggleProjectForm() {
        setshowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        <div>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto': 'Fechar'}
                            </button>

                            {!showProjectForm ? (
                                <div>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ): (
                                <div>
                                    <p>detalhes do projeto</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ):(
                <Loading />
            )}
        
        </>
    )
}

export default Project