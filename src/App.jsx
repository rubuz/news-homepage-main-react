import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <div className="max-w-[1440px] mx-auto p-4 grid grid-cols-[65%_1fr] gap-6">
        <Hero />
        <News />
      </div>
    </div>
  );
}

export default App;
