import { Component } from '@angular/core';

type days = 'Lundi' | 'Mardi' | 'Mercredi';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  // styleUrl: './block.component.css'
})
export class BlockComponent {

  isLogged: boolean = true;

  // today: string = "Mardi";
  today: days = "Mardi"

  users: string[] = ['toto', 'tata'];

  toggleLogged(): void {
    this.isLogged = !this.isLogged;
  }

}
