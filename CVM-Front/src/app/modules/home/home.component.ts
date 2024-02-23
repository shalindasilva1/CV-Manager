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
  }
}
