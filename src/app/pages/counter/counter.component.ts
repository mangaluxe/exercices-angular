import { Component } from '@angular/core';

/*
Exercice 1 :

- Créer un nouveau projet Angular.
- Créer un composant "counter".
- Intégrer le composant dans app.
- Le composant counter doit afficher un compteur qui :
  - commence 0
  - qui est rouge si le nombre est impair et vert si le nombre est pair.
  - qui s'incrémente ou se décrémente grâce à 2 boutons.
*/

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  // styleUrl: './counter.component.css'
})
export class CounterComponent {

  // -------------------- Code ici --------------------

  titre: string = "Compteur";

  nb: number = 0;

  moins() : void {
    console.log("moins");
    this.nb--;
  }

  plus() : void {
    console.log("plus");
    this.nb++;
  }

  get color(): string {
    return this.nb % 2 === 0 ? 'success' : 'warning';
  }

  // -------------------- --------------------

}
