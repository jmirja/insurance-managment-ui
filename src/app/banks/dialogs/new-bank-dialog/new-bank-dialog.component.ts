import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bank } from 'src/app/core/models/data/bank';
import { IRequestBank } from 'src/app/core/models/request/IRequestBank';
import { BankService } from 'src/app/core/services/bank.service';

@Component({
  selector: 'app-new-bank-dialog',
  templateUrl: './new-bank-dialog.component.html',
  styleUrls: ['./new-bank-dialog.component.scss'],
})
export class NewBankDialogComponent implements OnInit {
  newBankForm!: FormGroup;
  newBank!: Bank;
  newBankEvent = new EventEmitter();

  addingBankInProgress: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bankService: BankService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newBankForm = this.formBuilder.group({
      BankId: 0,
      BankName: [null, Validators.required],
    });
  }

  ngOnDestroy(): void {
    // this.newBankForm = null;
    // this.newBank = null;
    // this.newAccountEvent = null;
    // this.addingBankInProgress = null;
    // this.data = null;
    // this.bankService = null;
    // this.formBuilder = null;
  }

  get controlsValues() {
    return this.newBankForm.controls;
  }

  getControlsValues() {
    return this.newBankForm.controls;
  }

  onCreateBank() {
    try {
      this.addingBankInProgress = true;
      this.newBankForm.disable();

      let requestNewBank: IRequestBank = {
        BankId: this.controlsValues['BankId'].value,
        BankName: this.controlsValues['BankName'].value,
      };

      this.bankService.registerBank(requestNewBank).then((result: any) => {
        if (result != undefined && result != null) {
          this.newBankEvent.emit(result);
          //   let resultData = result;
          //   if (RequestResult[resultData.Result] == 'OK') {
          //     this.newAccountEvent.emit(result);
          //     this.notificationService.openNotification(RequestResult[resultData.Result], 'Added new account');
          //   } else {
          //     this.notificationService.openNotification(RequestResult[resultData.Result], RequestResult[resultData.Result]);
          //   }
          // } else {
          //   this.notificationService.openNotification(RequestResult[500], RequestResult[500]);
          // }
          // this.newBankForm.enable();
          // this.addingBankInProgress = false;
          let resultData = result;
        }
      });

      //requestNewBank = null;

      // this.newBankForm.enable();
      // this.addingBankInProgress = false;
    } catch (error) {
      this.newBankForm.enable();
      this.addingBankInProgress = false;
    }
  }
}
