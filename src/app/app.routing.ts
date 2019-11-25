import { Routes, RouterModule } from '@angular/router';
import { PokedexModule } from './modules/pokedex/pokedex.module';

export const routes: Routes = [
    ...PokedexModule.getRoutes()
];

export const routing = RouterModule.forRoot(routes, { useHash: true });