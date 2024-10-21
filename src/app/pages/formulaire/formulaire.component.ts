import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface User {
  nom: string,
  email: string,
  password: string
}

// Marche aussi :
// type User = {
//   nom: string,
//   email: string,
//   password: string
// }

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule], // Ajouter: FormsModule, ReactiveFormsModule
  templateUrl: './formulaire.component.html',
  // styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  // ----- Propriétés -----

  message: string = "";
  message2: string = "";

  isSubmitted: boolean = false;

  user: User = {
    nom: '',
    email: '',
    password: ''
  }

  // ----- Méthodes -----

  updateMessage(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.message = input.value;
  }

  submitUser(): void {
    this.isSubmitted = true;

    if (!this.checkPassword) {
      console.log(this.user);
    }
  }

  // ----- Getter -----

  get checkPassword() {
    return this.isSubmitted && this.user.password.length < 6;
  }


  // ========== Formulaire réactif ==========

  // Ajouter dans component.ts : ReactiveFormsModule
  // imports: [FormsModule, ReactiveFormsModule],

  book_control = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]); // Vérifier en haut: import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

  saveBook(): void {
    if (this.book_control.valid) {
      console.log('Livre ajouté :', this.book_control.value);
    }
    else {
      console.log('Trop court');
    }
  }


  // ========== Form group ==========

  // ----- Propriétés -----

  // Création d'un formulaire réactif pour la formation
  formation_form: FormGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      duration: new FormControl(0, [Validators.required]),
      // title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      // duration: new FormControl(0, [Validators.required, Validators.min(1)]),

      trainer: new FormGroup({ // FormGroup pour Objet
        firstname: new FormControl(''),
        lastname: new FormControl('')
      }),

      modules: new FormArray([new FormControl(""), new FormControl(""), new FormControl("")])
    }, [Validators.required]
  )

  // ----- Méthodes -----

  saveFormation(): void {
    if (this.formation_form.valid) {
      console.log('Sauvegarde de la formation', this.formation_form.value);
      this.formation_form.reset();
    }
  }

  get modules() {
    return this.formation_form.controls['modules'] as FormArray;
  }

  addModule(): void {
    this.modules.push(new FormControl(""))
  }

  // ----- Getters -----

  // get title() { // Cela permet d'accéder à this.title au lieu de this.formation_form.controls['title'].
  //   return this.formation_form.controls['title'];
  // }

  // get duration() {
  //   return this.formation_form.controls['duration'];
  // }

}
