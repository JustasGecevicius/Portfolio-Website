import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../Components/AnimatedRoutes";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "../Pages/SCSS/footer.css";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
