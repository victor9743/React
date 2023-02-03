import Input from "../components/Input"
import SubmitButton from "../components/SubmitButton"
import { useState } from "react"
function NewItemList() {

    const [item, setItem] = useState([])

    function submit(e) {
        e.preventDefault()
        console.log(item);
    }

    function handleChange(e) {
        setItem({ ...item, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>New Item List</h2>
            <form onSubmit={submit} className="container">
                <Input tipo="text" name="descricao" texto="Descrição do Item" metodo={handleChange} value={item.descricao ? item.descricao : ""} />
                <SubmitButton text="Salvar" />
            </form>
        </div>
    )
}

export default NewItemList