import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDialogueComponent } from './user-dialogue/user-dialogue.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagingComponent } from './messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDialogueComponent,    
    NavbarComponent, MessagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
