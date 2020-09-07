import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from '../contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddContactComponent,
    ContactsComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ContactsRoutingModule,
    HttpClientModule
  ]
})
export class ContactsModule { }
