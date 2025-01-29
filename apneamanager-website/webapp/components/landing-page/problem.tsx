import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import config from "@/config";

export default function Problem() {
  const { problem } = config.landingPage;

  return (
    <section id="problem" className="py-16 bg-secondary/95">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <Badge 
            className="mb-6 px-4 py-1.5 text-base font-medium" 
            variant="outline"
            style={{ 
              backgroundColor: problem.badgeColor,
              color: config.theme.colors.primary,
              borderColor: config.theme.colors.primary
            }}
          >
            {problem.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {problem.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {problem.description}
          </p>
        </div>

        <Card className="border border-border/50 bg-card/50 shadow-lg">
          <CardContent className="pt-6 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problem.problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/75 transition-colors"
                >
                  <ChartBarIcon 
                    className="w-12 h-12 flex-shrink-0" 
                    style={{ color: config.theme.colors[problem.color as keyof typeof config.theme.colors] }} 
                  />
                  <div className="flex flex-col">
                    <span 
                      className="font-bold text-xl" 
                      style={{ color: config.theme.colors[problem.color as keyof typeof config.theme.colors] }}
                    >
                      {problem.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {problem.metric}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}