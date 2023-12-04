import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Bank } from 'src/app/core/models/data/bank';
import { BankService } from 'src/app/core/services/bank.service';
import { IRequestBank } from 'src/app/core/models/request/IRequestBank';

@Component({
  selector: 'app-edit-bank-dialog',
  templateUrl: './edit-bank-dialog.component.html',
  styleUrls: ['./edit-bank-dialog.component.scss'],
})
export class EditBankDialogComponent implements OnInit {
  editBankForm!: FormGroup;

  selectedBankData!: Bank;

  updatingBankInProgress: boolean = false;

  editBankEvent = new EventEmitter();
  selected = new FormControl(1);

  securityRequestInProgress: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bankService: BankService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editBankForm = this.formBuilder.group({
      BankId: [this.data.Bank.BankId],
      BankName: [this.data.Bank.BankName, Validators.required],
    });
    this.selectedBankData = this.data.Bank;
  }

  ngOnDesctroy(): void {
    // this.editBankForm = null;
    // this.selectedBankData = null;
    // this.bankService = null;
    this.data = null;
  }

  get hasChanges() {
    return (
      this.data.Bank.BankId != this.controlsValues['BankId'].value ||
      this.data.Bank.BankName != this.controlsValues['BankName'].value.trim()
    );
  }

  get controlsValues() {
    return this.editBankForm.controls;
  }

  updateBank() {
    try {
      this.editBankForm.disable();
      this.updatingBankInProgress = true;
      let requestUpdateAccount: IRequestBank = {
        BankId: this.controlsValues['BankId'].value,
        BankName: this.controlsValues['BankName'].value,
      };

      this.bankService.updateBank(requestUpdateAccount).then((result: any) => {
        if (result != undefined && result != null) {
          let resultData = result;
          if (resultData != undefined) {
            this.editBankEvent.emit(result);
            // this.notificationService.openNotification(
            //   RequestResult[resultData.Result],
            //   'Account update successful'
            // );
          } else {
            // this.notificationService.openNotification(
            //   RequestResult[resultData.Result],
            //   RequestResult[resultData.Result]
            // );
          }
          resultData = null;
        } else {
          // this.notificationService.openNotification(
          //   RequestResult[500],
          //   RequestResult[500]
          // );
        }
        this.editBankForm.enable();
        this.updatingBankInProgress = false;
      });

      //requestUpdateBank = null;
    } catch (error) {
      //this.notificationService.openNotification(RequestResult[500], 'Error');
      this.editBankForm.enable();
      this.updatingBankInProgress = false;
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    if (control.value != null) {
      return control.value.includes(' ') ? { whitespace: true } : null;
    }
    return null;
  }
}
