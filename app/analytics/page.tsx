import DashboardPageLayout from "@/components/dashboard/layout";
import DashboardStat from "@/components/dashboard/stat";
import DashboardCard from "@/components/dashboard/card";
import AnalyticsChart from "@/components/dashboard/analytics-chart";
import AtomIcon from "@/components/icons/atom";
import GearIcon from "@/components/icons/gear";
import ProcessorIcon from "@/components/icons/proccesor";
import BoomIcon from "@/components/icons/boom";
import mockDataJson from "@/mock.json";
import type { MockData } from "@/types/dashboard";
import { Badge } from "@/components/ui/badge";
import { Bullet } from "@/components/ui/bullet";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const mockData = mockDataJson as MockData;

const iconMap = {
  atom: AtomIcon,
  gear: GearIcon,
  proccesor: ProcessorIcon,
  boom: BoomIcon,
};

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toLocaleString();
}

function formatCurrency(num: number): string {
  if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 1000) {
    return `$${(num / 1000).toFixed(0)}K`;
  }
  return `$${num.toLocaleString()}`;
}

export default function AnalyticsPage() {
  const { analytics } = mockData;

  return (
    <DashboardPageLayout
      header={{
        title: "Analytics",
        description: "Last updated 12:05",
        icon: AtomIcon,
      }}
    >
      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {analytics.stats.map((stat, index) => (
          <DashboardStat
            key={index}
            label={stat.label}
            value={stat.value}
            description={stat.description}
            icon={iconMap[stat.icon as keyof typeof iconMap]}
            tag={stat.tag}
            intent={stat.intent}
            direction={stat.direction}
          />
        ))}
      </div>

      {/* Analytics Chart */}
      <div className="mb-6">
        <AnalyticsChart />
      </div>

      {/* Two Column Grid: Conversion Funnel & User Acquisition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Conversion Funnel Card */}
        <DashboardCard title="CONVERSION FUNNEL" addon={<Badge variant="outline">THIS MONTH</Badge>}>
          <div className="bg-accent rounded-lg p-4 space-y-4">
            {analytics.conversionFunnel.map((stage, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {formatNumber(stage.count)}
                    </span>
                    <Badge variant="outline" className="min-w-[60px] justify-center">
                      {stage.percentage}%
                    </Badge>
                  </div>
                </div>
                <Progress value={stage.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* User Acquisition Card */}
        <DashboardCard
          title="USER ACQUISITION"
          addon={<Badge variant="outline-success">+12.4%</Badge>}
        >
          <div className="bg-accent rounded-lg p-4 space-y-3">
            {analytics.userAcquisition.map((source, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Bullet
                    variant={
                      source.trend === "up"
                        ? "success"
                        : source.trend === "down"
                        ? "destructive"
                        : "default"
                    }
                  />
                  <span className="text-sm font-medium">{source.source}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {formatNumber(source.users)} users
                  </span>
                  <Badge
                    variant={
                      source.trend === "up"
                        ? "outline-success"
                        : source.trend === "down"
                        ? "outline-destructive"
                        : "outline"
                    }
                    className="min-w-[60px] justify-center"
                  >
                    {source.percentage}%
                  </Badge>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      source.trend === "up" && "text-success",
                      source.trend === "down" && "text-destructive",
                      source.trend === "neutral" && "text-muted-foreground"
                    )}
                  >
                    {source.trend === "up" ? "^" : source.trend === "down" ? "v" : "-"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Transaction Metrics Table */}
      <div className="mb-6">
        <DashboardCard title="TRANSACTION METRICS" addon={<Badge variant="default">LIVE</Badge>}>
          <div className="bg-accent rounded-lg p-4">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-xs uppercase">Category</TableHead>
                  <TableHead className="text-xs uppercase text-right">Volume</TableHead>
                  <TableHead className="text-xs uppercase text-right">Revenue</TableHead>
                  <TableHead className="text-xs uppercase text-right">Avg Value</TableHead>
                  <TableHead className="text-xs uppercase text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {analytics.transactionMetrics.map((metric, index) => (
                  <TableRow key={index} className="border-border/50">
                    <TableCell className="font-medium">{metric.category}</TableCell>
                    <TableCell className="text-right">
                      {formatNumber(metric.volume)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(metric.revenue)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${metric.avgValue.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          metric.trend === "up"
                            ? "outline-success"
                            : metric.trend === "down"
                            ? "outline-destructive"
                            : "outline"
                        }
                      >
                        {metric.trend === "up" ? "^ UP" : metric.trend === "down" ? "v DOWN" : "- STABLE"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DashboardCard>
      </div>

      {/* Performance Metrics Grid */}
      <DashboardCard
        title="PERFORMANCE METRICS"
        intent="success"
        addon={<Badge variant="outline-success">ALL SYSTEMS OPERATIONAL</Badge>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analytics.performanceMetrics.map((metric, index) => (
            <PerformanceMetricCard key={index} metric={metric} />
          ))}
        </div>
      </DashboardCard>
    </DashboardPageLayout>
  );
}

interface PerformanceMetricCardProps {
  metric: {
    title: string;
    value: string;
    target: string;
    unit: string;
    variant: "success" | "warning" | "destructive";
  };
}

function PerformanceMetricCard({ metric }: PerformanceMetricCardProps) {
  const variantStyles = {
    success: "border-success bg-success/5 text-success ring-success/3",
    warning: "border-warning bg-warning/5 text-warning ring-warning/3",
    destructive: "border-destructive bg-destructive/5 text-destructive ring-destructive/3",
  };

  return (
    <div className={cn("border rounded-md ring-4", variantStyles[metric.variant])}>
      <div className="flex items-center gap-2 py-1 px-2 border-b border-current">
        <Bullet size="sm" variant={metric.variant} />
        <span className="text-sm font-medium">{metric.title}</span>
      </div>
      <div className="py-2 px-2.5">
        <div className="text-3xl font-bold mb-1">
          {metric.value}
          <span className="text-lg ml-0.5">{metric.unit}</span>
        </div>
        <div className="text-xs opacity-50">Target: {metric.target}{metric.unit}</div>
      </div>
    </div>
  );
}
