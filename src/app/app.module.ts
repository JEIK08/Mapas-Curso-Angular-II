import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Google Maps
import { AgmCoreModule } from '@agm/core';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Services
import { MapasService } from './services/mapas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8dwnHJw0gWfuxa3Ck4P517DP2U4K1cjw'
    }),
    FormsModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
