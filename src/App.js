import Header from "./components/Header";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AllArticles from "./components/AllArticles";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <AllArticles />
      <Footer />
      {/* <Header />
      <HeroSection />
      <AllArticles />
      <Footer /> */}
    </div>
  );
}

export default App;
