import { DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UppertablePipe } from '../../utils/pipes/uppertable.pipe';
import { OrdertablePipe } from '../../utils/pipes/ordertable.pipe';

/*
Exercice 3 :

- Créer un pipe personnalisé qui prend en paramètre un tableau, et un argument de type string 'order' ('asc' ou 'desc')
- Utiliser ce pipe sur le tableau de séries pour le trier
- Ajouter 2 boutons pour modifier l'ordre du tableau (asc, desc)
*/

type order = "asc" | "desc";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, DecimalPipe, UppertablePipe, OrdertablePipe],
  templateUrl: './pipes.component.html',
  // styleUrl: './pipes.component.css'
})
export class PipesComponent {

  message: string = "Bonjour";
  message2: string = "BONJOUR";
  today: Date = new Date();
  pi: number = Math.PI

  // Pour tester pipe personnalisé :
  tableau: string[] = ['Ranma 1/2', 'Gundam Wing', 'Dragon Ball', 'Sailormoon'];

  order: order = "asc";

  sortTable(order: order): void {
    this.order = order;
  }

}
