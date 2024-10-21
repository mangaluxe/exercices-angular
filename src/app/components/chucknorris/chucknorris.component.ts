import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
Exercice 10 :

Créer un nouveau composant, ChuckNorris.
- Utiliser l'api Chuck Norris fact dans un service pour afficher une fact en random.
- Ajouter un bouton pour recharger la blague.
- https://api.chucknorris.io/
*/

@Component({
  selector: 'app-chucknorris',
  standalone: true,
  imports: [],
  templateUrl: './chucknorris.component.html',
  // styleUrl: './chucknorris.component.css'
})
export class ChucknorrisComponent {

  // ----- Propriétés -----

  blague: string = '';

  
  // ----- Constructeur -----

  constructor(private http: HttpClient) {
    this.loadBlague();
  }


  // ----- Méthodes -----

  // loadBlague() {
  //   this.getBlague().subscribe((data: any) => {
  //     this.blague = data.value;
  //   });
  // }

  // getBlague(): Observable<any> {
  //   return this.http.get('https://api.chucknorris.io/jokes/random');
  // }


  // Marche aussi :
  loadBlague() {
    return this.http.get('https://api.chucknorris.io/jokes/random').subscribe((data: any) => {
      this.blague = data.value;
    });
  }

}
