import { environment } from './../../../environments/environment';
import { AltCoin } from './../models/alt-coin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltCoinService {


  altCoins: AltCoin[];
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }


  getAltCoinById(altCoinSymbol: string): any {
    return this.httpClient.post(this.apiUrl + 'bclvtng/admin/bl/getAltCoin', { 'altCoinSymbol': altCoinSymbol });
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

  verifyAltCoin(coinToken: string): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'bclvtng/vtng/bl/checkAltCoin', { 'altCoinKey': coinToken, 'userID': 'I004' });
  }

  createAltCoin(altCoin: AltCoin) {
    alert('Update to be Implemeted');

  }

  updateAltCoin(altCoin: AltCoin) {
    alert('Update to be Implemeted');
  }
}
