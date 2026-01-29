export interface DashboardStat {
  label: string;
  value: string;
  description: string;
  intent: "positive" | "negative" | "neutral";
  icon: string;
  tag?: string;
  direction?: "up" | "down";
}

export interface ChartDataPoint {
  date: string;
  expenses: number;
  revenue: number;
  fees: number;
}

export interface ChartData {
  week: ChartDataPoint[];
  month: ChartDataPoint[];
  year: ChartDataPoint[];
}

export interface TeamMember {
  id: number;
  name: string;
  handle: string;
  streak: string;
  deals: number;
  avatar: string;
  featured?: boolean;
  subtitle?: string;
}

export interface SecurityStatus {
  title: string;
  value: string;
  status: string;
  variant: "success" | "warning" | "destructive";
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: "info" | "warning" | "success" | "error";
  read: boolean;
  priority: "low" | "medium" | "high";
}

export interface WidgetData {
  location: string;
  timezone: string;
  temperature: string;
  weather: string;
  date: string;
}

export interface MockData {
  dashboardStats: DashboardStat[];
  chartData: ChartData;
  teamLeaderboard: TeamMember[];
  securityStatus: SecurityStatus[];
  notifications: Notification[];
  widgetData: WidgetData;
  analytics: AnalyticsData;
}

export type TimePeriod = "week" | "month" | "year";

// Analytics types
export interface AnalyticsStat {
  label: string;
  value: string;
  description: string;
  intent: "positive" | "negative" | "neutral";
  icon: string;
  tag?: string;
  direction?: "up" | "down";
}

export interface ConversionFunnel {
  stage: string;
  count: number;
  percentage: number;
}

export interface UserAcquisitionData {
  source: string;
  users: number;
  percentage: number;
  trend: "up" | "down" | "neutral";
}

export interface TransactionMetric {
  category: string;
  volume: number;
  revenue: number;
  avgValue: number;
  trend: "up" | "down" | "neutral";
}

export interface PerformanceMetric {
  title: string;
  value: string;
  target: string;
  unit: string;
  variant: "success" | "warning" | "destructive";
}

export interface AnalyticsChartDataPoint {
  date: string;
  signups: number;
  conversions: number;
  retention: number;
}

export interface AnalyticsChartData {
  week: AnalyticsChartDataPoint[];
  month: AnalyticsChartDataPoint[];
  year: AnalyticsChartDataPoint[];
}

export interface AnalyticsData {
  stats: AnalyticsStat[];
  conversionFunnel: ConversionFunnel[];
  userAcquisition: UserAcquisitionData[];
  transactionMetrics: TransactionMetric[];
  performanceMetrics: PerformanceMetric[];
  chartData: AnalyticsChartData;
}
