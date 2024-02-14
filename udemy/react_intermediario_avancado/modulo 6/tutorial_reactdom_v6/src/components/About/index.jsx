import { useLocation } from "react-router"

export const About = () => {
    // capturando estados vindos de um redirect
    const {state} = useLocation();

    return (
        <>
            <h1>Rota About</h1>

            <p>State: {state}</p>
        </>
    )
}