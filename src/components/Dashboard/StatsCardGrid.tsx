import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '8 days', color: 'bg-indigo-500' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const StatsCardGrid: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold text-lg text-card-foreground">Funnel count</h3>
        <p className="text-4xl font-bold text-card-foreground">600 <span className="text-lg font-medium text-muted-foreground">active leads</span></p>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex h-2 w-full overflow-hidden rounded-full">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="space-y-3">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className={cn('h-2.5 w-2.5 rounded-full', stage.color)}></span>
                <span className="text-muted-foreground">{stage.name}</span>
              </div>
              <span className="font-medium text-foreground justify-self-end">{stage.count}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-4 justify-self-end">
                        <span className="text-muted-foreground w-16 text-right">${stage.value}</span>
                        <span className="text-muted-foreground w-16 text-right">{stage.duration}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average time on this stage</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCardGrid;
