import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*
Exercice 4 :

- Créer un composant librairie, et sa route
- dans ce composant, afficher une liste de livre
  - title
  - author
  - isRead
- quand le livre est lu, on affiche 👍 et 👎 (windows + . pour ajouter un emoji) s'il n'est pas lu
- Utiliser un pipe perso pour la gestion de l'emoji
- Ajouter un bouton pour marquer un livre lu / pas lu


Exercice 5 :

- Dans le composant librairie, Créer un formulaire pour ajouter un livre.
- Par défaut la valeur de isRead sera false.
- Ajouter le nouveau livre à la liste précédente.
*/

interface Book {
  title: string;
  author: string;
  isRead: boolean;
}

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './librairie.component.html',
  // styleUrl: './librairie.component.css'
})
export class LibrairieComponent {

  // ----- Propriétés -----

  // Liste de livres
  books: Book[] = [
    { title: 'Blanche Neige', author: 'Freres Grimms', isRead: true },
    { title: 'Super Mario', author: 'Shigeru Miyamoto', isRead: false },
    { title: 'Harry Potter', author: 'J.K. Rowling', isRead: false }
  ];

  isSubmitted: boolean = false;

  book: Book = {
    title: '',
    author: '',
    isRead: false
  }

  // ----- Méthodes -----

  /**
   * Marquer un livre comme lu ou pas lu
   */
  toggleLu(book: Book) {
    book.isRead = !book.isRead;
  }

  /**
   * Ajouter livre
   */
  ajoutLivre(): void {
    this.isSubmitted = true;

    this.books.push(this.book); // Ajouter le nouveau livre à la liste précédente.

    // Réinitialiser le formulaire après soumission
    this.book = {
      title: '',
      author: '',
      isRead: false
    };

    this.isSubmitted = false;
  }

}
