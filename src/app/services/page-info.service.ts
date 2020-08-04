import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface'

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  dataInfor: InfoPagina = {};
  cargada = false;
  equipo: any[] =[];

  constructor( private http: HttpClient) {
    console.log('Servicio info listo')
    this.cargarInfo();
    this.cargarEquipo();
    
   }

   private cargarInfo(){
     // leer el JSON
    this.http.get('assets/data/info.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.dataInfor = resp;
      });
   }

   private cargarEquipo() {

    this.http.get('https://project-angular-c025d.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo =resp
        console.log(resp);
      });
     
   }
}
