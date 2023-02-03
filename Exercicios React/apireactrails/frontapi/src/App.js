import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import NewItemList from "./pages/NewItemList";
function App() {
  return (
    <Router>
          <Routes>
              <Route exact path="/" element={<ItemList />} />
              <Route path="/newItemList" element={<NewItemList />} />
          </Routes>
      </Router>
  );
}

export default App;
