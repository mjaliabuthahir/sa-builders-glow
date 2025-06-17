
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Quote />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
