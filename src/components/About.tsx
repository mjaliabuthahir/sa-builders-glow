
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  About SA Builders
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Since 2017, SA Builders has been at the forefront of construction excellence, 
                  transforming visions into reality with precision, dedication, and unwavering quality.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of experienced professionals brings together decades of expertise 
                  in residential, commercial, and infrastructure construction. We pride ourselves 
                  on delivering projects on time, within budget, and exceeding expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-orange-600 mb-2">7+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Why Choose SA Builders?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sustainable construction practices</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">24/7 project support and communication</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Quality guarantee on all work</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative animate-slide-in-right delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="SA Builders team at work"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Est. 2017</div>
                  <div className="text-sm text-gray-600">Trusted Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
