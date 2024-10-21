import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './partials/header/header.component'; // Import du Header
import { FooterComponent } from './partials/footer/footer.component'; // Import du Footer
import { CounterComponent } from './pages/counter/counter.component';
import { BlockComponent } from './pages/block/block.component';
import { SeriesComponent } from './pages/series/series.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { ChucknorrisComponent } from './components/chucknorris/chucknorris.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CounterComponent, BlockComponent, SeriesComponent, PipesComponent, LibrairieComponent, PokemonComponent, FormationsComponent, ChucknorrisComponent], // Ajout de HeaderComponent, FooterComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice';
}
