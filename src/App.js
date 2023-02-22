import Header from "./Components/Header";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import AllArticles from "./Components/AllArticles";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <AllArticles />
      <Footer />
    </div>
  );
}

export default App;
