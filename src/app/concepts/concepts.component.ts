import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20; // todos: work with boolean, array, obj

  // property binding related
  companyName = 'L & T Constructions';
  isLoggedIn = false;  // also used in *ngIf

  // two way binding related
  courseName = 'Angular';

  // custom event related
  profileName: any;

  // *ngFor related
  skillsList: string[] = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }

  isAuth(): boolean {
    return !this.isLoggedIn;
  }


  clickHandler(evt): void {
    console.log(evt);
    alert('clicked');

  }
  profileLoadedHandler(evt): void {
    console.log(evt);
    this.profileName = evt;
  }
}
