import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Cloud,
  Brain,
  Smartphone,
  GitBranch,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const icons: Record<string, LucideIcon> = {
      Code,
      Cloud,
      Brain,
      Smartphone,
      GitBranch,
      RefreshCw,
    };

    const IconComponent = icons[iconName] || Code;
    return <IconComponent size={24} className="text-primary" />;
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow bg-white border-b  shadow-primary shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-4">{getIcon(icon)}</div>
        <CardTitle className="text-primary font-bold font-goldman text-2xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-dark-600 font-medium">{description}</p>
      </CardContent>
    </Card>
  );
}
