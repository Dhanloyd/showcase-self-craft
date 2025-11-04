import ProfileHeader from "@/components/ProfileHeader";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import SocialLinks from "@/components/SocialLinks";
import Speaking from "@/components/Speaking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - About (Wider) */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <TechStack />
          </div>
          
          {/* Right Column - Experience (Less Wide) */}
          <div className="lg:col-span-3 space-y-8">
            <Experience />
            <Projects />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Certifications />
              <div className="space-y-8">
                <SocialLinks />
                <Speaking />
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
