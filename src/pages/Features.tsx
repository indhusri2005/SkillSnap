import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, BookOpen, TrendingUp, Users, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Resume Analysis",
      description: "Advanced NLP algorithms analyze your resume for structure, keywords, and industry alignment.",
      benefits: ["ATS compatibility check", "Keyword optimization", "Formatting suggestions", "Industry-specific insights"]
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Machine learning powered job recommendations based on your skills and experience.",
      benefits: ["Semantic job matching", "Real-time job alerts", "Compatibility scoring", "Location preferences"]
    },
    {
      icon: BookOpen,
      title: "Skill Gap Analysis", 
      description: "Identify missing skills and get personalized learning recommendations.",
      benefits: ["Skills comparison", "Learning pathways", "Course recommendations", "Progress tracking"]
    },
    {
      icon: TrendingUp,
      title: "Career Insights",
      description: "Data-driven insights about your career progression and market trends.",
      benefits: ["Salary benchmarks", "Career trajectory", "Market demand analysis", "Growth opportunities"]
    },
    {
      icon: Users,
      title: "Recruiter Connect",
      description: "Direct connections with recruiters looking for your skill set.",
      benefits: ["Verified recruiters", "Direct messaging", "Interview scheduling", "Feedback collection"]
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and secure. You control who sees your information.",
      benefits: ["End-to-end encryption", "GDPR compliant", "Data ownership", "Anonymous browsing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              AI-Powered Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Everything You Need to
              <span className="text-primary"> Land Your Dream Job</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform combines artificial intelligence with career expertise 
              to give you every advantage in today's competitive job market.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have already boosted their careers with SkillSnap's AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Free Analysis
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;