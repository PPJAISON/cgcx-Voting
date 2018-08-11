import { Component, OnInit } from '@angular/core';

import { AltCoin } from './../../../_shared/models/alt-coin.model';
import { AltCoinService } from './../../../_shared/services/alt-coin.service';

@Component({
  selector: 'app-alt-coin-list',
  templateUrl: './alt-coin-list.component.html',
  styleUrls: ['./alt-coin-list.component.css']
})
export class AltCoinListComponent implements OnInit {

  public altCoins: AltCoin[];

  constructor(private altCoinService: AltCoinService) {
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
}
