import { Component, HostListener } from '@angular/core'; // Ajout de HostListener pour clavier

@Component({
  selector: 'app-jesuisperdu',
  standalone: true,
  imports: [],
  templateUrl: './jesuisperdu.component.html',
  // styleUrl: './jesuisperdu.component.css'
})
export class JesuisperduComponent {

  // ----- Propriétés -----

  indexOpacity: number = 10;

  h1Element = document.getElementById("h1");
  percentElement = document.getElementById("pourcent");
  

  // ----- Constructeur -----

  constructor() {
    this.h1Element = document.getElementById("h1");
    this.percentElement = document.getElementById("pourcent");
    
    if (this.h1Element && this.percentElement) {
      this.h1Element.style.fontSize = '250px'; // Définir une taille de police plus grande par défaut
      this.updateOpacity(this.indexOpacity); // Appel à la fonction au chargement avec index 1
    }
  }

  // ----- Méthodes -----

  /**
   * Changement de transparence et de taille du texte
   */
  updateOpacity(o: number): void {
    
    
    if (this.h1Element && this.percentElement) {
      // this.h1Element.style.fontSize = '100px';
      
      this.h1Element.style.opacity = (o * 0.1).toString();
      this.percentElement.innerText = (o * 10).toString();
      this.h1Element.style.fontSize = (o * 10).toString() + 'px';
    }
  }

  moins(): void {
    if (this.indexOpacity > 0) {
      this.updateOpacity(--this.indexOpacity);
    }
  }

  plus(): void {
    if (this.indexOpacity < 10) {
      this.updateOpacity(++this.indexOpacity);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      this.moins();
    }
    if (event.key === "ArrowRight") {
      this.plus();
    }
  }

}
