import '../../App.css';
import React, { useContext } from "react"
import { global_context } from "../../contexts/AppContext";

export const Msg = () => {
    const contexto = useContext(global_context);
    
    return (
        <div className="App">
            <strong>Mensagem vinda de use context</strong>
            <div>
                {contexto.msg}
            </div>
        </div>
    )
}