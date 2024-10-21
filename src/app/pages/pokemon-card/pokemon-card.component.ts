import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
Exercice 7 :

- Reprendre les pokemons
- Créer un composant pokemon-card, ce composant prendra un pokemon via les props et affichera une carte de ce pokemon.
- Afficher ensuite grace à une boucle les pokemons de la liste.


Exercice 8 :

- Créer un bouton dans le pokemon-card permettant de supprimer un pokemon :
    - Le bouton doit envoyer un événement au parent.
    - Le parent doit récupérer cet événement pour supprimer le pokemon de la liste.
*/

interface Pokemon {
  nom: string;
  age: number;
  description: string;
  types: string[];
  attaques: { nom: string; description: string; degats: number }[];
  zone: { nom: string; region: string };
}

type PokemonType = 'Acier' | 'Eau' | 'Feu' | 'Vol';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  // styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  // ========== Recevoir données du parent ==========

  // Propriété d'entrée pour recevoir un Pokémon
  @Input() pokemon!: Pokemon; // ! pour autoriser null


  // ========== Envoyer données au parent ==========

  // @Output() dataEmitted = new EventEmitter<string>()

  // sendData() {
  //   this.dataEmitted.emit('Salut depuis composant enfant !');
  // }

  @Output() deleteEvent = new EventEmitter<Pokemon>(); // Événement pour suppression

  /**
   * Supprimer un Pokémon
   */
  supprimerPokemon() {
    this.deleteEvent.emit(this.pokemon);
  }


  // ----- Couleur selon type de pokémon -----

  /**
   * Couleur selon le type de Pokémon
   */
  getTypeColor(type: string): string {
    // const typeColors: Record<PokemonType, string> = {
    const typeColors: Record<string, string> = {
      Acier: "grey",
      Eau: "blue",
      Feu: "red",
      Vol: "skyblue"
    }

    // return typeColors[type as PokemonType] || 'blue';
    return typeColors[type] || 'blue';
  }

}
