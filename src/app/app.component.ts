import { Component, inject } from '@angular/core';
import { BreadCrumbService } from './services/breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <section>
      <ng-container *ngIf="items$ | async as items">
        <kendo-breadcrumb
          (itemClick)="onItemClick($event)"
          [items]="items"
        ></kendo-breadcrumb>
      </ng-container>
    </section>
    <router-outlet></router-outlet>
    <footer>
      <span>2023</span>
    </footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  #breadcrumbService = inject(BreadCrumbService);
  items$ = this.#breadcrumbService.items$;
  #router = inject(Router);

  public onItemClick(item: any) {
    this.#breadcrumbService.updateBreadcrumb(item);
    this.#router.navigate([item.path]);
  }
}
