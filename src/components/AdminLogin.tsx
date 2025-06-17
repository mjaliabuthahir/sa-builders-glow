
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginProps {
  onClose: () => void;
}

const AdminLogin = ({ onClose }: AdminLoginProps) => {
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication check (in real app, this would be server-side)
    if (credentials.username === "admin" && credentials.password === "sabuilders2017") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the SA Builders admin panel.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please select an image file to upload.",
        variant: "destructive",
      });
      return;
    }

    // Simulate file upload (in real app, this would upload to Supabase)
    console.log("Uploading file:", selectedFile.name);
    
    toast({
      title: "Image Uploaded Successfully",
      description: `${selectedFile.name} has been added to the portfolio.`,
    });
    
    setSelectedFile(null);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Admin Panel
          </DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <Card className="border-0 shadow-none">
            <CardHeader className="text-center pb-4">
              <CardDescription>
                Please login to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600">
                  Login
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Demo credentials: admin / sabuilders2017
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 shadow-none">
            <CardHeader className="text-center pb-4">
              <CardTitle>Image Upload</CardTitle>
              <CardDescription>
                Upload images to the portfolio gallery
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image">Select Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />
              </div>
              
              {selectedFile && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Selected: {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}

              <Button 
                onClick={handleFileUpload}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600"
                disabled={!selectedFile}
              >
                Upload Image
              </Button>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Note:</p>
                <p className="text-xs text-gray-500">
                  For full database functionality, connect this project to Supabase 
                  to enable real image upload and storage.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
