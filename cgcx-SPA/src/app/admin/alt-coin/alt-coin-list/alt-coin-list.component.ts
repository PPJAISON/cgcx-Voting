import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AltCoin } from './../../../_shared/models/alt-coin.model';
import { AltCoinService } from './../../../_shared/services/alt-coin.service';

@Component({
  selector: 'app-alt-coin-list',
  templateUrl: './alt-coin-list.component.html',
  styleUrls: ['./alt-coin-list.component.css']
})
export class AltCoinListComponent implements OnInit {

  public altCoins: AltCoin[];
  modalRef: BsModalRef;
  modalMessage: string;
  constructor(private altCoinService: AltCoinService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.getAltCoins();
  }

  getAltCoins() {
    this.altCoinService.getAltCoins().subscribe(res => {
      console.log(res);
      this.altCoins = res.data;
    }, error => {
      console.log(error);
    }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalMessage = 'Yo';
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

}
