import { Component } from '@angular/core';
import { OrdertablePipe } from '../../utils/pipes/ordertable.pipe';

/*
Exercice 2 :

- Créer un nouveau composant "series".
- Créer la route du composant series + la route du composant counter.
- Créer la barre de navigation.
- Dans séries, créer une liste de séries en dur.
- Afficher la liste des séries.
- Afficher un message si la liste est vide.
- Ajouter un bouton de suppression sur chaque élément de la liste.
*/

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [OrdertablePipe],
  templateUrl: './series.component.html',
  // styleUrl: './series.component.css'
})
export class SeriesComponent {

  series: string[] = ['Star Wars', 'Retour vers le futur', 'Terminator', 'Spiderman', 'SOS Fantôme'];

  // Ajout de la propriété order
  order: 'asc' | 'desc' = 'asc'; // Valeur par défaut

  /**
   * Supprimer une série
   */
  deleteSeries(index: number) {
    this.series.splice(index, 1);
  }

  /**
   * Trier tableau
   */
  sortTable(order: 'asc' | 'desc') {
    if (order === 'asc') {
      this.series.sort(); // Utiliser this.series pour trier la liste
    }
    else {
      this.series.sort().reverse(); // Utiliser this.series pour trier la liste
    }
  }

}
