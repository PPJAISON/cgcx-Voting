import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { AltCoin } from './../../../_shared/models/alt-coin.model';
import { AltCoinService } from './../../../_shared/services/alt-coin.service';

@Component({
  selector: 'app-alt-coin-editor',
  templateUrl: './alt-coin-editor.component.html',
  styleUrls: ['./alt-coin-editor.component.css']
})
export class AltCoinEditorComponent implements OnInit {

  altCoinForm: FormGroup;
  editMode = false;
  titleText = 'Create Coin Entry';
  submitButtonText = 'Create';
  altCoinId: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private altCoinService: AltCoinService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id'] != null) {
          this.altCoinId = +params['id'];
          this.editMode = true;
          this.titleText = 'Update Coin Entry';
          this.submitButtonText = 'Update';
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    this.altCoinForm = this.fb.group({
      name: ['', Validators.required],
      symbol: ['', Validators.required],
      last: [0, Validators.required],
      enabledForVoting: new FormControl(false),
      enabledForTrading: new FormControl(false)
    });

    if (this.editMode) {
      const altcoin = this.altCoinService.getAltCoinById(this.altCoinId);
      this.altCoinForm.setValue({
        name: altcoin.name,
        symbol: altcoin.symbol,
        last: altcoin.last,
        enabledForVoting: altcoin.enableForVoting,
        enabledForTrading: altcoin.enableForTrading
      });
    }
  }

  addOrUpdateAltCoin() {
    console.log(this.altCoinForm.value);
    const altCoin = this.altCoinForm.value as AltCoin;
    if (this.editMode) {
      altCoin.id = this.altCoinId;
      this.altCoinService.updateAltCoin(altCoin);
    } else {
      this.altCoinService.createAltCoin(altCoin);
    }
  }

  redirectToExpenseList() {
  }

}
