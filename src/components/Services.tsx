
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions built to your exact specifications.",
      icon: "🏠",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Commercial Building",
      description: "Office buildings, retail spaces, and industrial facilities with modern design.",
      icon: "🏢",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation services.",
      icon: "🔨",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely and budget-friendly delivery.",
      icon: "📋",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & Planning",
      description: "Architectural design and detailed planning for your construction project.",
      icon: "📐",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and safety standards on every project.",
      icon: "✅",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your unique needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient} group-hover:h-4 transition-all duration-300`}></div>
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
