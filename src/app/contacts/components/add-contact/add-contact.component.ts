import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1 of reactive forms: Have the form tag equivalent in TS -- FormGroup
  contactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) {  // dependency injection

  }

  ngOnInit(): void {
    // Step 1 continues with FormGroup object
    this.contactForm = new FormGroup({
      // Step 2: Have form field equivalent in TS
      name: new FormControl('arvind', Validators.required), // Step 5: Work with Validators
      phone: new FormControl('2331421412', Validators.required), // Refer TS for step 6 // todo: max length 10
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    }); // Refer HTML for step 3.

  }

  addContactHandler(): void {

    console.log(this.contactForm.value);

    this.contactService.createContact(this.contactForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });

  }
}
