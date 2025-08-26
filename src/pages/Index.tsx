import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced floating orbs with improved glow effects */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full orb-glow-1 animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full orb-glow-2 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full orb-glow-1 animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 left-1/4 w-20 h-20 rounded-full orb-glow-2 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      
      {/* Main hero content with enhanced glass card effect */}
      <div className="text-center space-y-8 px-8 max-w-5xl mx-auto">
        <div className="glass-card p-12 rounded-3xl mx-4 relative">
          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          {/* Name - Main headline */}
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold hero-text mb-6 tracking-tight">
              Nour Necib
            </h1>
          </div>
        
          {/* Subtitle - Professional description */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Passionate Frontend Developer crafting beautiful, interactive web experiences 
              with modern technologies and clean, accessible design.
            </p>
          </div>
        
          {/* Goal statement */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto italic">
              "My goal is to bridge the gap between design and functionality, 
              creating digital experiences that users love and remember."
            </p>
          </div>
        
          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg"
              className="glow-hover group px-12 py-6 text-lg font-semibold"
              onClick={() => {
                // Placeholder for projects navigation
                console.log('Navigate to projects');
              }}
            >
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-md bg-[length:200%_100%] group-hover:animate-pulse"></div>
            </Button>
          </div>
        
          {/* Skills badges */}
          <div className="animate-fade-in-up flex flex-wrap gap-4 justify-center pt-8" style={{ animationDelay: '0.8s' }}>
            {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js'].map((skill, index) => (
              <span 
                key={skill}
                className="px-6 py-3 glass-card rounded-full text-sm text-foreground/90 hover:text-foreground hover:scale-110 transition-all duration-300 cursor-default font-medium border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5OTk5OSIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-50"></div>
    </div>
  );
};

export default Index;