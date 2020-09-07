import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  accountName: string;
  duplicateAccountName: any;
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name;
      this.duplicateAccountName = name;
    });
  }
  updateAccountHandler(): void {
    console.log(this.duplicateAccountName);
    this.accountDataService.updateAccountName(this.duplicateAccountName);
  }

}
