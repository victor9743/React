import React from 'react';
import { dados } from './data';

// useContext: hook em que traz a funcionalidade que retutilizar variáveis em outros componentes
// precisamos sempre inicializar o createContext
// caso esteja utilizando components é necessário realizar a exportação da linha 7 e realizar a importação no componente filho
export const global_context = React.createContext();

export const AppContext = (props) => {
    return (
        <global_context.Provider value={dados}>
            {props.children}
        </global_context.Provider>
    );
}