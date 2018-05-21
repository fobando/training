import { Pipe, PipeTransform } from '@angular/core';
import { AtmTransaction } from '../models/atm.interface';

@Pipe({
  name: 'depositTxnFilter'
})
export class DepositTxnFilterPipe implements PipeTransform {

  transform(txn: AtmTransaction[]): any {
    return txn.filter( depositTrans => depositTrans.transactionType === 'Deposit');
  }
}
