import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { HeaderComponent } from './header/header.component';
import { ArtifactComponent } from './dashboard/artifact/artifact.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { NewProgramComponent } from './dashboard/new-program/new-program.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProgramService } from './program.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtifactComponent,
    StatsComponent,
    NewProgramComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MainRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
