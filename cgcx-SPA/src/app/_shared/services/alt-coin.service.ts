import { environment } from './../../../environments/environment';
import { AltCoin } from './../models/alt-coin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltCoinService {

  altCoins: AltCoin[] ;
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // create(accountingCode: AccountingCode): Observable<any> {
  //   return this.httpClient.post(this.apiUrl + 'AccountingCodes/Create', accountingCode);
  // }

  // list(): Observable<AccountingCode[]> {
  //   return this.httpClient.get<AccountingCode[]>(this.apiUrl + 'AccountingCodes/List');
  //   // return this.httpClient.get<AccountingCode[]>(this.apiUrl + 'BuyerOrgLocations/Test2');
  // }

  getAltCoinById(id: string): AltCoin {
    return this.altCoins.find(a => a._id === id);
  }

  getVoteEnabledAltCoins(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'bclvtng/vtng/bl/getAltCoins');
  }

  getAltCoins(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'bclvtng/admin/bl/getAltCoins');
  }

  getUserSummary(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'bclvtng/admin/bl/getUserSummary');
  }

  createAltCoin(altCoin: AltCoin) {
    // return this.httpClient.get(this.apiUrl + 'bclvtng/admin/bl/getAltCoins');
    alert('Update to be Implemeted');

  }

  updateAltCoin(altCoin: AltCoin) {
    alert('Update to be Implemeted');
  }
}
