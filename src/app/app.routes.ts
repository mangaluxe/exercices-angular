import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlockComponent } from './pages/block/block.component';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { JesuisperduComponent } from './pages/jesuisperdu/jesuisperdu.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { ChucknorrisComponent } from './components/chucknorris/chucknorris.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, // http://localhost:4200/
    {path: 'block', component: BlockComponent}, // http://localhost:4200/block
    {path: 'counter', component: CounterComponent}, // http://localhost:4200/counter
    {path: 'series', component: SeriesComponent}, // http://localhost:4200/series
    {path: 'pipes', component: PipesComponent}, // http://localhost:4200/pipes
    {path: 'librairie', component: LibrairieComponent}, // http://localhost:4200/librairie
    {path: 'formulaire', component: FormulaireComponent}, // http://localhost:4200/formulaire
    {path: 'jesuisperdu', component: JesuisperduComponent}, // http://localhost:4200/jesuisperdu
    {path: 'pokemon', component: PokemonComponent}, // http://localhost:4200/pokemon
    {path: 'formations', component: FormationsComponent}, // http://localhost:4200/formations
    {path: 'chucknorris', component: ChucknorrisComponent} // http://localhost:4200/chucknorris
];
