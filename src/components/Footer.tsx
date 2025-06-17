
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SA Builders</h3>
                <p className="text-sm text-gray-300">Since 2017</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building excellence since 2017. Your trusted partner for all construction needs.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Residential Construction</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Commercial Building</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Renovation & Remodeling</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@sabuilders.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Construction Ave<br />Builder City, BC 12345</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday<br />8:00 AM - 6:00 PM</p>
              <p>Saturday<br />9:00 AM - 4:00 PM</p>
              <p>Sunday<br />Emergency Only</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SA Builders. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
