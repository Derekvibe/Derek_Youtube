import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Film, Palette, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Film, title: "Video editing for YouTube and Instagram", description: "Professional editing that tells compelling stories" },
    { icon: Palette, title: "Thumbnail and channel branding design", description: "Eye-catching visuals that drive engagement" },
    { icon: Smartphone, title: "Short-form content for TikTok, Reels, and Shorts", description: "Viral-ready content for modern platforms" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about transforming raw footage into visually appealing stories. From full-length YouTube videos to engaging Shorts, I help creators and brands stand out online through editing, storytelling, and eye-catching visuals.
              </p>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a 
                  href="mailto:derekemmanuel99@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  derekemmanuel99@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Collaboration</p>
                <p className="text-sm">
                  Available for collaborations, freelance projects, and content partnerships. Let's create something amazing together!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
