import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
const API_URL = 'http://localhost:3000/cats';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private cats;
  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }


 getCats() {
    //console.log(this.tokenService.getToken());
    
    const headers = new HttpHeaders().set("Authorization", "Bearer " + this.tokenService.getToken());
    return  this.httpClient.get(API_URL, { headers });
      
  
  }

}
