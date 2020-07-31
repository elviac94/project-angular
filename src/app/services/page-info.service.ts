import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  dataInfor:any={};
  cargada=false;

  constructor( private http: HttpClient) {
    console.log('Servicio info listo')

    // leer el JSON
    this.http.get('assets/data/info.json')
      .subscribe( resp => {

        this.cargada = true;
        this.dataInfor = resp;
        console.log(resp);
      });
   }
}
