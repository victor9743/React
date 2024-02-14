import { Campo } from "../Campo";

export const Campo_dados = ({cep}) => {

    return (
        <div className="container">
            <div className="row">
                <Campo label={"cep"} valor={cep.cep} placeholder={"00000-000"} />
                <Campo label={"Endereço"} valor={cep.logradouro} placeholder={"logradouro"} />
                <Campo label={"Bairro"} valor={cep.bairro} placeholder={"bairro"} />
                <Campo label={"Cidade"} valor={cep.localidade} placeholder={"cidade"} />
                <Campo label={"Estado"} valor={cep.uf} placeholder={"uf"}/>
            </div>
        </div>
    )

}