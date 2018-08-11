import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';
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
  modalRef: BsModalRef;
  message: string;
  selectedAltCoinName: string;
  selectedAltCoinId: number;

  constructor(private fb: FormBuilder, private altCoinService: AltCoinService, private modalService: BsModalService) { }
  isTokenVerified: boolean;
  ngOnInit() {
    this.initForm();

  }

  private initForm() {
    this.tokenStringForm = this.fb.group({
      tokenString: ['', Validators.required]
    });
  }

  verifyTokenString() {
    console.log(this.tokenStringForm.value);
    if (this.tokenStringForm.value.tokenString === '7') {
      this.isTokenVerified = true;
      this.altCoinService.getVoteEnabledAltCoins().subscribe(res => {
        console.log(res);
        this.activeAltCoins = res.data;
      }, error => {
        console.log(error);
      }
      );
    } else {
      this.isTokenVerified = false;
    }
  }

  voteAltCoin(template: TemplateRef<any>, altCoinId: number, altCoinName: string) {
    console.log(altCoinId);
    console.log(altCoinName);
    this.selectedAltCoinName = altCoinName;
    this.selectedAltCoinId = altCoinId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    console.log(this.selectedAltCoinId);
    console.log(this.selectedAltCoinName + ' voted');

    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
