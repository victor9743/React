export default function RenderizacaoCondicional () {

    const verif_teste = true;

    return (
        <>
            { verif_teste && 
                <div>
                    Mostrando valor se for verdadeiro
                </div>
            }
        </>
    );
}