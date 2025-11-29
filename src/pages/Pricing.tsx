import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Snowflake, ArrowLeft, Lock, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ACCESS_CODE = "apqm153275";

const Pricing = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (code.trim() === ACCESS_CODE) {
        toast({
          title: "Access Granted!",
          description: "Welcome to the Playbook homepage.",
        });
        navigate("/home");
      } else {
        toast({
          title: "Invalid Code",
          description: "Please check your access code and try again.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Decorative snowflakes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-foreground/5 animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Snowflake className="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="relative z-10 px-6 py-12">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-christmas-red/20 border border-christmas-red/30">
              <Gift className="w-4 h-4 text-christmas-red" />
              <span className="text-sm text-christmas-red font-medium">Limited Time Offer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-foreground">Special </span>
              <span className="text-christmas-red">Christmas</span>
              <br />
              <span className="text-gradient-gold">Discount of 25%</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get the complete Playbook at an exclusive holiday price. 
              Don't miss this opportunity to transform your relationship.
            </p>
          </div>

          {/* Features */}
          <div 
            className="grid md:grid-cols-3 gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              "Complete Relationship Guide",
              "Lifetime Access",
              "Expert Strategies"
            ].map((feature, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border"
              >
                <Check className="w-5 h-5 text-christmas-green" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Gumroad Iframe */}
          <div 
            className="rounded-xl overflow-hidden border border-border bg-card shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <iframe
              src="https://gumroad.com/"
              className="w-full h-[500px] border-0"
              title="Purchase Playbook"
            />
          </div>

          {/* Access Code Section */}
          <div 
            className="max-w-md mx-auto space-y-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-gold">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">Already have an access code?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enter your code below to access the full Playbook content
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="h-12 text-center text-lg tracking-wider bg-secondary/50 border-border focus:border-gold focus:ring-gold"
              />
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isLoading || !code.trim()}
              >
                {isLoading ? "Verifying..." : "Access Playbook"}
              </Button>
            </form>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-christmas-red/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
};

export default Pricing;
