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
  altCoinId: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private altCoinService: AltCoinService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id'] != null) {
          this.altCoinId = params['id'];
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
      altCoinSymbol: ['', Validators.required],
      enabledForVoting: new FormControl(false),
      enabledForTrading: new FormControl(false)
    });

    if (this.editMode) {
      this.altCoinService.getAltCoinById(this.altCoinId).subscribe((res) => {

        console.log(res.data[0]);
        const altCoin = res.data[0] as AltCoin;
        this.altCoinForm.setValue({
          name: altCoin.name,
          altCoinSymbol: altCoin.altCoinSymbol,
          enabledForVoting: altCoin.enableForVoting,
          enabledForTrading: altCoin.enableForTrading
        });
        this.altCoinForm.controls['name'].disable();
        this.altCoinForm.controls['altCoinSymbol'].disable();
      });

    }
  }

  addOrUpdateAltCoin() {
    console.log(this.altCoinForm.value);
    const altCoin = this.altCoinForm.value as AltCoin;
    if (this.editMode) {
      altCoin._id = this.altCoinId;
      this.altCoinService.updateAltCoin(altCoin);
    } else {
      this.altCoinService.createAltCoin(altCoin);
    }
  }

  redirectToExpenseList() {
  }

}
