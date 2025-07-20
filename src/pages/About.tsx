import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50K+", label: "Resumes Analyzed" },
    { number: "10K+", label: "Jobs Matched" },
    { number: "95%", label: "User Satisfaction" },
    { number: "40%", label: "Interview Increase" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We believe everyone deserves access to career opportunities. Our mission is to democratize career advancement through AI."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of AI and machine learning to provide cutting-edge career solutions."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' success in mind. Your career growth is our priority."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in AI accuracy, data security, and user experience."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google AI researcher with 10+ years in ML and career tech.",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "Ex-Microsoft engineer specializing in NLP and distributed systems.",
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Emily Watson",
      role: "Head of AI",
      bio: "PhD in Computer Science, expert in deep learning and career analytics.",
      image: "photo-1649972904349-6e44c42644a7"
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
              About SkillSnap
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Careers Through
              <span className="text-primary"> AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2023, SkillSnap is revolutionizing how professionals navigate 
              their careers by combining artificial intelligence with deep industry expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Story */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  SkillSnap was born from a simple observation: despite having the skills and qualifications, 
                  talented professionals often struggle to find the right opportunities. Traditional job searching 
                  is broken, filled with black holes and mismatched expectations.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our founders, veterans from Google and Microsoft, experienced this firsthand. They saw how 
                  artificial intelligence could bridge the gap between talent and opportunity, making career 
                  advancement more transparent, efficient, and accessible.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, SkillSnap uses advanced NLP, machine learning, and semantic analysis to help 
                  professionals understand their market value, identify growth opportunities, and connect 
                  with the right roles. We're not just another job board – we're your AI-powered career advisor.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Meet the Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 bg-cover bg-center"
                         style={{ backgroundImage: `url(https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=200&h=200)` }}>
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a job seeker looking to advance your career or a recruiter 
              seeking top talent, SkillSnap is here to make the process smarter and more effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Started Today
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;