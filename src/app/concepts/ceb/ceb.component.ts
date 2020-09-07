import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {
  @Output() profileLoaded = new EventEmitter();
  constructor() {
    console.log('Inside ngOnInit');
   }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    this.profileLoaded.emit('Arvind');
  }
  sendDataHander(): void
  {
 this.profileLoaded.emit('arvind');
  }

}
