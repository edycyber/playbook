import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Gift, Download, Smartphone, Wifi, Zap } from "lucide-react";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { InstallGuideDialog } from "@/components/InstallGuideDialog";

const Index = () => {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const handleDownloadClick = async () => {
    if (isInstallable) {
      const installed = await installApp();
      if (!installed) {
        setShowInstallGuide(true);
      }
    } else {
      setShowInstallGuide(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-gold/20 animate-float">
          <Heart className="w-16 h-16" />
        </div>
        <div className="absolute top-40 right-20 text-gold/15 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute bottom-40 left-20 text-gold/10 animate-float" style={{ animationDelay: "2s" }}>
          <Star className="w-20 h-20" />
        </div>
        <div className="absolute bottom-20 right-10 text-christmas-red/20 animate-float" style={{ animationDelay: "0.5s" }}>
          <Gift className="w-14 h-14" />
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Heart className="w-4 h-4 text-christmas-red" fill="currentColor" />
            <span className="text-sm text-muted-foreground">The Ultimate Relationship Guide</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">The </span>
            <span className="text-gradient-gold">Playbook</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Your game manual for winning over your partner. 
            <span className="text-foreground font-medium"> Master the art of love</span> with 
            proven strategies that actually work.
          </p>

          {/* Features */}
          <div 
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>50+ Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-christmas-red" />
              <span>Expert Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" />
              <span>Proven Results</span>
            </div>
          </div>

          {/* CTA Button */}
          <div 
            className="pt-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Link to="/pricing">
              <Button variant="hero" size="xl">
                <Gift className="w-5 h-5" />
                Get Your Copy Now
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div 
            className="pt-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="text-gold font-semibold">10,000+</span> couples worldwide
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      </main>

      {/* Download App Section */}
      <section className="relative z-10 px-6 py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm">
            <Smartphone className="w-4 h-4 text-gold" />
            <span className="text-sm text-muted-foreground">Available on All Devices</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Get the </span>
            <span className="text-gradient-gold">App</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Install Playbook on your device for instant access, offline reading, and a seamless experience.
          </p>

          {/* App Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Instant loading with native app performance</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Wifi className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground">Works Offline</h3>
              <p className="text-sm text-muted-foreground">Access your playbook anytime, anywhere</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-foreground">Home Screen</h3>
              <p className="text-sm text-muted-foreground">Add to your device like a real app</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="pt-6">
            {isInstalled ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">App Installed!</span>
              </div>
            ) : (
              <Button variant="hero" size="xl" onClick={handleDownloadClick}>
                <Download className="w-5 h-5" />
                Download Now
              </Button>
            )}
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Install Guide Dialog */}
      <InstallGuideDialog open={showInstallGuide} onOpenChange={setShowInstallGuide} />
    </div>
  );
};

export default Index;
