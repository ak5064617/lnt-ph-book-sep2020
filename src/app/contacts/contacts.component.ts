import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactList: any[];
  contactSubscription: Subscription;

  constructor(private contactService: ContactService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    this.contactSubscription = this.contactService.getContacts()
      .subscribe( (res: any) => {
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy(): void {
    console.log('inside destroy');
    this.contactSubscription.unsubscribe();
    if (this.contactList && this.contactList.length > 0){
      this.contactList.length = 0;
    }
  }
}
