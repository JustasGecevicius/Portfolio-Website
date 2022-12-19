import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../Components/AnimatedRoutes";
import { Header } from "../Components/Header";
import "../Pages/SCSS/footer.css";
import {initializeApp} from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";
import { getFirestore } from "firebase/firestore";

function App() {

  const config = getFirebaseConfig();
  const app = initializeApp(config);
  const db = getFirestore(app);


  return (
    <div className="App">      
      <BrowserRouter>
        <Header />
        <AnimatedRoutes db = {db}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
