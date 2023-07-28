import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <div className="mx-auto p-4 grid grid-rows-[1fr_min(500px)] gap-6 sm:grid-cols-[65%_1fr] sm:grid-rows-1">
        <Hero />
        <News />
      </div>
      <Cards />
    </div>
  );
}

export default App;
