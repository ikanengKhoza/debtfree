import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              <h1>Debt Free Disciple</h1>
              <p>Welcome to Debt Free Disciple</p>
            </div>
          }
        />
        <Route
          path="/ResetPassword"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#328F3C",
                color: "white",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <div>
                <ResetPassword />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
