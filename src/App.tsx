import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { Instructors } from "./components/Instructors";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-yellow-500/30">
      <Header />
      <Hero />
      <Courses />
      <Instructors />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;
