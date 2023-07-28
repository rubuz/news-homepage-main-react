import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <div className=" mx-auto p-4 grid grid-cols-[65%_1fr] gap-6 h-full">
        <Hero />
        <News />
      </div>
      <Cards />
    </div>
  );
}

export default App;
