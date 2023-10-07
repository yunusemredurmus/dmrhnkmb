import "./App.css";
import { Navbar } from "./complements/Navbar";
import { Main } from "./complements/Main";
import { MidContent } from "./complements/MidContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MidContent />
    </div>
  );
}

export default App;
