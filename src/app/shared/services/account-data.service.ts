import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  accountName = 'Arvind';
  private myAccount = new BehaviorSubject<any>(this.accountName);
  latestAccountName: Observable <any> = this.myAccount.asObservable();
  constructor() { }

  // tslint:disable-next-line: typedef
  updateAccountName(newName){
    console.log(newName);
    this.myAccount.next(newName);
  }
}
