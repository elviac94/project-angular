import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface'

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  dataInfor: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {
    console.log('Servicio info listo')

    // leer el JSON
    this.http.get('assets/data/info.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.dataInfor = resp;
        console.log(resp);
      });
   }
}
