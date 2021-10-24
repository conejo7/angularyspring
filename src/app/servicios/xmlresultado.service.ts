
import { Injectable } from '@angular/core';
import { XmlResultado } from '../models/xmlresultado.model';
import { XMLRESULTADOS } from '../components/clientes/xmlresultado.json';
import { Cfg_agencia } from '../models/cfg_agencia.model';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class XmlResultadoService {
    
    private urlEndPoint:string = 'http://localhost:8080/api/agencias';
    constructor(private http: HttpClient) {
        console.log("Servicio listo para usarse");
    }

    getXmlResultados(): Observable<Cfg_agencia[]>{
      //  return of(XMLRESULTADOS);

        return this.http.get(this.urlEndPoint).pipe(
            map( response => response as Cfg_agencia[])
        );
        // return this.http.get<Cfg_agencia[]>(this.urlEndPoint);
        
    }

    
    

}