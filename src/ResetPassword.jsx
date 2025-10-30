import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "2rem" }}>
              <h1>Debt Free Disciple</h1>
            </div>
          }
        />
        <Route
          path="/reset-password"
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
                <h1>Redirecting to app...</h1>
                <p>
                  Please open the Debt Free Disciple app to reset your password.
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
