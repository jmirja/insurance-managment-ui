import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // public dailyLineChartData$: Observable<DailyLineChartData>;
  // public performanceChartData$: Observable<PerformanceChartData>;
  // public revenueChartData$: Observable<RevenueChartData>;
  // public serverChartData$: Observable<ServerChartData>;
  // public supportRequestData$: Observable<SupportRequestData[]>;
  // public visitsChartData$: Observable<VisitsChartData>;
  // public projectsStatsData$: Observable<ProjectStatData>;

  constructor() {
    // this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    // this.performanceChartData$ = this.service.loadPerformanceChartData();
    // this.revenueChartData$ = this.service.loadRevenueChartData();
    // this.serverChartData$ = this.service.loadServerChartData();
    // this.supportRequestData$ = this.service.loadSupportRequestData();
    // this.visitsChartData$ = this.service.loadVisitsChartData();
    // this.projectsStatsData$ = this.service.loadProjectsStatsData();
  }
}
