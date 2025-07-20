import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Brain, 
  Target, 
  TrendingUp, 
  BookOpen, 
  MessageSquare,
  BarChart3,
  Search,
  Award
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Parsing",
    description: "Advanced AI extracts education, skills, and experience from any resume format",
    tags: ["PDF", "DOCX", "AI Parsing"],
    color: "bg-blue-500"
  },
  {
    icon: BarChart3,
    title: "Quality Scoring",
    description: "Get a comprehensive 0-100 score based on industry standards and best practices",
    tags: ["Analytics", "Scoring", "Insights"],
    color: "bg-green-500"
  },
  {
    icon: Target,
    title: "Job Matching",
    description: "Smart recommendations using semantic similarity and skill alignment",
    tags: ["ML", "Matching", "BERT"],
    color: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get actionable improvement suggestions",
    tags: ["Skills", "Growth", "Analysis"],
    color: "bg-orange-500"
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Curated courses and materials to bridge your skill gaps",
    tags: ["Courses", "Upskilling", "Resources"],
    color: "bg-indigo-500"
  },
  {
    icon: MessageSquare,
    title: "AI Career Chat",
    description: "Ask questions about your career path and get personalized advice",
    tags: ["ChatBot", "AI", "Guidance"],
    color: "bg-pink-500"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">AI-Powered Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-primary">Advance Your Career</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI with career expertise 
            to give you the insights and tools needed for success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10K+</div>
            <div className="text-muted-foreground">Resumes Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Job Match Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Partner Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};