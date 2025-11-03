import { Mail, MapPin, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfileHeader = () => {
  return (
    <header className="bg-card rounded-xl shadow-[var(--shadow-card)] p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-foreground">Bryl Lim</h1>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
              Available for work
            </Badge>
          </div>
          
          <p className="text-lg text-muted-foreground mb-1">Software Engineer • Content Creator</p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Metro Manila, Philippines
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              contact@example.com
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-primary to-accent">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline">
              Visit my community and join the education here
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
