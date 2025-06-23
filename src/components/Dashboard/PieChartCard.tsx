import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { cn } from '@/lib/utils';

const pieChartData = [
  { name: 'Clutch', value: 45, color: '#F87171' }, // red-400
  { name: 'Behance', value: 35, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 10, color: '#34D399' }, // emerald-400
  { name: 'Dribbble', value: 10, color: '#60A5FA' }, // blue-400
];

const sourceData = [
  { name: 'Clutch', value: 3000, percentage: 50, color: 'bg-red-400' },
  { name: 'Behance', value: 1000, percentage: 40, color: 'bg-yellow-400' },
  { name: 'Instagram', value: 1000, percentage: 10, color: 'bg-teal-400' },
  { name: 'Dribbble', value: 1000, percentage: 10, color: 'bg-green-400' },
];

const PieChartCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="leads-converted" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="leads-came">Leads came</TabsTrigger>
            <TabsTrigger value="leads-converted">Leads Converted</TabsTrigger>
            <TabsTrigger value="total-deals">Total deals size</TabsTrigger>
          </TabsList>
          <TabsContent value="leads-converted">
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0', 
                        borderRadius: '0.5rem'
                      }}
                    />
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {sourceData.map((source) => (
                  <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 text-sm">
                    <div className={cn('h-2.5 w-2.5 rounded-full', source.color)}></div>
                    <div className="text-muted-foreground">{source.name}</div>
                    <div className="font-medium text-foreground justify-self-end">${source.value}</div>
                    <div className="text-muted-foreground w-10 text-right">{source.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
                <Badge variant="secondary">from leads total</Badge>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
