import { Component, OnInit } from '@angular/core';
import { XmlResultado } from '../../models/xmlresultado.model';
import { XMLRESULTADOS } from './xmlresultado.json';
import { XmlResultadoService } from '../../servicios/xmlresultado.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listXmlResultados: XmlResultado[];

  

  constructor(private xml_resultadoService: XmlResultadoService) { }

  ngOnInit(): void {
    this.xml_resultadoService.getXmlResultados().subscribe(
      listXmlResultados => this.listXmlResultados = listXmlResultados
    );
  }

}
