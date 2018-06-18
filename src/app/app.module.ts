import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { HeaderComponent } from './header/header.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { StatsComponent } from './stats/stats.component';
import { NewProgramComponent } from './new-program/new-program.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtifactComponent,
    StatsComponent,
    NewProgramComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
