import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    // useNavigate: responsavel pelos redirecionamentos de paginas
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t - 1);
        }, 1000);

        if (time < 0) {
            // quando chegar a 0, executara a funcionalidade de redirecionamento para 
            // o determindado link

            // navigate("/", {
            //     replace: true
            // });

            /* 
                replace: true faz com que o usuario nao volte nesta
                navigate("/", {
                    replace: true
                });
            */

            // enviando estados via redirect
            navigate("/about", {
                state: "hello wolrd"   
            })


        }

        return () => {
            // nao deixar lixo na pagina
            clearTimeout(timeout.current);
        }
    }, [time]);

    return (
        <div>
            <h1>Voce sera redirecionado em: {time}</h1>
        </div>
    )
}