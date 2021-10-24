import { Component, OnInit } from '@angular/core';
import { XmlResultado } from '../../models/xmlresultado.model';
import { XMLRESULTADOS } from './xmlresultado.json';
import { XmlResultadoService } from '../../servicios/xmlresultado.service';
import { Cfg_agencia } from 'src/app/models/cfg_agencia.model';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listXmlResultados: XmlResultado[];
  listCfgAgencias: Cfg_agencia[];
  
  constructor(private xml_resultadoService: XmlResultadoService) { }

  ngOnInit(): void {
    this.xml_resultadoService.getXmlResultados().subscribe(
      //listXmlResultados => this.listXmlResultados = listXmlResultados
      listCfgAgencias => this.listCfgAgencias = listCfgAgencias
      
    );
   console.log(this.xml_resultadoService);
this.xml_resultadoService.getXmlResultados().subscribe(resp => { console.log(resp)})

  }

}
