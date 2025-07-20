import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Brain, Target, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Resume",
      description: "Simply drag and drop your resume in PDF or DOCX format. Our system securely processes your document.",
      details: ["Supports PDF and DOCX formats", "Secure file processing", "Instant upload confirmation", "Privacy protected"]
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your resume using NLP and machine learning to extract key information.",
      details: ["Skill extraction", "Experience mapping", "Education parsing", "ATS compatibility check"]
    },
    {
      number: "03",
      icon: Target,
      title: "Job Matching",
      description: "Get personalized job recommendations based on your profile and career preferences.",
      details: ["Semantic matching", "Location filtering", "Salary preferences", "Real-time opportunities"]
    },
    {
      number: "04",
      icon: BookOpen,
      title: "Skill Development",
      description: "Discover skill gaps and receive curated learning resources to advance your career.",
      details: ["Gap analysis", "Course recommendations", "Learning pathways", "Progress tracking"]
    }
  ];

  const benefits = [
    "Save 10+ hours per week on job searching",
    "Increase interview callbacks by 40%",
    "Get matched with relevant opportunities",
    "Build in-demand skills faster",
    "Access hidden job market",
    "Receive expert career guidance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Simple Process
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How SkillSnap
              <span className="text-primary"> Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process takes you from resume upload to career advancement 
              in just four simple steps, powered by cutting-edge AI technology.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isOdd = index % 2 === 1;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isOdd ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-primary/30">{step.number}</div>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">{step.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 max-w-md">
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-10 w-10 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-foreground mb-2">Step {step.number}</h3>
                        <p className="text-sm text-muted-foreground">{step.title}</p>
                      </div>
                    </Card>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-20">
                      <ArrowRight className="h-6 w-6 text-primary/40" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Professionals Choose SkillSnap
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands who have accelerated their careers with our AI-powered platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;