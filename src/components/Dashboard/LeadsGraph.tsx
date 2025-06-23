import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';

const lineChartData = [
  { name: 'March', won: 68, lost: 65 },
  { name: 'April', won: 42, lost: 25 },
  { name: 'May', won: 65, lost: 55 },
  { name: 'June', won: 82, lost: 5 },
  { name: 'July', won: 95, lost: 40 },
  { name: 'August', won: 30, lost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-bold text-foreground mb-2">{label}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-xs uppercase text-muted-foreground">Won</span>
            <span className="font-bold text-teal-500">{payload[0].value}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase text-muted-foreground">Lost</span>
            <span className="font-bold text-red-500">{payload[1].value}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const LeadsGraph: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg text-card-foreground">Leads tracking</h3>
          <p className="text-muted-foreground">
            <span className="text-2xl font-bold text-card-foreground">680</span> total closed{' '}
            <span className="text-2xl font-bold text-card-foreground ml-4">70</span> total lost
          </p>
        </div>
        <Button variant="outline" size="sm" className="ml-auto gap-1 text-sm">
          last 6 months
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={lineChartData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="name"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="won" stroke="#14B8A6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" activeDot={{ r: 6, fill: '#14B8A6', stroke: 'white', strokeWidth: 2 }} />
              <Area type="monotone" dataKey="lost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" activeDot={{ r: 6, fill: '#EF4444', stroke: 'white', strokeWidth: 2 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
                <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsGraph;
