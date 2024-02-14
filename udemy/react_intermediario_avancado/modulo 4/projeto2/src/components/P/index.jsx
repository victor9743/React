import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export const P = () => {
  const TheContext = useContext(GlobalContext);
  const {
    ContextState: {body},
    setState
  } = TheContext;

  return <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))} >
    {body}
  </p>;
}