import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../Components/AnimatedRoutes";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "../Pages/SCSS/footer.css";
import {initializeApp} from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";

function App() {

  const config = getFirebaseConfig();
  initializeApp(config);


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
