import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, LogOut, BookOpen } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gold/10">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <span className="text-xl font-bold text-gradient-gold">Playbook</span>
          </div>
          
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Exit
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Banner */}
          <div 
            className={`text-center space-y-4 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
              <Heart className="w-4 h-4 text-christmas-red" fill="currentColor" />
              <span className="text-sm text-gold font-medium">Welcome to Your Playbook</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Your Journey to <span className="text-gradient-gold">Love</span> Starts Here
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all the strategies, tips, and expert advice to win over your partner.
            </p>
          </div>

          {/* Content Iframe */}
          <div 
            className={`rounded-xl overflow-hidden border border-border bg-card shadow-2xl transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-secondary/50 px-6 py-3 border-b border-border flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-christmas-red/60" />
                <div className="w-3 h-3 rounded-full bg-gold/60" />
                <div className="w-3 h-3 rounded-full bg-christmas-green/60" />
              </div>
              <span className="text-sm text-muted-foreground">Playbook Content</span>
            </div>
            
            <iframe
              src="https://veamoschat.netlify.app/"
              className="w-full h-[600px] border-0"
              title="Playbook Content"
            />
          </div>

          {/* Footer Note */}
          <div 
            className={`text-center transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground">
              Need help? Contact support for assistance with your Playbook access.
            </p>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </main>
    </div>
  );
};

export default Home;
