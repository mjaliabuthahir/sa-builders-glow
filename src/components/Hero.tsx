
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building Your
              <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Dreams
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional construction services with 7+ years of experience. 
              From concept to completion, we build with precision and passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToQuote}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">7+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
