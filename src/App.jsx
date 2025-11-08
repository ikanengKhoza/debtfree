import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";

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
        <Route
          path="/Privacy"
          element={
            <div style={{ padding: "2rem" }}>
              <Privacy />
            </div>
          }
        />
        <Route
          path="/TermsOfUse"
          element={
            <div style={{ padding: "2rem" }}>
              <TermsOfUse />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
