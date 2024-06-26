import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MenuComponent } from './pages/portfolio/menu/menu.component';
import { CabecalhoComponent } from './pages/portfolio/cabecalho/cabecalho.component';
import { SobreComponent } from './pages/portfolio/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MenuComponent,
    CabecalhoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
