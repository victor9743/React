export default function ButtonAlterarValor ({alterar_tipo, funcao, item, desativar_button, botao_texto }){

    return (
        <button className={`btn 
                            ${alterar_tipo ? "btn-success" : "btn-danger"}
                            col-4
                            `}
                            onClick={() => {
                                funcao(item);
                            }}
                            
                            disabled = {desativar_button}
                            >
                                { botao_texto }
                            </button>
    );
}