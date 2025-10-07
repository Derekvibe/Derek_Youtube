import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoGrid from "@/components/VideoGrid";
import ShortsGrid from "@/components/ShortsGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoGrid />
        <ShortsGrid />
      </main>
      <footer className="border-t border-border py-8 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Pro_Reverb.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
