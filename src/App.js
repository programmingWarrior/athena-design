import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import What from "./components/What/What";
import StayProject from "./components/StayProject/StayProject";

function App() {
  return (
    <div className="main">
      <Contact />
      <StayProject />
      <What />
      <Footer />
    </div>
  );
}

export default App;
