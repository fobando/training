import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseTransactions } from '../../models/atm.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public status: number = 0;
  public message: string = '';

  public atmTransactions  : AtmResponseTransactions = {} as AtmResponseTransactions;

  constructor(public atmService : AtmServiceService,
  public router : Router ) { }

  ngOnInit() {

    if (!this.atmService.accountValid) {
       this.router.navigate(['/']);

    }

     this.getLastOperations(this.atmService.getAccountNumber());

     this.atmService.onUpdatedTransactions$.subscribe(data =>  {
              this.getLastOperations(this.atmService.getAccountNumber());
       });

     this.atmService.onUpdateAccountNumber$.subscribe(resp => {
               this.getLastOperations(this.atmService.getAccountNumber());

       });

  }

  getLastOperations(acct: string) {

    // to test error message from backend
    // acct = '1234';

     this.atmService.getLastOperations(acct).subscribe(result => {
          console.log('onUpdatedTransactions received()');

          this.atmTransactions = result;

          this.status = result.status;
          this.message = result.message;
          console.log('status:' + this.status);
          console.log('message:' + this.message);

    });
  }

  showPanel() {
    return this.atmService.accountValid;
  }
}
