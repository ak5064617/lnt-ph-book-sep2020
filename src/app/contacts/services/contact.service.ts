import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorators
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  createContact(contactData: any): any { // 1. get the data from comp
    console.log(contactData);
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));
  }
  getContacts(): any {
    console.log('Inside getContacts');

    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
  getContactById(id: string): any {
    console.log(id);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;

    return this.http.get(CONTACT_DETAILS_URL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }


  updateContact(updatableContactData): any {
    console.log(updatableContactData);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updatableContactData.id}`;
    return this.http.put(CONTACT_DETAILS_URL, updatableContactData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }


}
