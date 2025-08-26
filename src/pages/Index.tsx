import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating orbs for visual depth */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-accent/15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary-glow/10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main hero content */}
      <div className="text-center space-y-8 px-6 max-w-4xl mx-auto">
        {/* Name - Main headline */}
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold hero-text mb-4">
            Nour Necib
          </h1>
        </div>
        
        {/* Subtitle - Professional description */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Frontend Developer crafting beautiful, interactive web experiences 
            with modern technologies and clean, accessible design.
          </p>
        </div>
        
        {/* Goal statement */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto">
            My goal is to bridge the gap between design and functionality, 
            creating digital experiences that users love and remember.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="hero" 
            size="lg"
            className="glow-hover group"
            onClick={() => {
              // Placeholder for projects navigation
              console.log('Navigate to projects');
            }}
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          </Button>
        </div>
        
        {/* Skills badges */}
        <div className="animate-fade-in-up flex flex-wrap gap-3 justify-center pt-8" style={{ animationDelay: '0.8s' }}>
          {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js'].map((skill, index) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-muted/20 backdrop-blur-sm border border-border/50 rounded-full text-sm text-foreground/80 hover:bg-muted/30 transition-colors"
              style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5OTk5OSIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-50"></div>
    </div>
  );
};

export default Index;