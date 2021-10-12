import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../models/purchase.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL = `${environment.BASE_URL}/api/v1`;

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService{

  constructor(authenticationService: AuthenticationService, httpClient: HttpClient) {
    super(authenticationService, httpClient);
  }

  savePuchase(puchase: Purchase): Observable<any> {
    return this.httpClient.post(API_URL + '/purchase-history', puchase, {headers: this.getHeader});
  }

  getAllPurchaseItems(): Observable<any> {
    return this.httpClient.get(API_URL + '/purchase-history', {headers: this.getHeader});
  }

}
