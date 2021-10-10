import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardTypes } from '../../shared/card-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardTypes = CardTypes;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Ongoing Jobs', info: 'Head hunting started jobs', cols: 2, rows: 1, type: CardTypes.OngoingJobs},
          { title: 'Skill Counts', info: 'No of times skills appeared in resumes', cols: 2, rows: 1, type: CardTypes.SkillCounts },
          { title: 'Monthly Performance', info: 'Your monthly performance', cols: 2, rows: 1, type: CardTypes.MonthlyPerformance},
          { title: 'Job Counts', info: 'No of jobs available', cols: 2, rows: 1, type: CardTypes.JobCounts}
        ];
      }

      return [
        { title: 'Ongoing Jobs', info: 'Head hunting started jobs', cols: 2, rows: 1, type: CardTypes.OngoingJobs },
        { title: 'Skill Counts', info: 'No of times skills appeared in resumes', cols: 1, rows: 1, type: CardTypes.SkillCounts },
        { title: 'Monthly Performance', info: 'Your monthly performance', cols: 1, rows: 2, type: CardTypes.MonthlyPerformance },
        { title: 'Job Counts', info: 'No of jobs available', cols: 1, rows: 1, type: CardTypes.JobCounts }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
