import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Talent Vault';
  
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  
}
