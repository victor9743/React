import { Outlet, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
    // pegando parametros de um link
    const params = useParams();
    const { id } = params;

    // pegando parametros de busca
    const [qs, setQs] = useSearchParams();
    return (
        <div>
            <h1>Post {id}</h1>

            <h1>Search param: {qs}</h1>

            {/* pegar o parametro espesifico da url */}
            <h1>Search param: {qs.get('page')}</h1>

            {/* modifica trechos da pagina */}
            <Outlet />
        </div>
    )
}