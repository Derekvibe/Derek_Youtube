import { Moon, Sun, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home"> <div className="flex items-center gap-2">
          <img src="/ProReverb.png" className="h-6 w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold tracking-tight">ProReverb</span>
        </div></a>
       
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#videos" className="text-sm font-medium transition-colors hover:text-primary">
            Videos
          </a>
          <a href="#shorts" className="text-sm font-medium transition-colors hover:text-primary">
            Shorts
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
