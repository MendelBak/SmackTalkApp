import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JoinTeamComponent } from './join-team/join-team.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CreateTeamComponent } from './/choose-team/create-team/create-team.component';
import { ChooseTeamComponent } from './choose-team/choose-team.component';
import { HomeComponent } from './home/home.component';
import { FilterPipePipe } from './filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    CreateTeamComponent,
    JoinTeamComponent,
    ChooseTeamComponent,
    HomeComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
