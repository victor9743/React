import LinkButton from "../components/LinkButton"
import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"
import { useState } from "react"
import axios from "axios"
function NewItem() {

    const [item, setItem] = useState([])

    function submit(e) {
        e.preventDefault()
       
        let itens = new TextEncoder("utf-8").encode(JSON.stringify(item))
        axios.post('http://localhost:80/servidores/server1.php', itens).then(function (response) {
            console.log('Success: ', response.data);
        
        }).catch(function (error) {
            console.log('Error: ', error);
        });        
        
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