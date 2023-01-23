import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import { useEffect, useState } from "react"
function ProjectForm({handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    useEffect(()=>{
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    })

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target]: e.target.value})
        console.log(project)
    }


    function handleChange(e) {
        setProject({ ...project, [e.target]: e.target.value})
        console.log(project)
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input type="text" text="Nome no projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>
            </div>

            <div>
                <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange}/>
            </div>

            <div>
                <Select name="category_id" text="Selecione a categoria" options={categories} />
            </div>

            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm