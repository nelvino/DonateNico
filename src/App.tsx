import "./App.css";
import LoginPage from "./pages/auth/login/index";
import RegisterPage from "./pages/auth/register/index";
import HomePage from "./pages/private/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeProvider from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
