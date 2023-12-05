import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
