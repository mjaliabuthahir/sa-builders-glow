
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/AdminLogin";

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onAdminClick={() => setShowAdmin(true)} />
      <Hero />
      <Services />
      <Portfolio />
      <Quote />
      <About />
      <Footer />
      {showAdmin && <AdminLogin onClose={() => setShowAdmin(false)} />}
    </div>
  );
};

export default Index;
