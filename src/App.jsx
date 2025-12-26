import "./index.css";
import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return (
    <main>
      {/* grad image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="../public/gradient.png"
        alt="bg background"
      />

      {/* blurrr fx */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />

      <Hero />
    </main>
  );
}

export default App;
