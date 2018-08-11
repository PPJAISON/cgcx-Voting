import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AltCoin } from './../../_shared/models/alt-coin.model';
import { AltCoinService } from './../../_shared/services/alt-coin.service';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.css']
})
export class VotingPanelComponent implements OnInit {

  tokenStringForm: FormGroup;
  activeAltCoins: AltCoin[];
  constructor(private fb: FormBuilder, private altCoinService: AltCoinService) { }

  ngOnInit() {
    this.initForm();
    this.altCoinService.getVoteEnabledAltCoins().subscribe(res => {
      console.log(res);
      this.activeAltCoins = res.data;
    }, error => {
      console.log(error);
    }
    );
  }

  private initForm() {
    this.tokenStringForm = this.fb.group({
      tokenString: ['', Validators.required]
    });
  }

  verifyTokenString() {
    console.log(this.tokenStringForm.value);
  }

  voteAltCoin(altCoinId: number) {
    console.log(altCoinId);
  }
}
