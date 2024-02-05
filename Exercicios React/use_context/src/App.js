import { Msg } from './components/msg';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    // adicionamos sempre o provider e o valor que queremos utilizar em outros componentes
    <AppContext>
      <Msg />
    </AppContext>
  );
}

export default App;
