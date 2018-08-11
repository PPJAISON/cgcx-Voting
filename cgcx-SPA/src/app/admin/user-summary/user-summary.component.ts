import { AltCoinService } from './../../_shared/services/alt-coin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor(private altCoinService: AltCoinService) { }

  ngOnInit() {
    this.bindUserSummary();
  }

  bindUserSummary() {
    this.altCoinService.getUserSummary().subscribe(res => {
      console.log(res);
      // this.activeAltCoins = res.data;
    }, error => {
      console.log(error);
    }
    );
  }

}
