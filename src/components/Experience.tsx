import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  isVerified?: boolean;
}

const ExperienceItem = ({ title, company, location, period, isVerified }: ExperienceItemProps) => (
  <div className="flex gap-4 pb-6 last:pb-0 border-b last:border-0">
    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
      <Building2 className="w-6 h-6 text-primary" />
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-foreground flex items-center gap-2">
        {title}
        {isVerified && (
          <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
            ✓
          </Badge>
        )}
      </h4>
      <p className="text-sm text-muted-foreground">{company}</p>
      <p className="text-xs text-muted-foreground mt-1">{location} · {period}</p>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Principal AI Engineer",
      company: "TechCorp",
      location: "Remote",
      period: "Jan 2024 - Present",
      isVerified: true,
    },
    {
      title: "AI Ops Engineer",
      company: "DataFlow Inc",
      location: "San Francisco, CA",
      period: "Mar 2023 - Dec 2023",
    },
    {
      title: "Senior Full-Stack Developer",
      company: "WebSolutions",
      location: "Manila, PH",
      period: "Jun 2021 - Feb 2023",
    },
    {
      title: "Software Engineering Lead",
      company: "StartupHub",
      location: "Remote",
      period: "Jan 2020 - May 2021",
    },
    {
      title: "Lead Application Developer",
      company: "DevCompany",
      location: "Quezon City, PH",
      period: "Aug 2018 - Dec 2019",
    },
  ];

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">💼</span>
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Experience;
