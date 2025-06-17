
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Quote Request Submitted:", formData);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: ""
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below and we'll provide you with a detailed quote
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-gray-800">Project Details</CardTitle>
              <CardDescription className="text-gray-600">
                Tell us about your construction project and we'll provide a customized quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Project Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)} required>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Building</SelectItem>
                        <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-blue-500">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700 font-medium">Project Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Please describe your project in detail..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quote;
