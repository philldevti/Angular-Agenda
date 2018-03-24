import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  AUTH_COOKIE: string = 'agendaCookie';
  constructor(private http: Http) { }

  getCEP(cep: string){
    return this.http.get('https://viacep.com.br/ws/'+ cep + '/json').map(a=> a.json());
  }
}
