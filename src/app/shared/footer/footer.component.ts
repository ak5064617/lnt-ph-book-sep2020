import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
            <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-menu>
      <p  class="greyText">Copyright 2020 | Arun</p>
    </div> 
  `,
  styles: [
    `
    .greyText{
      color: grey;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
