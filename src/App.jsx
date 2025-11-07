import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              <Home />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
