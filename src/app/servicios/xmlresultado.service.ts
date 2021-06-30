
import { Injectable } from '@angular/core';
import { XmlResultado } from '../models/xmlresultado.model';
import { XMLRESULTADOS } from '../components/clientes/xmlresultado.json';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class XmlResultadoService {

    constructor() {
        console.log("Servicio listo para usarse");
    }

    getXmlResultados(): Observable<XmlResultado[]>{
        return of(XMLRESULTADOS);
    }

}