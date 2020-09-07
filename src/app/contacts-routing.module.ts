import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'contacts/:id', component: ContactDetailsComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
   exports: [RouterModule]
})
export class ContactsRoutingModule { }
