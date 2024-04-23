import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sec2 from "./components/Section2/Sec2";
import Sec3 from "./components/Section3/sec3";
import Sec4 from "./components/Section4/Sec4";
import Resources from "./components/ResourcesSec/Resources";
import Review from "./components/ReviewsSec/Review";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Resources />
      <Review />
    </div>
  );
}

export default App;
