import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

/*
Exercice 6 :

- Créer un nouveau composant et sa route
- Dans ce composant, créer un formulaire réactif pour créer un pokemon
  - nom
  - description
  - liste de types
  - liste d'attaques
    - nom
    - description
    - dégats
  - zone
    - nom
    - region
*/

interface Pokemon {
  nom: string;
  age: number;
  description: string;
  types: string[];
  attaques: { nom: string; description: string; degats: number }[];
  zone: { nom: string; region: string };
}

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, PokemonCardComponent], // Ajouter: FormsModule, ReactiveFormsModule, PokemonCardComponent
  templateUrl: './pokemon.component.html',
  // styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  // ----- Propriétés -----

  // Création d'un formulaire réactif :
  pokemon_form: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),

    // types: new FormArray([
    //   new FormControl('', [Validators.required, Validators.minLength(2)])
    // ]),

    types: new FormControl([]), // Un tableau

    attaques: new FormArray([
      new FormGroup({
        nom: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        degats: new FormControl(0, [Validators.required])
      })
    ]),

    zone: new FormGroup({
      nom: new FormControl(''),
      region: new FormControl('')
    })

  }, [Validators.required]);


  types: string[] = [
    'Acier',
    'Combat',
    'Dragon',
    'Eau',
    'Electrik',
    'Fée',
    'Feu',
    'Glace',
    'Insecte',
    'Normal',
    'Plante',
    'Poison',
    'Psy',
    'Roche',
    'Sol',
    'Spectre',
    'Ténèbres',
    'Vol'
  ];

  // ----- Méthodes -----

  ajoutPokemon(): void {
    if (this.pokemon_form.valid) {
      console.log('Enregistrement du Pokémon', this.pokemon_form.value);
      this.pokemon_form.reset();
    }
    else {
      console.log('Formulaire invalide');
    }
  }

  get attaques() {
    // return this.pokemon_form.controls.attaques; // Ne marche pas
    return this.pokemon_form.controls['attaques'] as FormArray;
  }

  // get types() {
  //   return this.pokemon_form.controls['types'] as FormArray;
  // }

  ajoutAttaque(): void {
    this.attaques.push(new FormGroup({
      nom: new FormControl(''),
      description: new FormControl(''),
      degats: new FormControl(0)
    }));
  }

  // ajoutType(): void {
  //   this.types.push(new FormControl(""));
  // }



  // =========================== Cartes Pokémon ===========================

  // ========== Envoyer données à l'enfant ==========

  pokemons: Pokemon[] = [
    {
      nom: "Dracaufeu",
      age: 5,
      description: "Dracaufeu est l'évolution de Reptincel à partir du niveau 36, lui-même l'évolution de Salamèche à partir du niveau 16.",
      types: ["Feu", "Vol"],
      attaques: [
        {
          nom: "Draco-Griffe",
          description: "Draco-Griffe inflige des dégâts, sans effets secondaires.", degats: 80
        },
        {
          nom: "Lance-Flammes",
          description: "Lance-Flammes inflige des dégâts et possède 10% de chances de brûler la cible.",
          degats: 90
        }
      ],
      zone: {
        nom: "Forêt de Jade",
        region: "Kanto"
      }
    },

    {
      nom: "Poussifeu",
      age: 1,
      description: "Poussifeu est un petit Pokémon au plumage principalement orange avec de petites ailes jaunes et de grands yeux noirs. Il a une crête orange et jaune sur la tête qui ressemble à une flamme. Son bec court et ses fines pattes sont d'un brun très clair. Il a trois serres à l'avant des pattes et une serre à l'arrière.",
      types: ["Feu"],
      attaques: [
        {
          nom: "Flammèche",
          description: "Flammèche inflige des dégâts et a 10% de chances de brûler le Pokémon adverse.",
          degats: 40
        },
        {
          nom: "Vive-Attaque",
          description: "Vive-Attaque inflige des dégâts et possède une priorité de +1.",
          degats: 40
        }
      ],
      zone: {
        nom: "Caverne Typhlosion",
        region: "Hoenn"
      }
    }
  
  ];


  // ========== Recevoir données de l'enfant ==========

  // receiveData: string = "";

  // handleData(data: string) {
  //   this.receiveData = data
  // }

  /**
   * Supprimer un Pokémon
   */
  supprimerPokemon(pokemon: Pokemon): void {
    const index = this.pokemons.indexOf(pokemon);
    this.pokemons.splice(index, 1);
  }

}
