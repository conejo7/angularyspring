import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { APP_ROUTING } from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientesComponent } from './components/clientes/clientes.component';

//servicios
import {XmlResultadoService} from './servicios/xmlresultado.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ClientesComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    XmlResultadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
