import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: BreadCrumbItem[] = [
    {
      text: 'Home',
      title: 'Home',
    },
    {
      text: 'teams',
      title: 'Teams'
    },
    {
      text: 'Players',
      title: 'teams/players'
    },
    {
      text: 'stats',
      title: 'teams/players/stats'
    }
  ];

  constructor(private router: Router) { }

  public onItemClick(item: BreadCrumbItem): void {
    this.router.navigate([item.title?.toLowerCase()]);
  }
}
