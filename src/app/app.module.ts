import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire/compat'

import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserSidePanelComponent } from './components/user-page/user-side-panel/user-side-panel.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { ReportLostItemComponent } from './components/user-page/report-lost-item/report-lost-item.component';
import { ReportFoundItemComponent } from './components/user-page/report-found-item/report-found-item.component';
import { MyReportedItemsComponent } from './components/user-page/my-reported-items/my-reported-items.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserPageComponent,
    UserSidePanelComponent,
    ReportLostItemComponent,
    ReportFoundItemComponent,
    MyReportedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
