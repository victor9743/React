import LinkButton from "../components/LinkButton"
import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"
import { useState } from "react"
function NewItem() {

    const [item, setItem] = useState([])

    function submit(e) {
        e.preventDefault()
        console.log(item)
        
        fetch('http://localhost:80/servidores/server1.php', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <form onSubmit={submit}>
                <h3>Cadastrar Item</h3>
                <div className="col-6">
                    <InputForm  text="Item" type="text" name="descricao" metodo={handleChange} value={item.descricao ? item.descricao : ""} />
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}

export default NewItem