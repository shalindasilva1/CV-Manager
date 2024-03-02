import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CardTypes } from '../../shared/card-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards$: Observable<any[]>;
  cardTypes = CardTypes;
  tokenKey: string ="Bearer";

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: 'Ongoing Jobs', info: 'Head hunting started jobs', cols: 2, rows: 1, type: CardTypes.OngoingJobs },
            { title: 'Skill Counts', info: 'No of times skills appeared in resumes', cols: 2, rows: 1, type: CardTypes.SkillCounts },
            { title: 'Monthly Performance', info: 'Your monthly performance', cols: 2, rows: 1, type: CardTypes.MonthlyPerformance },
            { title: 'Job Counts', info: 'No of jobs available', cols: 2, rows: 1, type: CardTypes.JobCounts }
          ];
        } else {
          return [
            { title: 'Ongoing Jobs', info: 'Head hunting started jobs', cols: 2, rows: 1, type: CardTypes.OngoingJobs },
            { title: 'Skill Counts', info: 'No of times skills appeared in resumes', cols: 1, rows: 1, type: CardTypes.SkillCounts },
            { title: 'Monthly Performance', info: 'Your monthly performance', cols: 1, rows: 2, type: CardTypes.MonthlyPerformance },
            { title: 'Job Counts', info: 'No of jobs available', cols: 1, rows: 1, type: CardTypes.JobCounts }
          ];
        }
      }),
      shareReplay()
    );

    localStorage.setItem(this.tokenKey,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDVoMDk4YmI4cmViZXJid3I0dnZiODk0NSIsImp0aSI6ImEyOTBkZGE0LWJhM2YtNDNiMS05MTgxLWQ0YjAzNDM0NjlhMCIsImlhdCI6IjE3MDkzNjc2ODYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjZiMTM2YTMzLTVmOGQtNDMzNS04YTE2LWRlOGY1OWUyNWMxZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNoYWxpbmRhc2lsdmExQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzA5MzY5NDg2LCJpc3MiOiJFeGFtcGxlSXNzdWVyIiwiYXVkIjoiVmFsaWRBdWRpZW5jZSJ9._6nCRX550SD8KbenouBzAhfQ2uzK8N59k0ax3c_cIw4");
  }
}
