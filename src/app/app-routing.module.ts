import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TeamsComponent} from "./pages/teams/teams.component";
import {PlayersComponent} from "./pages/players/players.component";
import {StatsComponent} from "./pages/stats/stats.component";


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
        component: TeamsComponent,
    },
    {
        path: 'teams/players',
        component: PlayersComponent
    },
    {
        path: 'teams/players/stats/:team_id',
        component: StatsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
