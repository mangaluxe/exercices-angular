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

  // Ajouter provideHttpClient() dans app.config.ts : providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]

  // ----- Propriétés -----

  blague: string = '';

  private apiUrl: string = "https://api.chucknorris.io/jokes/random";


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
  //   return this.http.get(this.apiUrl);
  // }


  // Marche aussi :
  loadBlague() {
    return this.http.get(this.apiUrl).subscribe((data: any) => {
      this.blague = data.value;
    });
  }

}
