import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MainMenu from "./components/MainMenu";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MainMenu />
        <MainPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
