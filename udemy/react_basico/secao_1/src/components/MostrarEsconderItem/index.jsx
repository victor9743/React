import { useState } from "react";
export default function MostrarEsconderItem () {

    const [texto, setTexto] = useState("Mostrar Item");
    const [mostrar, setMostrar] = useState(false);

    function alterar_estado () {    
        setMostrar(!mostrar);

        if (!mostrar) { 
            setTexto("Ocultar Item");
        } else {
            setTexto("Mostrar Item");
        }
    }

    return (
        <>
            { mostrar && 
                <div>Item sendo Mostrado</div>
            }

            <button onClick={alterar_estado} >{texto}</button>
        </>
    )

}