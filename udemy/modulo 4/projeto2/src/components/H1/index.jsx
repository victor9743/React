import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export const H1 = () => {
  const TheContext = useContext(GlobalContext);
  const {
    ContextState: {title, counter}
  } = TheContext;

  return (
    <h1>{title} - {counter}</h1>
  );
}