import { Pipe, PipeTransform } from '@angular/core';

/*
Exercice 3 :

- Créer un pipe personnalisé qui prend en paramètre un tableau, et un argument de type string 'order' ('asc' ou 'desc')
- Utiliser ce pipe sur le tableau de séries pour le trier
*/

// type order = "asc" | "desc"; // Facultatif : En définissant un type personnalisé, on indique clairement quelles valeurs sont acceptables pour l'argument order

@Pipe({
  name: 'ordertable',
  standalone: true
})
export class OrdertablePipe implements PipeTransform {

  /* Dans pipes.component.ts :
  tableau: string[] = ['Ranma 1/2', 'Gundam Wing', 'Dragon Ball', 'Sailormoon'];
  */

  transform(value: string[], order: string): string[] {
  // transform(value: string[], order: order): string[] {
    if (order === "asc") {
      return value.sort();
    }
    else {
      return value.sort().reverse();
    }
  }

  // transform(value: string[], order: order): string[] {
  //   let sortedArray = value.slice().sort();
  //   if (order === "desc") {
  //     sortedArray.reverse();
  //   }
  //   return sortedArray;
  // }

  // transform(value: string[], order: order): string[] {
  //   let sortedArray = [...value].sort();
  //   if (order === "desc") {
  //     sortedArray.reverse();
  //   }
  //   return sortedArray;
  // }

  // // Plus court :
  // transform(value: string[], order: order): string[] {
  //   return order === "asc" ? [...value].sort() : [...value].sort().reverse();
  // }


  /* Dans le html :
    <button (click)="sortTable('asc')">Trier par ordre croissant</button>
    <button (click)="sortTable('desc')">Trier par ordre décroissant</button>

    @for (t of tableau | ordertable : orders; track t; let i = $index){
        <p>{{ t }}</p>
    }
  */

}
