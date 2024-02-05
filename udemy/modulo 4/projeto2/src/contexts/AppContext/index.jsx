import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

export const AppContext = (props) => {
    const [ContextState, setState] = useState(globalState);

    return (
        <GlobalContext.Provider value={{ ContextState, setState }}>
            {props.children}
        </GlobalContext.Provider>
    )
}