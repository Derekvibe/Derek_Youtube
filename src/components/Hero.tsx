import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-hero">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Okoro Emmanuel Nzube Derek
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium">
            A <span className="gradient-text">YouTube Content Creator</span> & Video Editor
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I create and edit captivating YouTube videos and Shorts — and I can do the same for brands and creators across platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90" asChild>
              <a href="#videos">
                <Play className="h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.youtube.com/@Pro_Reverb" target="_blank" rel="noopener noreferrer">
                Visit YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
