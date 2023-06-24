import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { PlayersComponent } from './pages/team/players/players.component';
import { StatsComponent } from './pages/team/players/stats/stats.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
     redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamComponent,
    children: [
      {
        path: 'players',
        component: PlayersComponent,
        children: [
          {
            path: 'stats',
            component: StatsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
