
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      image: "photo-1487958449943-2429e8be8625",
      description: "Contemporary 3-bedroom home with sustainable materials"
    },
    {
      title: "Office Complex",
      category: "Commercial", 
      image: "photo-1518005020951-eccb494ad742",
      description: "Multi-story commercial building with modern amenities"
    },
    {
      title: "Bridge Construction",
      category: "Infrastructure",
      image: "photo-1433086966358-54859d0ed716",
      description: "Concrete bridge construction over natural waterway"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our finest work and commitment to excellence in construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-sm rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
